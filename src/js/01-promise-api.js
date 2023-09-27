/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random(); // 0 - 1
//     if (random > 0.5) {
//       resolve({
//         name: 'Volodka',
//         age: 23,
//       });
//     } else {
//       reject(123);
//     }
//   }, 5000);
// });

// myPromise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(`✅ ${result.name}, age = ${result.age}`);
// }

// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

const myPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('Hello');
  } else {
    reject('Not ok');
  }
});

// myPromise
//   .then(response => {
//     console.log(response);
//     return response.toUpperCase();
//   }
//   .then(data => {
//     console.log(data);
//     return data.toLowerCase();
//   })
//   .catch(err => {
//     console.log(err);
//   });

myPromise
  .then(response => {
    console.log('✅', response);
  })
  .catch(err => {
    console.log('❌', err);
  });
