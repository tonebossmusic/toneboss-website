// Small interactions: hamburger menu, theme toggle, simple contact mailto fallback
document.addEventListener('DOMContentLoaded', function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  hamburger?.addEventListener('click', () => {
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });

  const modeToggle = document.getElementById('modeToggle');
  modeToggle?.addEventListener('click', () => {
    const html = document.documentElement;
    if(html.style.filter === 'invert(1)') {
      html.style.filter = '';
      modeToggle.textContent = '🌙';
    } else {
      html.style.filter = 'invert(1) hue-rotate(180deg)';
      modeToggle.textContent = '☀️';
    }
  });

  // Contact form fallback: open mailto with form fields
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value || '—';
    const email = document.getElementById('email').value || '—';
    const message = document.getElementById('message').value || '—';
    const subject = encodeURIComponent('Website contact from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  });
});