/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const user = {
//   name: 'Volodymyr',
//   age: 23,
//   phoneNumber: '0991223423',
//   address: 'city Dnipro',
// };

// function foo(){}
// for(){}
// if(){}
// switch(){}

/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

// const user = {
//   userName: 'Roman',
//   login: 'romantika',
//   password: '12323443453',
//   isStudent: false,
//   address: {
//     country: 'Ukraine',
//     city: 'Dnipro',
//     street: 'Yabluneva',
//     location: {
//       x: 10000,
//       y: 23423,
//     },
//   },
//   test1: false,
// };

// console.log(user);
// console.log(user['test1']);
// console.log(user['address']['location']['x']);

// console.log(user1);
// console.log(user1.login);
// console.log(user1.address.city);
// console.log(user1.address.location.x);

// console.log(user.hello);
// const myKey = 'login';
// console.log(user[myKey]);

/* user.login = 'Hello';
user.address.location.x = 9999;
user.address.location.z = 5623;
user.phoneNumber = '099623535';
console.log(user);

user.child = {
  name: 'Mila',
  age: 5,
  weight: 20,
  height: 120,
};
 */

// =============================

/* const userName = 'Vlad';
const age = 20;
const isStudent = false;

const user = {
  userName,
  age,
  isStudent,
}; */

// ============================

// const numbers = ['099123234', '123423412', '123423423'];

// const prefix = 'user';
// const user = {
//   ['Name'.toUpperCase()]: 'hello',
//   [`${prefix}Age`.toUpperCase()]: 'test',
//   [`${prefix}PhoneNumber`.toUpperCase()]: 'test',
// };
// console.log(user);
// =============================

// const dog1 = {
//   name: 'Lord',
//   age: 12,
//   color: 'black',

//   sayWoof() {
//     console.log('Woof woof');
//   },
//   sayName() {
//     console.log(dog1.name);
//   },
// };

// const dog2 = {
//   name: 'Mars',
//   age: 12,
//   color: 'black',

//   sayWoof() {
//     console.log('Woof woof');
//   },
//   sayName() {
//     console.log(this.color);
//   },
// };

// dog1.sayName();
// dog2.sayName();

// const cat = {
//   name: 'Marsik',
//   age: 5,
//   color: 'black',

//   sayMyaw() {
//     console.log('Myaw Myaw');
//   },
// };

// console.log(cat.age);
// cat.sayMyaw();

// console.log(dog.color);
// dog.sayWoof();
// dog.sayWoof();
// dog.sayWoof();

/*
 * Ссылочный тип {} === {}
 */

const x = {
  name: 'Volodymyr',
};

const y = x;
y.name = 'Volodka';
x.name = 'Max';
console.log(y.name);

console.log(x, y);
console.log(x === y);
/*
 * Массивы и функции это объекты
 */

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr['test'] = 'Hello';
// console.log(arr);
