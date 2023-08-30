/*
 * Длина строки, свойство length
 */

// const myName = 'Volodymyr   sawd.;adawd';
// const myName = 'Milsaefawdaefsaawawa';
// const nameLength = myName.length;
// console.log(nameLength);

/*
 * Конкатенация строк
 */

// const firstStr = 'Hello ';
// const secondStr = 'World';

// const result = firstStr + secondStr + 'aefe' + 'sefse';
// console.log(result);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

// const x = 'Roman';
// const y = 'Test';
// const z = 'vip';
// const q = '24';

// const result = 'Гость ' + x + ' ' + y + ' поселяется в ' + z + ' номер ' + q;
// console.log(result);
/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

// const x = 'Roman';
// const y = 'Test';
// const z = 'vip';
// const q = '24';

// const result = `Гость ${x} ${y} поселяется в ${z} номер ${q}`;

// console.log(result);

/*
 * Нормализация с методом toLowerCase()
 */

// const userName = 'TEsT';
// const userName1 = userName.toLowerCase();
// const userName2 = userName.toUpperCase();
// console.log(userName, userName1, userName2);

/*
 * Поиск в строке с методом includes()
 */

// const str1 = 'hello 123 345 3464';
// const str2 = '123';

// const result = str1.includes(str2);
// console.log(result);

// =======================
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОдАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// const result = string2.toLowerCase().includes(blacklistedWord2);
// console.log(result);

// undefined => true
// 1 => false;
// 0 => true
