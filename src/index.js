import './style/styles.css';
import './style/home.css'
import './style/menu.css'
import Home from './js/home';
import Menu from './js/menuPage';
import Contact from './js/contactPage';

// Main Tag
const main = document.querySelector('#main-content');
// Navigation Buttons
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');



// Navigation Event Listeners
homeButton.addEventListener('click', () => {
    main.innerHTML = ""
    main.appendChild(Home())
    
})

menuButton.addEventListener('click', () => {
    main.innerHTML = ""
    main.appendChild(Menu())
})

contactButton.addEventListener('click', () => {
    main.innerHTML = ""
    main.appendChild(Contact())
})


// Handlers:
window.addEventListener('load', () => {
    main.appendChild(Home())
})