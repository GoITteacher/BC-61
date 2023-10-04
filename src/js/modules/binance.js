const refs = {
  formEl: document.querySelector('.js-search-form[data-id="2"]'),
  containerEl: document.querySelector('.js-binance-info'),
};

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements.symbol.value;
  try {
    const result = await getPrice(query);
    renderPrice(result);
  } catch (err) {
    refs.containerEl.innerHTML = '';
    console.log(err);
  }
});

function renderPrice({ symbol, price }) {
  const markup = `<span>${symbol}</span>
  <span>${(+price).toFixed(2)}</span>`;

  refs.containerEl.innerHTML = markup;
}

async function getPrice(symbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = `?symbol=${symbol}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  const res = await fetch(url, options);
  return res.json();
}
