/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

function logItems(items) {
  for (let el of items) {
    el = el.toString();
    console.log(el);
  }
}

logItems([1, 2, 3, 4, 5, 6, 8]);
console.log('\n\n\n\n');
logItems([1, 3, 5, 6, 2, 5, 7, 8, 3, 2]);
console.log('\n\n\n\n');
logItems([3, 3, 5, 6, 2, 4, 5, 6, 7]);
console.log('\n\n\n\n');
logItems(['234', '12', '32', '12', '43']);
console.log('\n\n\n\n');
