/*
 * Метод setInterval(callback, delay, args)
 */

let counter = 1;

const intervalId = setInterval(() => {
  console.log('Hello', counter++);
}, 1000);

/*
 * Очистка интервала с clearInterval(intervalId)
 */

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
