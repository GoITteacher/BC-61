/*

 - Поелементо перебирає оригінальний масив.
 - Не змінює оригінальний масив.
 - Результат роботи колбек-функції записується у новий масив.
 - Повертає новий масив однакової довжини.

*/

// const arr = ['Hello', 'World', 'Test', 'Word'];

// const result = arr.map((el, idx, arr) => {
//   return el.toUpperCase();
// });

// console.log(result);

// ==================

const str = 'Hello World Test Word JavaScript';

const result = str
  .split(' ')
  .map((el, idx) => {
    return !(idx % 2) ? el.toUpperCase() : el.toLowerCase();

    // if () {
    //   return el.toUpperCase();
    // } else {
    //   return el.toLowerCase();
    // }
  })
  .join(' ');

console.log(result);
