/* 
Выполните рефакторинг методов объекта phonebook чтобы код заработал.
*/

const phonebook = {
  contacts: [],

  add(contact) {
    const copyContact = {
      id: this.generateId(),
      list: 'default',
      ...contact,
    };

    this.contacts.push(copyContact);
  },

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
});

phonebook.add({
  name: 'Poly',
  email: 'poly@hotmail.com',
});

// console.log(phonebook.contacts);

// let obj1 = {
//   name: '123',
//   age: 112,
// };

// let obj2 = {
//   name: 'default',
//   ...obj1,
// };

// console.log(obj2);

// ===================

function showName() {
  console.log(this.name);
}

const user1 = {
  name: 'user1',
};
const user2 = {
  name: 'user2',
};

const copy1 = showName.bind(user2);
const copy2 = copy1.bind(user1);
const copy3 = copy2.bind(user1);
