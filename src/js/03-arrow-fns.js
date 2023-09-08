/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 */

// const myFun = () => {
//   console.log('Hello world');
// };

// const sum = (x, y) => {
//   console.log(x + y);
// };

// sum(10, 20);

// const toPower1 = x => x ** 2;
// const toPower2 = x => {
//   return x ** 2;
// };

// console.log(toPower1(4));
// console.log(toPower1(8));

// const myFun = (...rest) => {
//   console.log(rest);
// };

// myFun(10, 20, 30, 40);

//==================================

const arr = [20, 30, 40, 60, 10, 20, 30, 50, 60];

const filtered = [];

arr.forEach((el, idx, array) => {
  if (idx % 2 === 0) {
    filtered.push(el);
  }
});

console.log(filtered);
