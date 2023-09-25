const refs = {
  inputNameEl: document.querySelector('.js-feedback-form [name="name"]'),
  inputMessageEl: document.querySelector('.js-feedback-form [name="message"]'),
  formEl: document.querySelector('.js-feedback-form'),
};

refs.inputNameEl.addEventListener('input', onDataInput);
refs.inputMessageEl.addEventListener('input', onDataInput);

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  console.log(data);
  e.target.reset();
  localStorage.removeItem('formData');
  data = {};
});

let data = {};

function onDataInput(e) {
  const key = e.target.name; // 'message'
  const value = e.target.value;
  data[key] = value;
  saveToLS('formData', data);
}

// ===========================

function onLoadPage() {
  data = loadFromLS('formData') || {};
  console.log(data);
  refs.inputNameEl.value = data.name || '';
  refs.inputMessageEl.value = data.message || '';
}
onLoadPage();

// ===========================

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}
