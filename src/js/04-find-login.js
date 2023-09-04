/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

function findLogin(allLogins, findLogin) {
  let message;

  return allLogins.includes(findLogin) ? 'Hello' : 'Bye';

  // for_of
  /* for (const login of allLogins) {
    if (login === findLogin) {
      message = `Пользователь ${login} найден.`;
      return message;
    }
  }
   */

  /* for (let i = 0; i < allLogins.length; i++) {
    if (allLogins[i] === findLogin) {
      message = `Пользователь ${findLogin} найден.`;
      return message;
    }
  } */

  message = `Пользователь ${findLogin} не найден.`;
  return message;
}

const result = findLogin(logins, 'aj4xth3m4n');

console.log(result);
// ===========
