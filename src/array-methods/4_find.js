/*
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
 - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
*/

let users = [
  {
    name: '1',
    age: 12,
    phone: '+28099448',
  },
  {
    name: '2',
    age: 20,
    phone: '+28099854185',
  },
  {
    name: '3',
    age: 31,
    phone: '+280996161',
  },
  {
    name: '4',
    age: 12,
    phone: '+28099448',
  },
  {
    name: '5',
    age: 45,
    phone: '+28099854185',
  },
  {
    name: '6',
    age: 24,
    phone: '+280996161',
  },
  {
    name: '7',
    age: 42,
    phone: '+28099448',
  },
  {
    name: '8',
    age: 21,
    phone: '+28099854185',
  },
  {
    name: '9',
    age: 53,
    phone: '+280996161',
  },
];

const result = users.find((el, idx, arr) => {
  return el.age > 70;
});

console.log(result);

// =================================

const index = users.findIndex((el, idx, arr) => {
  return el.age > 21;
});

console.log(index);
