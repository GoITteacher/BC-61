/* 
Контекст виконання функції
*/

/* 
Правила визначення this
    - this у глобальній області видимості
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/

// function foo() {
//   console.log(this);
// }

// foo();

// function showName() {
//   console.log(this.name);
// }

// const user1 = {
//   name: 'Petya',
//   showName,
// };

// const user2 = {
//   name: 'Vasya',
//   age: 123,
//   phoneNumber: 123123,
//   test2: showName,
// };

// user1.showName();
// user2.test2();
// console.log(user2);
// function foo1(x, y, callback) {
//   const user = {
//     name: 'Vasya',
//     update: callback,
//   };
//   callback()
//   user.update(x + y);
//   console.log(user);
// }
// function myCallback(sum) {
//   this.sum = sum;
// }
// foo1(10, 20, myCallback);

// ===================================

// const arr = [10, 20, 30, 40, 50, 60, 70];

// function myCallback(el, idx, arr) {
//   console.log(this, idx, el);
// }

// arr.forEach(myCallback);

// ===================================

/* const arrowFunc = () => {
  console.log(this);
};

const user = {
  name: 'Test',
  showName: arrowFunc,
};

user.showName(); */

// ==================================

/* const user = {
  name: '123',
  showName() {
    const arrow = () => {//this = user
      console.log(this);
    };

    arrow();
  },
};

const user2 = {
  test: user.showName,
};

user.showName();
user2.test(); */
// ==================================
/* 


1. Який тип функції

- якщо стрілчата, дивимось момент створення і беремо батьківський контекст

- якщо звичайна, дивимось момент виклику
*/

/* const user = {
  name: 'User1',
  showName() {
    //this = user2

    const arrow1 = () => {
      // this = user2

      const arrow2 = () => {
        // this = user2
        console.log(this);
      };

      arrow2();
    };

    arrow1();
  },
};

const user2 = {
  name: 'User2',
  showName: user.showName,
};

user2.showName(); */

//- this у callback функціях

//- this у стрілочних функціях

/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

function showName(newAge, phoneNumber) {
  // this = user2
  this.age = newAge;
  this.phone = phoneNumber;
  console.log(this);
}

// const age = 41;
// const phone = '+38023434544';
// showName.call(user4, age, phone);
// showName.apply(user4, [age, phone]);

// const data=[41,'+38023434544'];
// showName.call(user4, ...data);
// showName.apply(user4, data);
// =====================================

// const user1 = {
//   name: 'Petya1',
// };

// const user2 = {
//   name: 'Vasya2',
// };

// const user3 = {
//   name: 'Max3',
// };

// const user4 = {
//   name: 'Tonya4',
// };

// function foo(x = 99, y = 98, q, t) {
//   console.log(this, x, y, q, t);
// }

// const copyFun1 = foo.bind(user1, 99, 98);

// copyFun1(10, 20, 30, 40);
// copyFun1(12, 3, 30, 40);
// copyFun1(31, 34, 30, 40);
// copyFun1(535, 12, 30, 40);

// ================

// 11 - arrow
// 10 - bind
// 7 - call apply
// 3 - obj
// 1 - global

const arrow = () => {};
const copy = arrow.bind();
