/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

/* refs.input.addEventListener('focus', e => {
  e.currentTarget.classList.remove('valid', 'invalid');
});

refs.input.addEventListener('blur', e => {
  const value = e.currentTarget.value;
  const myStr = e.currentTarget.dataset.test;

  if (value.includes(myStr)) {
    e.currentTarget.classList.add('valid');
  } else {
    e.currentTarget.classList.add('invalid');
  }
}); */

refs.input.addEventListener('input', onInputElChange);
function onInputElChange(e) {
  const userName = e.currentTarget.value.trim();
  refs.nameLabel.textContent = userName || 'Аноним';

  // if(userName.length > 0){
  //   refs.nameLabel.textContent = userName
  // }else{
  //   refs.nameLabel.textContent = "Аноним"
  // }
}

refs.licenseCheckbox.addEventListener('change', onLicenseCheckboxChange);

function onLicenseCheckboxChange(e) {
  const isChecked = e.currentTarget.checked;
  const isActive = !isChecked;
  refs.btn.disabled = isActive;
}
