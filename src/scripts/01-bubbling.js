/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
};

refs.descendant.addEventListener('click', e => {
  console.log('descendant1');
  e.stopImmediatePropagation();
});

refs.descendant.addEventListener('click', e => {
  console.log('descendant2');
});

refs.descendant.addEventListener('click', e => {
  console.log('descendant3');
});

refs.child.addEventListener('click', e => {
  console.log('child');
});

refs.parent.addEventListener('click', e => {
  console.log('parent');
});

// refs.parent.addEventListener('click', e => {
//   console.log('TARGET', e.target.dataset.value);
//   console.log('CURRENT TARGET', e.currentTarget.dataset.value);
// });
