/* DOM VARIABLES */
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu__items')

/* FUNCTION TOGGLE MENU SMALL SCREEN */
hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('menu--open')
    hamburger.classList.toggle('is-active')
})

/* FUNCTION CLOSE MENU SMALL ON MENU ITEMS CLICK */
menuItems.forEach(el=>{
    el.addEventListener('click', () =>{
         menu.classList.remove('menu--open')
    })
})