// Чиста функція

/*

 - Поелементно перебирає масив.
 - Викликає колбек-функцію для кожного елемента масиву.
 - Нічого не повертає.

*/

const arr = [1, 3, 6, 7, 9, 2, 1, 3, 7, 4, 2];

const result = arr.forEach((el, idx, array) => {
  console.log(idx, el);
});

console.log(result);
