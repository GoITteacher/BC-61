/*
 * Псевдомассив arguments и Array.from и ...
 */

// function foo() {
//   const arr = Array.from(arguments);
// }

// foo(1, 2, 4, 6, 23, 56, 7, 65);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

function filterNumbers(arr) {
  const result = [];
  const args = Array.from(arguments);
  args.shift();

  for (let i = 0; i < args.length; i++) {
    if (arr.includes(args[i])) {
      result.push(args[i]);
    }
  }

  return result;
}

// filterNumbers([1, 2, 3], 4, 5, 6);

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
