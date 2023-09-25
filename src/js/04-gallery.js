import dataArr from './countries.json';

const refs = {
  listEl: document.querySelector('.js-gallery'),
};

function countryTemplate(country) {
  return `
    <li class="gallery__item">
    <div class="gallery__thumb">
      <img src="${country.flag}" alt="Флаг ${country.name}" width="320">
    </div>
    <h2>${country.name}</h2>
    <p><b>Столица: ${country.capital}</b> </p>
    <p><b>Валюта:</b> ${country.currency}</p>
    <p><b>Официальный язык:</b> ${country.language}</p>
    <p><b>Население:</b> ${country.population} человек</p>

    ${
      country.infected
        ? '<p style="color: red;">Всё пропало!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>'
        : '<p style="color: green;">Фух, пронесло</p>'
    }
  </li>
    `;
}

function countriesTemplate(arr) {
  return arr.map(countryTemplate).join('');
}

function renderCountries(arr) {
  arr = arr.filter(el => el.infected);
  const markup = countriesTemplate(arr);
  refs.listEl.innerHTML = markup;
}
renderCountries(dataArr);
