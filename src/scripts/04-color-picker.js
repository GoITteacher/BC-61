let colorPalette = [];
const LENGTH = 6;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}
////////////////////////////////////////////////////////////////////////////

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  renderColors();
});

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  refs.modalElement.style.backgroundColor = e.target.style.backgroundColor;
  showModal();
});

refs.backdropElem.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  hideModal();
});

////////////////////////////////////////////////////////////////////////////

function renderColors() {
  const markup = colorPalette.map(colorTemplate).join('');
  refs.itemList.innerHTML = markup;
}

function colorTemplate(colorObj) {
  return `<li class="color-item">
<button class="color-body" style="background-color:${colorObj.hex};"></button>
<div class="color-footer">
    <div>HEX: ${colorObj.hex}</div>
    <div>RGB: ${colorObj.rgb}</div>
</div>
</li>`;
}

function showModal() {
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', onEscapeModal);
}

function hideModal() {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onEscapeModal);
}

function onEscapeModal(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    hideModal();
  }
}
