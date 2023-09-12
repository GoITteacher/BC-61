/* Создайте объект calculator с тремя методами:
    - read(a, b)- принимает два значения и сохраняет их как свойства объекта.
    - add() - возвращает сумму сохранённых значений.
    - mult() - перемножает сохранённые значения и возвращает результат.
*/

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  add() {
    return this.a + this.b;
  },

  multiply() {
    return this.a * this.b;
  },
};

calculator.read(10, 20);

console.log(calculator);

// console.log(calculator.add());
// console.log(calculator.multiply());

function foo() {
  console.log('Hello');
  return 1;
}

const result = foo;

const result1 = foo.call();
const result2 = foo.apply();

const result3 = foo.bind();
result3();
