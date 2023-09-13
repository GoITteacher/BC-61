/* //Класи
/* 
  -Оголошення класу
  -Конструктор класу
  -Об'єкт параметрів
  -Методи класу
  -Приватні властивості (Інкапсуляція)
  -Геттери і сеттери
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

/* class User {
  #password;
  #login;

  constructor({ name = '', age = 1, phone = '', pass, login }) {
    this.name = name;
    this.age = age > 0 ? age : 0;
    this.phoneNumber = phone;
    this.#password = pass;
    this.#login = login;
  }
  showName() {
    console.log(this.name);
  }
  showAge() {
    console.log(this.age);
  }
  showInfo() {
    console.log('------------------');
    console.log(this.#getInfo());
    console.log('------------------');
  }
  showPassword() {
    console.log('Password:', this.#password);
  }
  setPassword(newPassword) {
    if (newPassword.length < 6) return;
    this.#password = newPassword;
  }
  #getInfo() {
    return `${this.name}\n${this.age}\n${this.phoneNumber}\n`;
  }
} */

/* const user1 = new User({
  age: 20,
  name: 'max',
  pass: '4564564',
  login: 'testLogin',
});

const user2 = new User({
  name: 'Nika',
  age: -10,
  phone: '234234',
  pass: '123123',
  login: 'barbariska',
});

user1.showInfo();
user1.setPassword('new n');
user1.setPassword('new n1');
user1.showPassword();
user2.showPassword(); */

// ====================================
/* 
class User {
  #age;
  #name;
  #phone = 'Default';

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    if (name.length > 1) {
      this.#name = name;
    }
  }

  get age() {
    return `Age: ${this.#age}`;
  }

  set age(age) {
    if (age > 0) {
      this.#age = age;
    } else {
      console.log('Ти шо???');
    }
  }

  get phone() {
    return this.#phone;
  }

  set phone(newPhone) {
    this.#phone = newPhone;
  }

  get test() {
    return 'HELLO';
  }
}

const user = new User('Vova', 23);

user.age = 10;
console.log(user.age);

user.age = -50;
console.log(user.age);

console.log(user.test); */

// ======================================

// class BankAccount {
//   static #bankName = 'MonoBank';
//   static #count = 1;

//   constructor(fullName) {
//     this.accountNumber = BankAccount.#count++;
//     this.balance = 0;
//     this.owner = fullName;
//   }

//   static getBankInfo() {
//     console.log(`Bank: ${this.#bankName}\nAccountAmount: ${this.#count - 1}`);
//   }

//   getInfo() {
//     console.log(`Bank: ${this.#bankName}\nAccountAmount: ${this.#count - 1}`);
//   }

//   static get() {
//     return BankAccount.#bankName;
//   }
// }

// const account1 = new BankAccount('Full Name 1');
// const account2 = new BankAccount('Full Name 2');
// const account3 = new BankAccount('Full Name 3');
// const account4 = new BankAccount('Full Name 4');
// const account5 = new BankAccount('Full Name 5');
// const account6 = new BankAccount('Full Name 6');

// console.log(account1);
// console.log(account2);
// console.log(account3);
// console.log(account4);
// console.log(account5);
// console.log(account6);

// console.log(BankAccount.bankName);
// BankAccount.getBankInfo();

// ================================

class Animal {
  constructor(eyes, type) {
    this.eyes = eyes;
    this.type = type;
  }

  sleep() {
    console.log(`${this.type} - Zzzz`);
  }
}

class Wolf extends Animal {
  constructor(pawns) {
    super(2, 'Wolf');
    this.pawns = pawns;
  }

  eat() {
    console.log('Йду їсти мясо');
  }

  sayHello() {
    console.log('Woof Woof');
  }
}

class Spider extends Animal {
  constructor(pawns) {
    super(8, 'Spider');
    this.pawns = pawns;
  }

  eat() {
    console.log('Йду їсти муху');
  }

  sayHello() {
    console.log('____');
  }
}

class Cat extends Animal {
  constructor(pawns) {
    super(2, 'Сat');
    this.pawns = pawns;
  }

  eat() {
    console.log('Йду їсти корм');
  }

  sayHello() {
    console.log('Myaw Myaw');
  }

  showInfo() {
    console.log(this.eyes);
    console.log(this.type);
    console.log(this.pawns);
  }
}

const wolf = new Wolf(4);
const spider = new Spider(6);
const cat = new Cat(4);

wolf.sayHello();
spider.sayHello();
cat.sayHello();

cat.sleep();
wolf.sleep();
spider.sleep();

cat.showInfo();

console.log(wolf);

// ================================
/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// const options = {
//   speed: '80',
//   model: 'awdaw',
//   price: 10000000,
//   type: 'sport',
// };

// =======================================
