// =============================================================================
// Interactivity & Theme Switching
// =============================================================================

// Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// 1. Dark / Light Theme Toggle
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
} else {
  if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDarkMode = document.body.classList.contains('dark');
    if (isDarkMode) {
      themeToggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
}

// 2. Simple Contact Form Interaction
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name').value.trim();

    formFeedback.textContent = `Thanks, ${nameInput}! Your message has been sent.`;
    formFeedback.className = 'form-feedback success';

    contactForm.reset();

    setTimeout(() => {
      formFeedback.textContent = '';
    }, 5000);
  });
}
