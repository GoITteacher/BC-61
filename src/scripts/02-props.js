let myBtn = document.querySelector('#testButton');
// const imgElem = document.querySelector('#imgTest');
// function onBtnClick() {
//   console.log(imgElem);
//   console.log(imgElem.hasAttribute('disabled'));
//   console.log(imgElem.getAttribute('src'));
//   // console.log(imgElem.setAttribute('src', '123'));
//   console.log(imgElem.removeAttribute('disabled'));
// }

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

// myBtn.addEventListener('click', onBtnClick);

// console.log(imgElem.attributes);

const imgElem = document.querySelector('#img2');
console.log(imgElem);
console.log(imgElem.dataset.userAge);
console.log(imgElem.dataset.userName);
console.log(imgElem.dataset.userId);
console.log(imgElem.dataset.userTest);
