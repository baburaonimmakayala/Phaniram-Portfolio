const hamburger= document.querySelector('.hamburger')
const mobileMenuContainer= document.querySelector('.mobile-menu-container')
const closeBg= document.querySelector('.close-bg')
const mobileMenuItem= document.querySelector('.mobile-menu-item')

function openMenu() {
    mobileMenuContainer.classList.add('active-menu')
}

hamburger.addEventListener('click', openMenu)

function closeMenu() {
    mobileMenuContainer.classList.remove('active-menu')
}

closeBg.addEventListener('click', closeMenu)

mobileMenuItem.forEach((item) => {
    item.addEventListener('click', closeMenu)
})