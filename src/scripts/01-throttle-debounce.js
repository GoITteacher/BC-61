const countMouseEventElement = document.querySelector('.js-count-mouse');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 0;
let countInputEvent = 0;

// function onMouseMove() {
//   countMouseEvent += 1;
//   countMouseEventElement.textContent = countMouseEvent;
// }

// const copyFunc = _.throttle(onMouseMove, 2000, {
//   leading: false,
//   trailing: false,
// });

// document.addEventListener('mousemove', copyFunc);

inputElement.addEventListener(
  'input',
  _.debounce(onInputChange, 300, {
    leading: true,
    trailing: true,
    maxWait: 300,
  }),
);

function onInputChange(e) {
  outputElem.textContent = e.target.value;
}
