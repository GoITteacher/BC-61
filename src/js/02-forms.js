/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formElem = document.querySelector('.js-register-form');

formElem.addEventListener('submit', onFormSubmit);

/* function onFormSubmit(e) {
  e.preventDefault();

  const { email1, email2, email3, password, subscription } =
    e.currentTarget.elements;

  console.log(e.currentTarget.elements);

  const userData = {
    email1: email1.value,
    email2: email2.value,
    email3: email3.value,
    password: password.value,
    subscription: subscription.value,
  };

  console.log(userData);
} */

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
}
