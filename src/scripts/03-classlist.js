let myBtn = document.querySelector('#testButton');

/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

let listItem = document.querySelector('.js-list');
console.log(listItem);

const liElem = listItem.querySelector('li');
console.log();

/* if (liElem.classList.contains('bold')) {
  liElem.classList.add('upper');
} else {
  liElem.classList.add('italic', 'upper', 'tomato');
} */

// liElem.classList.remove('bold', 'blue');

function onBtnClick() {
  //   console.log(liElem.classList.toggle('upper'));
  //   liElem.classList.replace('upper', 'tomato');
  liElem.style.padding = '50px';
  liElem.style.border = '1px solid black';
  liElem.style.fontSize = '50px';
  liElem.style.backgroundColor = 'red';
  liElem.style.borderRadius = '15px';
}

/* 
Властивість style
*/

myBtn.addEventListener('click', onBtnClick);
