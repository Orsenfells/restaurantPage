import {pageLoad, home } from './page-load';
import menu from './menu.js';

pageLoad();

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu')
homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);