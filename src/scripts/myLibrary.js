const gallery = new SimpleLightbox('.gallery a', {
  closeText: '<button>del</button>',
  nav: false,
});

gallery.on('closed.simplelightbox', () => {
  console.log('Горечко закрили');
});

gallery.on('shown.simplelightbox', () => {
  console.log('Uhu');
});
