// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// function func() {
//   console.log(this);
// }

// user.func();

// =========================================

/* 


1. Який тип функції

- якщо стрілчата, дивимось момент створення і беремо батьківський контекст

- якщо звичайна, дивимось момент виклику

*/

/* const obj2 = {
  name: 'awdawd',
};

let obj1 = {
  name: 'obj1',
  func() {
    return () => {
      console.log(this);
    };
  },
};

const foo = obj1.func;
const newFunc = foo();

newFunc(); */

// =========================================

/* const obj1 = {
  name: 'obj1',
  func() {
    return () => {
      console.log(this);
    };
  },
};

let obj2 = {
  name: 'obj2',
  func() {
    return () => {
      console.log(this);
    };
  },
};

const arrow = obj1.func.call(obj2);
const newFunc2 = arrow.bind(obj2);
newFunc2.call(obj2); 
*/
// =========================================
