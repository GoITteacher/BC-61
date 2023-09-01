/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

let nums = [2, 1, 6, 7, 3, 7, 9, -5, 2, 3, 6, 9];

// let minIndex = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[minIndex] > nums[i]) {
//     minIndex = i;
//   }
// }

let min = nums[0];
for (let num of nums) {
  if (min > num) {
    min = num;
  }
}

console.log(min);
