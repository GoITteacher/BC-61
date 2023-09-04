/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

function findSmallesNumber(numbers) {
  let min = numbers[0];
  //   for (let num of numbers) {
  //     if (num < min) {
  //       min = num;
  //     }
  //   }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
