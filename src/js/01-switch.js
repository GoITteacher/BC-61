const type = 'barbiV2';

/* switch (type) {
  case 'barbi':
    console.log('Price - 100');
    break;
  case 'kent':
    console.log('Price - 200');
    break;

  case 'barbiV2':
  case 'kentV2':
    console.log('Price - 400');
    break;

  default:
    console.log('Sorry');
} */

// if (type !== 'barbi') {
//   console.log('Price - 100');
// } else if (type === ' kent') {
//   console.log('Price - 200');
// } else if (type === 'barbiV2') {
//   console.log('Price - 300');
// } else if (type === 'kentV2') {
//   console.log('Price - 400');
// }

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5,
 * выведи строку 'Такого кол-ва звезд нет'
 */

let stars = 6;
let price = 0;

switch (stars) {
  case 1:
    price = '20$';
    break;
  case 2:
    price = '30$';
    break;
  case 3:
    price = '50$';
    break;
  case 4:
    price = '70$';
    break;
  case 5:
    price = '120$';
    break;
  default:
    console.log('Такого кол-ва звезд нет');
}

console.log(price);
/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной
 * option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
/* 
const option = +prompt('Select option 1-3');
let message;

switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
    break;

  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
    break;

  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;

  default:
    message = 'Вам перезвонит менеджер';
}

console.log(message); */
// ================================

// const x = 10;

// if (x > 5) {
//   const y = 20;
//   if (y > x) {
//     const t = 30;
//     console.log(t, x);
//   }
// }

// if (x > 5) {
//   const y = 20;
//   if (y > x) {
//     const t = 40;
//     console.log(t, x);
//   }
// }

// if (x > 5) {
//   const y = 20;
//   if (y > x) {
//     const t = 50;
//     console.log(t, x);
//   }
// }

// console.log(t);
