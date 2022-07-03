
// burger menu

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('locked')
    })
}

menu.querySelectorAll('.menu__link').forEach (link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        body.classList.remove('locked')
    })
})

menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        body.classList.remove('locked')
    }
})
