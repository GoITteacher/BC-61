let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
  sendBtn: document.querySelector('.js-btn'),
};

let myLang = '';
let myLangs = [];

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  const isActive = liElem.classList.toggle('active');
  const value = liElem.textContent.trim();
  if (isActive) {
    myLangs.push(value);
  } else {
    myLangs = myLangs.filter(el => el !== value);
  }
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  const oldElem = refs.secondTagsList.querySelector('.active');
  oldElem?.classList.remove('active');
  liElem.classList.add('active');

  const value = liElem.textContent.trim();
  myLang = value;
});

refs.sendBtn.addEventListener('click', () => {
  console.log(myLangs);
  console.log(myLang);
});
