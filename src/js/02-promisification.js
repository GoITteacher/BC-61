/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// function createPromise(value, delay) {
//   const promise = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('1', 5000);
// const p2 = createPromise('2', 2000);
// const p3 = createPromise('3', 3000);
// const p4 = createPromise('4', 1000);
// const p5 = createPromise('5', 4000);

// p1.then(res => {
//   console.log('✅', res);
// }).catch(err => {
//   console.log('❌', err);
// });
// p2.then(res => {
//   console.log('✅', res);
// }).catch(err => {
//   console.log('❌', err);
// });

// p3.then(res => {
//   console.log('✅', res);
// }).catch(err => {
//   console.log('❌', err);
// });

// p4.then(res => {
//   console.log('✅', res);
// }).catch(err => {
//   console.log('❌', err);
// });

// p5.then(res => {
//   console.log('✅', res);
// }).catch(err => {
//   console.log('❌', err);
// });

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// function createPromise(value, isActive) {
//   if (isActive) {
//     return Promise.resolve(value);
//   } else {
//     return Promise.reject(value);
//   }
// }

// const promise1 = createPromise(123);
// const promise2 = createPromise('Hello');

// promise1.then(response => {
//   console.log(response);
// });

// promise2.then(response => {
//   console.log(response);
// });

// const promises = [];
// for (let i = 0; i < 10; i++) {
//   promises.push(Promise.resolve(i));
// }
// console.log(promises);

// Promise.resolve(123).then(value => {
//   if (value > 100) {
//     return 'Good';
//   } else {
//     return Promise.reject('Error');
//   }
// });

// function createPromise(value, isActive, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(`${value}, delay - ${delay}`);
//       } else {
//         reject(`${value}, delay - ${delay}`);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const amount = 10;
// for (let i = 0; i < amount; i++) {
//   const isActive = Math.random() > 0.5;
//   const promise = createPromise(i, isActive, i * 500);

//   promise
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log('Err', err);
//     });
// }

// =====================

// const p1 = createPromise(0, false, 500);
// const p2 = createPromise(1, false, 1000);
// const p3 = createPromise(2, true, 1500);
// const p4 = createPromise(3, true, 2000);

// const arr = [p1, p2, p3, p4];

// Promise.all(arr)
//   .then(response => {
//     console.log('Ok', response);
//   })
//   .catch(err => {
//     console.log('Err', err);
//   });

// Promise.allSettled(arr).then(response => {
//   console.log(response);
// });

// Promise.race(arr)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ===========
// const btnEl1 = document.querySelector('js-btn1');
// const btnEl2 = document.querySelector('js-btn2');

// btnEl1.addEventListener('click', () => {
//   console.log('Hello');
// });

// btnEl2.addEventListener('click', () => {
//   console.log('Hello');
// });

// ============================

const delay = 5000;
const amount = 10;
const interval = 200;

function createPromise(value, delay) {
  const promise = new Promise((resolve, reject) => {
    const isActive = Math.random() > 0.3;
    const data = {
      value,
      delay,
    };
    setTimeout(() => {
      if (isActive) resolve(data);
      else reject(data);
    }, delay);
  });

  return promise;
}

for (let i = 0; i < amount; i += 1) {
  createPromise(i, delay + interval * i)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

// =============
