import { NewsApi } from './modules/newsAPI';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  articleListEl: document.querySelector('.js-article-list'),
  loadMoreBtnEl: document.querySelector('.js-btn-load'),
};
const newsApi = new NewsApi();

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  newsApi.page = 1;
  newsApi.query = e.target.elements.query.value;
  newsApi.fetchArticles().then(data => {
    newsApi.maxPage = Math.ceil(data.totalResults / newsApi.pageSize);
    refs.articleListEl.innerHTML = '';
    renderArticles(data.articles);
    changeBtnStatus();
  });
}

refs.loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

function onLoadMoreBtnClick(e) {
  newsApi.page += 1;
  changeBtnStatus();
  newsApi.fetchArticles().then(data => {
    renderArticles(data.articles);
  });
}

function changeBtnStatus() {
  // if (newsApi.page === newsApi.maxPage) {
  //   refs.loadMoreBtnEl.disabled = true;
  // } else {
  //   refs.loadMoreBtnEl.disabled = false;
  // }

  const isLastPage = newsApi.page === newsApi.maxPage;
  refs.loadMoreBtnEl.disabled = isLastPage;
}

// ========================
function articlesTemplate(articles) {
  return articles
    .map(({ urlToImage, title, description, author, publishedAt }) => {
      return `<li class="card news-card">
      <img loading="lazy"
        class="news-image"
        src="${urlToImage}"
        alt="${title}"
      />
      <h3 class="card-title">
        ${title}
      </h3>
      <p class="card-desc">
      ${description}
      </p>
      <div class="card-footer">
        <span>${author}</span>
        <span>${publishedAt}</span>
      </div>
    </li>`;
    })
    .join('');
}
function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleListEl.insertAdjacentHTML('beforeend', markup);
}
