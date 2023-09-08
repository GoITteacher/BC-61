/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// function myDay(x, y) {
//   console.log('\n\n------------------------');
//   console.log('1');
//   console.log('2');
//   console.log('eat ', x);
//   console.log('go to school');
//   y();
//   console.log('go to home');
//   console.log('the end');
//   console.log('------------------------\n\n');
// }

// function dayOff() {
//   console.log('rest');
// }

// function goToMusicSchool() {
//   console.log('go to music school');
// }

// function goToDanceSchool() {
//   console.log('go to dance school');
// }

// function goToDanceSwimmingPool() {
//   console.log('go to Swimming Pool');
// }

// myDay('meat', goToMusicSchool);
// myDay('meat', dayOff);
// myDay('meat', goToDanceSwimmingPool);
// myDay('', dayOff);
// myDay('milk', goToDanceSchool);

/*
 * функция doMath(a, b, callback)
 */

// function doMath(x, y, callback) {
//   const result = callback(x, y);
//   console.log('Result - ', result);
// }

// function sum(x, y) {
//   return x + y;
// }
// function subtraction(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// doMath(10, 20, sum);
// doMath(10, 20, divide);
// doMath(10, 20, subtraction);
// doMath(10, 20, multiply);
/*
 * Отложенный вызов: регистрация событий
 */

// const btn = document.querySelector('.js-button');

// btn.addEventListener('click', hello);

// function hello() {
//   console.log('Hello my friend');
// }

/*
 * Отложенный вызов: интервалы
 */

// setInterval(hello, 1000);

// ================================================

// function father() {
//   const x = 'black';
//   const y = 'Hello';
//   const q = '';

//   function createCar() {
//     // x = 'black'
//     // y = 'hello'
//     // t = 100;
//     console.log('created car');
//     console.log(x);
//     console.log(y);
//     console.log(t);
//   }

//   return createCar;
// }

// const result1 = father();
// const result2 = father();
// const result3 = father();

// debugger;
// const t = 100;
// result1();
// result2();
// result3();

// ===================

// function foo(x, y) {
//   y();
//   x();
// }

// foo(
//   function () {
//     console.log('world');
//   },
//   function () {
//     console.log('hello');
//   },
// );
