/*
 * Перебор через for...in и Object.keys|values|entries
 */

let feed = {
  bad: 3,
  good: 5,
  neutral: 10,
};

// console.log(feed.hasOwnProperty('good1'));
/* 
[
  ['bad', 3],
  ['good', 5],
  ['neutral', 10]
]
*/

// let feedback = Object.create(feed);
// feedback.test = 'myTest';
// for (const key in feedback) {
//   if (feedback.hasOwnProperty(key)) console.log(key);
// }
// console.log(feedback);
// let totalFeedback = 0;

// ========================

const result1 = Object.values(feed); // [3, 5, 10]
const result2 = Object.keys(feed); // ['bad', 'good', 'neutral']
const result3 = Object.entries(feed);

// for (const key of Object.keys(feed)) {
//   console.log(key, feed[key]);
// }

// for (const entries of Object.entries(feed)) {
//   const key = entries[0];
//   const value = entries[1];
//   console.log(key, value);
// }
