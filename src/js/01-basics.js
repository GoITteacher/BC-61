/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// function sayHello() {
//   console.log('Hello World');
// }
// function showLog() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
// }
// function sayBye() {
//   console.log('Bye-bye');
// }

// sayHello();
// sayHello();
// showLog();
// sayBye();
// sayBye();

// function foo(x, y) {
//   console.log(arguments);
//    console.log(x, y);
// }

// foo(10, null, 0, 20, 30, 40, 50);
// foo(20, 30);
// foo(0, 0, 0);

/* function sum(x1, x2) {
  //   console.log(x1 + x2);
  x1 += x2;
  x2 *= 2;

  return x1 + x2;
}

const result1 = sum(1, 2);
const result2 = sum(2, 3);
const result3 = sum(result1, result2);

console.log(result3); */

// myFunction();

// const x = 10 + 10;
// const myFunction = function () {};

// myFunction();

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */

function foo1() {
  console.log('foo1');
  foo2();
  console.log('end1');
}

function foo2() {
  console.log('foo2');
  foo3();
  console.log('end2');
}

function foo3() {
  console.log('foo3');
  console.log('end3');
}

foo1();

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// function foo123() {
//   console.log('Hello');
//   foo123();
// }

// foo123();
