const mainBtn = document.getElementById('mainBtn');
const stickyBar = document.getElementById('stickyBar');
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');

// sticky bar aparece quando o botão principal sai da viewport
const btnObserver = new IntersectionObserver(
  ([entry]) => {
    stickyBar.classList.toggle('visible', !entry.isIntersecting);
  },
  { threshold: 0, rootMargin: '0px 0px -32px 0px' }
);

btnObserver.observe(mainBtn);

// troca de imagem com fade
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    if (thumb.classList.contains('active')) return;

    mainImage.style.opacity = '0';

    setTimeout(() => {
      mainImage.src = thumb.dataset.src;
      mainImage.style.opacity = '1';
    }, 150);

    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// feedback no clique — funciona nos dois botões
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', () => {
    const original = btn.textContent;
    btn.textContent = 'Adicionado ✓';
    btn.style.background = '#3a7a4a';

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
    }, 2000);
  });
});
