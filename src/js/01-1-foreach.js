const array = [1, 2, 33, 5, 6, 55, 1, 3, 5, 71, 5, 8, 9];

// array.forEach(function (el, idx, array) {
//   console.log(el);
// });

// array.forEach(function (el, idx, array) {
//   console.log(el, idx);
// });

// array.forEach(function (el, idx, array) {
//   if (el > 2) {
//     console.log('Good');
//   } else {
//     console.log('Bad');
//   }
// });

const filteredArray = [];

array.forEach(function (el, idx, array) {
  if (el > array.length) {
    filteredArray.push(el);
  }
});

console.log(filteredArray);
