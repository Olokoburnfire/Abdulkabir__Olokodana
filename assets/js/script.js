// declaration of variables
const hamburgerMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close')
const menuContainer = document.querySelector('.menu_container')

// Mobile Navigation Menu Function
const MenuFunc = ()=>{
  // Icon style 
  hamburgerMenu.classList.toggle('is-active')
  // menu container style change
  menuContainer.classList.toggle('is-active')
  
}

hamburgerMenu.addEventListener('click', MenuFunc)