const refs = {
  heroFormEl: document.querySelector('.js-search-form[data-id="1"]'),
  heroContainer: document.querySelector('.js-hero-container'),
};

refs.heroFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const hero = e.target.elements.query.value;
  searchHero(hero).then(data => {
    renderHero(data);
  });
}

function searchHero(name) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const PARAMS = `?hero=${name}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function renderHero({ name, biography: { fullName }, images: { lg } }) {
  const markup = `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${fullName}</h4>
    <p class="hero-bio">
      ${name} - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sed
      facilis, necessitatibus at neque cum deserunt maxime quos laudantium
      doloremque nesciunt ea voluptates! Atque fugiat assumenda incidunt
      laborum quas a!
    </p>
  </div>
</div>`;

  refs.heroContainer.innerHTML = markup;
}
