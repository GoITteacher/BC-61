/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const user = {
//   name: 'Max',
//   phoneNumber: '0234234',
//   isStudent: true,
// };

// =================================
// const name = user.name;
// const age = user.age;
// const phoneNumber = user.phoneNumber;
// const isStudent = user.isStudent;

// phoneNumber = 123;
// user.phoneNumber = '123';

// const name = 'Hello';

// const { name: myName, isStudent: isStudent2 = 0, phoneNumber } = user;
//const myName = user.name

// console.log(myName, isStudent2, phoneNumber);
// console.log(userName, phoneNumber, isStudent, age);

/*
 * Глубокая деструктуризация
 */

/* const user = {
  name: 'Mila',
  age: 23,
  isStudent: false,
  address: {
    country: 'Spain',
    city: 'Barcelona',
    location: {
      x: 10,
      y: 20,
    },
  },
}; */

/* const {
  name,
  age,
  address: {
    country,
    city,
    location: { x: locationX, y: locationY },
  },
} = user;

console.log(locationX, locationY); */

/* 
const newAddress1 = user.address
const newAddress2 = user.address
const newAddress3 = user.address
const newAddress4 = user.address
*/

// console.log(newAddress, newAddress2, newAddress3, newAddress4);

// const {country, city} = user.address;

/*
 * Деструктуризация массивов
 */

// const arr = [10, 20, 30, 40, 50, 60];
// const [x1, x2, x3, test = 0, , x4] = arr;
// console.log(x1, x2, x3, x4, test);;

// let x = 10;
// let y = 20;
// let q = 50;
// let t = 80;
// let r = 70;

// const arr = [10, 20, 40, 30, 50];
// [arr[0], arr[1]] = [arr[1], arr[0]];

/*
 * Операция rest (сбор)
 */

const arr = [1, 2, 3, 4, 5, 8, 6, 4, 32, 33, 457];
const [x1, x2, , , , , x7, x8, ...props] = arr;

const userParams = {
  id: 1231234,
  name: 'esef',
  age: 123,
  phoneNumber: '1231',
  isStudent: '123123',
  city: 'awdaw',
  country: '123',
};

// const { phoneNumber, ...user } = userParams;
// console.log(props);
// console.log(id, user);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

function foo({
  name = 123,
  age = 234,
  phoneNumber,
  isStudent,
  address,
  location,
}) {
  console.log(name);
  console.log(age);
  console.log(phoneNumber);
  console.log(isStudent);
  console.log(address);
  console.log(location);
}

foo({ name: 123, address: 'awd', location: '', isStudent: '1123' });
