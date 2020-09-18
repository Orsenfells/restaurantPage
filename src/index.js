import {pageLoad, home } from './page-load';
import menu from './menu.js';
import contact from './contact';

pageLoad()
home();
const homeButton = document.getElementById('homeTab');
const menuButton = document.getElementById('menuTab')
const contactButton = document.getElementById('contactTab')
homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', contact)