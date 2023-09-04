/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

function changeCase(string) {
  const arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }

  string = arr.join('');
  console.log(string);
}

changeCase('JavaScript');
