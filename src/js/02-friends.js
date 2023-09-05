/*
 * Работа с коллекцией (массивом объектов)
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

/*
 * Ищем друга по имени
 */
// function findFriend(friendName) {
//   for (let friend of friends) {
//     if (friend.name === friendName) {
//       console.log('Знайшов');
//       return;
//     }
//   }

//   console.log('Не знайшов');
// }

// findFriend('Poly1');

/*
 * Получаем имена всех друзей
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// debugger;
function getFriends(friends) {
  const friendsName = [];
  for (const friend of friends) {
    friendsName.push(friend.name);
  }
  console.log(friendsName);
}

getFriends(friends);
/*
 * Получаем имена только друзей которые онлайн
 */

function getOnlineFriends(friends) {
  const friendsName = [];
  for (const friend of friends) {
    if (friend.online) {
      friendsName.push(friend.name);
    }
  }
  console.log(friendsName);
}
getOnlineFriends(friends);

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

// true=> true;
// false => false
