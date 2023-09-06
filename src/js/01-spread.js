/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const arr1 = [1, 2, 43, 5, 6, 1, 4, 6, 7, 2];
// const arr2 = [...arr1];
// const arr3 = [1, 2, 3, ...arr1, 91, 92, 93];
// console.log(arr3);

// const arr = [1, 1, 1, 1, 1, 1];
// console.log(arr);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
// ==============================
// const temps = [21, 17, 29, 24];

// const min = Math.min(...temps);
// console.log(min);

// const max = Math.max(...temps);
// console.log(max);
// ==============================

// const arr1 = [1, 2, 3];
// const arr2 = [9, 10, 11];

// arr1.push(...arr2);

// console.log(...arr1);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// const copy = [...arr1];
// const result = arr1.concat(arr2, arr3);
// const result = ['START', ...arr3, 'HELLO', ...arr1, 'HELLO', ...arr2, 'END'];
// console.log(result);
/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */

const user1 = {
  a: 1,
  b: 2,
  c: 3,
};

const user2 = {
  d: 5,
  e: 7,
  f: 9,
};

const user3 = {
  a: 5,
  ...user1,
  c: 7,
  f: 0,
  ...user2,
  d: 4,
};
const user4 = { ...user3 };
console.log(user3);
console.log(user4);

// ===============
