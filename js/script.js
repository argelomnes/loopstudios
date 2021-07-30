const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('overlay');
const body = document.getElementById('body');

// slides in mobile menu
openButton.addEventListener('click', () => {
    overlay.classList.toggle('-translate-x-full');
    openButton.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
});

// slides out mobile menu
closeButton.addEventListener('click', () => {
    overlay.classList.toggle('-translate-x-full');
    openButton.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
});
