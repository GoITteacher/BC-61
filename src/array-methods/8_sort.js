/*

 - Сортує і змінює вихідний масив.
 - Повертає змінений масив, тобто посилання на відсортований вихідний.
 - За замовчуванням сортує за зростанням.
 - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
 
*/

let cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 2,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 8,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 19,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 19,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

let count1 = 0;
let count2 = 0;
const result1 = [...cars]
  .sort((a, b) => {
    console.log(count1++);
    return a.price - b.price;
  })
  .filter(car => car.amount > 10);

console.table(result1);
console.log('----------------');

const result2 = cars
  .filter(car => car.amount > 10)
  .sort((a, b) => {
    console.log(count2++);
    return a.price - b.price;
  });

console.table(result2);
// const copy1 = cars.filter(car => car.price > 20000).map(car => car.model);
// const copy2 = cars.map(car => car.model).filter(car => car.price > 20000)

// const result = cars
//   .filter(el => el.price > 25000)
//   .sort((a, b) => {
//     return a.price - b.price;
//   })
//   .map(car => {
//     const myObj = {
//       make: car.make,
//       model: car.model,
//     };
//     return myObj;
//   });

// const copy = [...cars].sort((b, a) => {
//   return +b.onSale - +a.onSale;
//   // if (a.amount === b.amount) {
//   //   return a.price - b.price;
//   // }
//   // return a.amount - b.amount;
// });

// console.table(cars);
// console.table(copy);

// const arr = [1, 5, 3, 6, 8, 4, 2, 5, 8, 1, 3, 6];

// arr.sort((b, a) => {
// console.log(left, right);
//   return a - b;
// });

// console.log(arr);

// ========================
