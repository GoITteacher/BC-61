import { NewsApi } from './modules/newsApi2';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  articleListEl: document.querySelector('.js-article-list'),
  targetEl: document.querySelector('.js-target'),
};

const newsApi = new NewsApi();
console.log(newsApi);
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  newsApi.page = 1;
  newsApi.query = e.target.elements.query.value;
  showLoader();
  newsApi
    .fetchArticles()
    .then(data => {
      newsApi.maxPage = data.total_pages;
      refs.articleListEl.innerHTML = '';
      renderArticles(data.articles);
      observer.observe(refs.targetEl);
      changeObserverStatus();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(hideLoader);
}

// ===============================
function articlesTemplate(articles) {
  return articles
    .map(({ media, title, author, summary, published_date }) => {
      return `<li class="card news-card">
      <img loading="lazy"
        class="news-image"
        src="${media}"
        alt="${title}"
      />
      <h3 class="card-title">
        ${title}
      </h3>
      <p class="card-desc">
      ${summary}
      </p>
      <div class="card-footer">
        <span>${author}</span>
        <span>${published_date}</span>
      </div>
    </li>`;
    })
    .join('');
}
function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleListEl.insertAdjacentHTML('beforeend', markup);
}

// ============ OBSERVER ===============

const options = {
  //   rootMargin: '2000px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(observerCallback, options);
function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMore();
    }
  });
}

function loadMore() {
  newsApi.page += 1;
  showLoader();
  newsApi
    .fetchArticles()
    .then(data => {
      changeObserverStatus();
      renderArticles(data.articles);
    })
    .finally(hideLoader);
}

function changeObserverStatus() {
  if (newsApi.page >= newsApi.maxPage) {
    observer.unobserve(refs.targetEl);
  }
}

// ==================

function showLoader() {
  document.body.classList.add('show-loader');
}

function hideLoader() {
  document.body.classList.remove('show-loader');
}
