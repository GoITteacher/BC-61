/*
 * Приведение к булю на примере Boolean(value)
 */

const x1 = Boolean('123'); // true
const x2 = Boolean(''); // false
const x3 = Boolean(1); // true
const x4 = Boolean(555); // true
const x5 = Boolean(-1); // true
const x6 = Boolean(0); // false
const x7 = Boolean(undefined); // false
const x8 = Boolean(null); // false

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// const result = '1' && null && '3' && '4';
// console.log(result);

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

const result = (true && true) || false || (true && false);

console.log(result);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */
