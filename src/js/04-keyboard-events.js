/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// document.addEventListener('keydown', e => {
//   // console.log(e.code);
//   // console.log(e.key);

//   // if (e.code === 'w') {
//   //   console.log('Hello');
//   // } else {
//   //   console.log(`Bad Key ${e.code} - ${e.key}`);
//   // }

//   console.log(`Down - ${e.code}`);
// });

// document.addEventListener('keyup', e => {
//   console.log(`Up - ${e.code}`);
// });

// document.addEventListener('keypress', e => {
//   if (e.ctrlKey && e.shiftKey && e.code === 'KeyQ') {
//     console.log('Save data');
//   }
// });
