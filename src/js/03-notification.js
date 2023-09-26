/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
const NOTIFICATION_DELAY1 = 5 * 1000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

/*
 * Функции
 */

refs.notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});

setTimeout(() => {
  showNotification();
  timeoutId = setTimeout(() => {
    hideNotification();
  }, NOTIFICATION_DELAY1);
}, NOTIFICATION_DELAY);

function showNotification() {
  refs.notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('close');
  refs.notification.classList.remove('is-visible');
}
