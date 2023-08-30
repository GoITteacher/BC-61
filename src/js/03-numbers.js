/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

/* const userAge = prompt('Enter your age:');

console.log(userAge);

const result1 = Number.parseInt(userAge);
const result2 = Number.parseFloat(userAge);

console.log(result1);
console.log(result2); */
/*
 * - Метод число.toFixed(digits)
 */

/* const myNum = 10.23534612;
const result = myNum.toFixed(3);// '10.235'
console.log(result); */

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

// const num = '123';
// const result = Number(undefined);
// const result = +'123sef';
// console.log(result);

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const x = 10;
// const y = 4;

// const result = Math.pow(x, y);
// const result = x ** y;
// console.log(result);

// console.log(x % y);

// 10 % 4 = 2;
// 10 - (2*4) = 2

// 15%4
// 15 - (4*3) = 3
// ==============

// let x = 10;
// x = x + 5; //15
// x *= 2; //20

// console.log(x);

/*
 * Напиши скрипт который просит пользователя ввести 
число и степень,
 * возводит число в эту степень и выводит результат 
в консоль
 */

//  1. попросить ввести число и сохранить в переменную
//  2. попросить ввести степень и сохранить в переменную
//  3. Возвести введенные данные в степень и вывести

// let num = +prompt('Enter your number');
// let power = +prompt('Enter power pls');
// const result = num ** power;

// console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */

// const rand = Math.round(Math.random() * 10000); // 0 - 100
// console.log(rand);

// Math.round(10.6312342); // 10 11
// Math.ceil(10.0001342); //11
// Math.floor(10.9912342); //10
