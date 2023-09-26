/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('before settimeout');

// setTimeout(() => {
//   console.log('Hello 1');
// }, 3000);

// setTimeout(() => {
//   console.log('Hello 2');
// }, 1000);

// setTimeout(() => {
//   console.log('Hello 3');
// }, 4000);

// console.log('after settimeout');

// for (let i = 0; i < 10; i += 3) {
//   console.log(`iteration`, i);
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// setTimeout(() => {
//   console.log('hello1');
// }, 0);
// setTimeout(() => {
//   console.log('hello2');
// }, 3000);
// setTimeout(() => {
//   console.log('hello3');
// }, 1000);

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// const timeoutId1 = setTimeout(() => {
//   console.log('hello');
// }, 7000);

// const timeoutId2 = setTimeout(() => {
//   console.log('hello');
// }, 3000);

// const timeoutId3 = setTimeout(() => {
//   console.log('hello');
// }, 5000);

// console.log(timeoutId1, timeoutId2, timeoutId3);

// const resume = confirm();
// if (!resume) clearTimeout(timeoutId3);
