/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

function calculateTotalPrice(items) {
  let sum = 0;
  for (let price of items) {
    sum += price;
  }
  return sum;
}

const cart1 = [1, 4, 7, 2, 5];
const cart2 = [123, 354, 2, 4, 2, 1, 3, 52];
const cart3 = [2, 34, 2, 33, 45, 123, 245, 32, 1, 234];

let total1 = calculateTotalPrice(cart1); //19
let total2 = calculateTotalPrice(cart2); //541
let total3 = calculateTotalPrice(cart3); //751

console.log(total1);
console.log(total2);
console.log(total3);
console.log(total1 + total2 + total3);
// ========================

// function sum(x = 10, y = 10) {
//   console.log(x + y);
// }

// sum(undefined, 3);
