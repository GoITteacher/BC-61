let myBtn = document.querySelector('#testButton');
let listElem = document.querySelector('.usernames');

/* 
Створення
document.createElement(tagName);
*/

const listItems = [];
for (let i = 0; i < 10; i++) {
  const myElem = document.createElement('li');
  myElem.classList.add('wrong');
  myElem.style.width = '100px';
  myElem.style.height = '50px';

  const pElem = document.createElement('p');
  pElem.textContent = `Hello - ${i}`;
  myElem.append(pElem);

  const spanElem = document.createElement('span');
  pElem.append(spanElem);

  listItems.push(myElem);
}

console.log(listItems);
listElem.append(...listItems);

// listElem.append(...myElems);

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

/* 
Видалення
elem.remove();
*/

myBtn.remove();
console.log(myBtn);

listElem.append(myBtn);
