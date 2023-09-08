/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
/ 
*/

function createCalc(q) {
  function calculate(x, y) {
    console.log(x + y + q);
  }

  return calculate;
}

const calc1 = createCalc(100);
const calc2 = createCalc(1000);
const calc3 = createCalc(50);

calc1(10, 20);
calc1(5, 1);
calc1(3, 6);

calc2(2, 5);
calc2(6, 1);
calc2(2, 5);

calc3(2, 6);
calc3(1, 6);
calc3(3, 6);
