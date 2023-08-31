/*
 * Цикл while
 */

// const rand = Math.round(Math.random() * 100);
// let numb = prompt('Enter number');

/* while (numb !== rand) {
  if (numb > rand) {
    console.log('Трохи меньше');
  } else {
    console.log('Трохи більше');
  }

  numb = +prompt('Enter number');
} */

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 1;
// }

/*
 * Цикл do while
 */

// const rand = Math.round(Math.random() * 100);
// let numb;

// do {
//   numb = +prompt('Enter number');
//   if (numb > rand) console.log('<');
//   else console.log('>');
// } while (numb !== rand);
// const mySalary = 1000;
// let salary = 1500;

// while (salary < mySalary) {
//   console.log('I want more');
//   salary += 200;
// }
// console.log(salary);

// const mySalary = 1000;
// let salary = 1500;

// do {
//   console.log('I want more');
//   salary += 200;
// } while (salary < mySalary);

// console.log(salary);
/*
 * Цикл for
 */

/* for (let i = 100; i < 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
} */

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

/* const minSalary = 500;
const maxSalary = 5000;
const employees = 100;
let totalSalary = 0;

for (let i = 0; i < employees; i++) {
  const randomSalary =
    Math.round(Math.random() * (maxSalary - minSalary)) + minSalary;
  totalSalary += randomSalary;
  //   console.log(`Salary (${i + 1}) - ${randomSalary}`);
}

console.log(totalSalary); */

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

/* let min = 0;
let max = 10;
let total = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 == 0) {
    total += i;
    console.log(total);
  }
}

console.log(total); */

// ====================================

// const numb = +prompt('Enter NUmber (0-10)');
// // debugger;
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log('Iteration', i);
//   if (i === numb) {
//     console.log(`Your number - ${i}`);
//   }
// }
