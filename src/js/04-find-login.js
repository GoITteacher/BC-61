/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const firstLoginToFind = 'm4ngosfsefoge';
const secondLoginToFind = 'k1widab3st';
/* 
let message = `Пользователь ${firstLoginToFind} не найден.`;

for (let i = 0; i < logins.length; i++) {
  if (logins[i] === firstLoginToFind) {
    message = `Пользователь ${firstLoginToFind} найден.`;
    break;
  }
}

console.log(message);
 */

/* let message = `Пользователь ${firstLoginToFind} не найден.`;

for (let el of logins) {
  if (el === firstLoginToFind) {
    message = `Пользователь ${firstLoginToFind} найден.`;
    break;
  }
}
console.log(message); */

// const message = logins.includes(firstLoginToFind)
//   ? `Пользователь ${firstLoginToFind} найден.`
//   : `Пользователь ${firstLoginToFind} не найден.`;

// console.log(message);
