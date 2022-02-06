/* DOM VARIABLES */
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu__items')

const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.menu__items')

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
/* 
window.addEventListener('scroll',()=>{
    if(scrollY > 200){       
        nav.classList.add('bg-nav')
        link.forEach(el=>{
            el.classList.add('link-black')
        })
    }else{
        nav.classList.remove('bg-nav')
        link.forEach(el=>{
            el.classList.remove('link-black')
        })
    }
}) */

ScrollReveal().reveal('.reveal',{ distance: '100px', duration: 1500, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 600   });

ScrollReveal().reveal('.zoom',{duration: 1500, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 200, scale: 0.65, mobile:false});

/* minuto 30 */