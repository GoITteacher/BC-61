import { UserAPI } from './modules/usersAPI';

const refs = {
  createFormEl: document.querySelector('.js-create-form'),
  updateFormEl: document.querySelector('.js-update-form'),
  resetFormEl: document.querySelector('.js-reset-form'),
  deleteFormEl: document.querySelector('.js-delete-form'),
  userListEl: document.querySelector('.js-user-list'),
};

const userApi = new UserAPI();
//
//
//
// ================== CALLBACK LISTENERS ==================

refs.createFormEl.addEventListener('submit', onCreateUser);
refs.updateFormEl.addEventListener('submit', onUpdateUser);
refs.resetFormEl.addEventListener('submit', onResetUser);
refs.deleteFormEl.addEventListener('submit', onDeleteUser);

function onCreateUser(e) {
  e.preventDefault();
  const { userName, userPhone, userEmail } = e.target.elements;

  const user = {
    name: userName.value,
    phone: userPhone.value,
    email: userEmail.value,
    avatar: 'https://source.unsplash.com/500x500/?random=1&avatar,user,man',
  };

  userApi.createUser(user).then(newUser => {
    const markup = userTemplate(newUser);
    refs.userListEl.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
}
function onUpdateUser(e) {
  e.preventDefault();

  const user = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();

    if (value) {
      user[key] = value;
    }
  });

  userApi.updateUser(user).then(updatedUser => {
    const markup = userTemplate(updatedUser);
    const oldElem = refs.userListEl.querySelector(`[data-id="${user.id}"]`);
    oldElem.insertAdjacentHTML('afterend', markup);
    oldElem.remove();
  });

  e.target.reset();
}
function onResetUser(e) {
  e.preventDefault();

  const user = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    user[key] = value;
  });

  userApi.resetUser(user).then(updatedUser => {
    const markup = userTemplate(updatedUser);
    const oldElem = refs.userListEl.querySelector(`[data-id="${user.id}"]`);
    oldElem.insertAdjacentHTML('afterend', markup);
    oldElem.remove();
  });

  e.target.reset();
}
function onDeleteUser(e) {
  e.preventDefault();
  const id = e.target.userId.value;
  userApi.deleteUser(id).then(() => {
    refs.userListEl.querySelector(`[data-id="${id}"]`).remove();
  });
  e.target.reset();
}
//
//
//
//
// ================== RENDER FUNCTIONS =================

function userTemplate({ name, phone, email, avatar, id }) {
  return `
  <li class="card user-item" data-id=${id}>
  <img src="${avatar}" alt="#" class="user-avatar" />
  <h3>${name}</h3>
  <p>${email}</p>
  <p>${phone}</p>
</li>
  `;
}
function userListTemplate(users) {
  return users.map(userTemplate).join('');
}
function renderUserList(users) {
  const markup = userListTemplate(users);
  refs.userListEl.innerHTML = markup;
}
//
//
//
//
// ============== PAGE LOAD ================
function onPageLoad() {
  userApi.getUsers().then(users => {
    renderUserList(users);
  });
}
onPageLoad();

// ==============
