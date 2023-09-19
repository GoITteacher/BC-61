let refs = {
  boxElem: document.querySelector('.js-box-0'),
  firstBoxElem: document.querySelector('.js-box-1'),
  secondBoxElem: document.querySelector('.js-box-2'),
};

// refs.firstBoxElem.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;

//   const text = e.target.textContent;
//   const markup = `<li>${text}</li>`;
//   refs.secondBoxElem.insertAdjacentHTML('beforeend', markup);
// });

// refs.boxElem.addEventListener('click', e => {
//   console.log();
//   if (e.target === e.currentTarget) return;
//   if (e.target.nodeName !== 'BUTTON' && e.target.nodeName !== 'SPAN') return;
//   console.log(e.target.textContent);
// });

refs.boxElem.addEventListener('click', e => {
  if (!e.target.classList.contains('my-item-box')) return;
  console.log('Hello');
});
