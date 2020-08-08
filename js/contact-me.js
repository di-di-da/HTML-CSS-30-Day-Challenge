const form = document.getElementById('form');
const container = document.querySelector('.contact-box');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = '<p>Message sent.</p>';
});