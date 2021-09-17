const hum = document.querySelector('.hamburger');
const menu = document.querySelector('.fullmenu');
hum.addEventListener('click', (e) => {e.preventDefault();
     
    menu.classList.add('active')});

const close = document.querySelector('.fullmenu__close');

close.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.remove('active')
});


