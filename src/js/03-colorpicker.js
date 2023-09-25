import colors from './colors.json';

const refs = {
  colorListEl: document.querySelector('.js-palette'),
};

refs.colorListEl.addEventListener('click', onColorClick);

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
