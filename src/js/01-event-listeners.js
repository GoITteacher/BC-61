/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */
// function handleTargetBtnClick(){}
// function targetBtnClickHandler(){}

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');

// addListenerBtn.addEventListener('click', onAddListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);

// function onTargetBtnClick() {
//   console.log('target');
// }

// const copy = onTargetBtnClick;

// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }
// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onAddListenerBtnClick() {
//   console.log('add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }
// function onRemoveListenerBtnClick() {
//   console.log('remove');
//   targetBtn.removeEventListener('click', copy);
// }

// ===============================

// addListenerBtn.addEventListener('click', () => {
//   divContainer.innerHTML = '';
// });

// removeListenerBtn.addEventListener('click', () => {
//   // targetBtn.removeEventListener('click', )
// });

// ===========================================

targetBtn.addEventListener('click', onTargetBtnClick);
addListenerBtn.addEventListener('click', onTargetBtnClick);
removeListenerBtn.addEventListener('click', onTargetBtnClick);

function onTargetBtnClick(e) {
  console.log(e.currentTarget.textContent);
  console.log(e.currentTarget.nodeName);
}
