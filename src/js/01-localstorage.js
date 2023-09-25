// const x = {
//   name: 'Hello',
//   age: 234,
//   isStudent: false,
//   money: null,
//   sayHello() {
//     console.log('hello');
//   },
// };

// let jsonData = JSON.stringify(x);
// jsonData = jsonData.toUpperCase();
// console.log(jsonData);

// jsonData = jsonData.replace('FALSE', 'false');
// jsonData = jsonData.replace('NULL', 'null');
// const copyObj = JSON.parse(jsonData);
// console.log(copyObj);

// ==========================================

// const user = {
//   name: 'Vasya',
//   age: 123,
//   isStudent: true,
// };

// localStorage.setItem('myKey2', JSON.stringify(user));

// ==========================================

// const x3 = JSON.parse(localStorage.getItem('myKey2'));
// console.log(x3);

// ========================================

// localStorage.clear();
// localStorage.removeItem('myKey1');

// console.log(localStorage.key(2));

// console.log(localStorage.length);

// ========================================

// function saveToLS(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// function loadFromLS(key) {
//   const data = localStorage.getItem(key);
//   try {
//     return JSON.parse(data);
//   } catch {
//     return data;
//   }
// }

// =========================================

// const str = 'Hello World';

// const result = JSON.parse(str);

// console.log(result);

// ===============

// console.log('BEGIN');
// const str = prompt('Enter your JSON data');

// try {
//   console.log('before parse');
//   const data = JSON.parse(str);
//   console.log(data);
//   console.log('after parse');
// } catch (err) {
//   console.log(err);
// }

// console.log('END');
// ===============
