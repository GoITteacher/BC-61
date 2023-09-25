import colors from './colors.json';

const refs = {
  colorListEl: document.querySelector('.js-palette'),
};

refs.colorListEl.addEventListener('click', onColorClick);

function onColorClick(e) {
  if (!e.target.classList.contains('color-swatch')) return;
  const color = e.target.dataset.hex;
  document.body.style.backgroundColor = color;
  localStorage.setItem('currentColor', color);

  const oldElem = refs.colorListEl.querySelector('.is-active'); // null
  oldElem?.classList.remove('is-active');
  e.target.parentNode.classList.add('is-active');
}

renderPalette(colors);

// ==========================================
function colorTemplate({ hex, rgb }) {
  return `<div class="color-card">
    <div class="color-swatch" data-hex="${hex}" data-rgb="${rgb}"
         style="background-color: ${hex}"></div>
    <div class="color-meta">
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
    </div>
  </div>`;
}

function colorsTemplate(colors) {
  return colors.map(colorTemplate).join('');
}

function renderPalette(colors) {
  const markup = colorsTemplate(colors);
  refs.colorListEl.innerHTML = markup;
}

// ========================

function onLoadPage() {
  const color = localStorage.getItem('currentColor');
  document.body.style.backgroundColor = color;
}

onLoadPage();
