// declaration of variables
const hamburgerMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close')
const menuContainer = document.querySelector('.menu_container')

var sections = document.querySelectorAll('.sections')
var navLinks = document.querySelectorAll('header nav a')


//active navigation item



// Mobile Navigation Menu Function
const MenuFunc = ()=>{
  // Icon style 
  hamburgerMenu.classList.toggle('is-active')
  // menu container style change
  menuContainer.classList.toggle('is-active')
  
}

hamburgerMenu.addEventListener('click', MenuFunc)


// Active item on Navigation panel 

 window.onscroll = () => {
   sections.forEach(sec =>{
     let top = window.scrollY
     let offset = sec.offsetTop - 60
     let height = sec.offsetHeight
     let id = sec.getAttribute('id')
    
     if (top >= offset && top < offset + height) {
       navLinks.forEach(link =>{
         link.classList.remove('is-active')
         document.querySelector(`.desktop_view a[href = '#${id}']`).classList.add('is-active')
         document.querySelector(`.menu_container a[href = '#${id}']`).classList.add('is-active')
       })
     }
   })
 }