const refs = {
  formEl: document.querySelector('.js-form'),
  postListEl: document.querySelector('.js-list'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const userId = e.target.elements.user_id.value;
  getPostsByUser(userId)
    .then(data => {
      renderPosts(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function getPostsByUser(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/poss';
  const PARAMS = `?userId=${userId}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;
  const options = {};

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Error');
    }
  });
}

function postsTemplate(arr) {
  return arr
    .map(el => {
      return `
        <li class="card">
        <h4>${el.id} - ${el.title}</h4>
        <p class="card-text">
          ${el.body}
        </p>
      </li>
        `;
    })
    .join('');
}

function renderPosts(arr) {
  const markup = postsTemplate(arr);
  refs.postListEl.innerHTML = markup;
}
