/*
 - Метод flatMap(callback) - аналогічний методу map(),
 - але застосовується у випадках, коли результат - це багатовимірний масив,
 - який необхідно «розгладити».
*/

// const arr = [[[10]]];

// const result = arr.flat(3);
// console.log(result);
// =================

let objs = [
  {
    name: '123',
    friend: ['Jonh1', 'Marta1'],
  },

  {
    name: '123',
    friend: ['Jonh2', 'Marta3'],
  },

  {
    name: '123',
    friend: ['Jonh4', 'Marta5'],
  },

  {
    name: '123',
    friend: ['Jonh6', 'Marta7'],
  },
];

// [ 'Jonh1', 'Marta1' , 'Jonh2', 'Marta3', 'Jonh4', 'Marta5','Jonh6', 'Marta7']
// const result = objs.flatMap(obj => {
//   return obj.friend;
// });

// const result = objs
//   .map(obj => {
//     return obj.friend;
//   })
//   .flat(1);

// console.log(result);
