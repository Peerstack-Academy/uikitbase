document.querySelectorAll('.section-btn1').forEach(btn => {
  btn.addEventListener('click', () => {
    const cavab = document.getElementById(btn.getAttribute('data-id'));
    const aciqdir = btn.getAttribute('data-ac') === 'true';
    const li = btn.closest('.section-open1');
    btn.setAttribute('data-ac', !aciqdir);
    
    cavab.hidden = aciqdir;

    if (!aciqdir) {
      li.classList.add('active');
    } else {
      li.classList.remove('active'); 
    }
  });
});