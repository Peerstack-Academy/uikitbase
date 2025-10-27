document.querySelectorAll('.section-btn1').forEach(btn => {
  btn.addEventListener('click', () => {
    const cavab = document.getElementById(btn.getAttribute('data-id'));
    const aciqdir = btn.getAttribute('data-ac') === 'true';
    btn.setAttribute('data-ac', !aciqdir);
    cavab.hidden = aciqdir;

     const li = btn.closest('.section-open1');
    if (!aciqdir) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
});