/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// let array1 = [10, 20, 30];
// let array2 = [30, 40, 50];
// console.log(array1[2]);
// console.log(array1[0]);
// console.log(array2[2]);
// console.log(array2[0]);
// const x = array[1];
// console.log(x);

// =================

// const array = ['hello', 12, 34, 1, 24, 7, 2, 1, 1, 2, 2, 3, 99];
// const arrayLength = array.length;
// console.log(array[array.length - 2])
// =========================;

// const arr = [1, 2, 3, 4, 5, 6, 78, 9];
// arr[1] = 123;
// arr[3] = 'Hello';
// arr[6] = 'World';
// arr[1000] = 'test';

// console.log(arr);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// num, string, bool, null, undefined, symbol

/* const x = [10, 20, 30, 40];

const y = x;

y[3] = 'Hello';

console.log(x);
console.log(y);

console.log(x === y); */

// const x = [1, 2, 3];
// const y = [1, 2, 3];

// console.log(x === y);

// x[1];

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */
// .            0 .      1 .     2 .       3 .       4
// const arr = [
//   'Hello',
//   'World',
//   'Kiwi',
//   'lavanda',
//   'Sunset',
//   'Awdawd',
//   'Test',
//   'Sun',
// ];

// len = 5
// i = 5

// for (let i = 0; i >= 0; i -= 2) {
//   arr[i] = arr[i].toUpperCase();
// }

// for (let a of arr) {
//   a = a.toUpperCase();
//   console.log(a);
// }

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// // ....
// console.log(arr[arr.length - 1]);

// ===============

// let x = [];
// let y = x;
// x = 20;

// console.log(x);
// console.log(y);

/*
 * - split
 * - join
 * - indexOf
 * - includes
 * - push
 * - pop
 * - shift
 * - unshift
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'Ajax', 'Ajax'];
//===================

//===================

// true && false = false
// const result = friends.includes('Mango', 3);
// console.log(result);

//===================

// const index = friends.indexOf('Ajax');
// const index1 = friends.lastIndexOf('Ajax');
// console.log(index, index1);

// =================================
// const str = friends.join(' ');
// console.log(str);
// const str = 'Hello world test im Volodka sefse sefs awdsxrg sefsef awawd';
// const words = str.split(' ');
// console.log(words);

//===================
// friends.push(91, 92, 93, 94, 95);

// friends.push('end');
// friends.push(null);

// friends.pop();
// friends.pop();
// friends.pop();

// friends.unshift(1, 2, 3, 4, 5);
// friends.shift();
// friends.shift();
// console.log(friends);

// ==============

// const arr = [1, 2, 3];
// const newArr = arr.concat([1,2],[3])
// const newArr = arr.concat([1, 2], [1, 3, 4, 56], [3, 4, 1, 2], [2, 2, 2]);
// console.log(newArr);

// =============

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'Apple', '123', '34'];

// const newArray1 = friends.slice(2, 5);
// const newArray2 = friends.slice(0, 3);
// const newArray3 = friends.slice(-4, -1);
// console.log(newArray3);

// ==============
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'Apple', '123', '34'];

// const deletedElems = friends.splice(-1, 0, 'HELLO1');
// friends.push('Hello', 1, 34, 123);

// console.log(deletedElems);
// console.log(friends);
