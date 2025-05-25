const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    contents.forEach(c => c.style.display = 'none');
    document.getElementById(btn.getAttribute('data-tab')).style.display = 'block';
  });
});

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  // Toggle icon between moon and sun
  if (document.body.classList.contains('light-mode')) {
    themeToggleBtn.textContent = '☀️';  // sun icon for light mode
  } else {
    themeToggleBtn.textContent = '🌙';  // moon icon for dark mode
  }
});
