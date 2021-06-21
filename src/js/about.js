import '../pages/about.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.map, 'contacts__map_cover');

// переключение меню
// menuIconWrapper.onclick = function () {
//   menuIcon.classList.toggle('menu-icon__active');
//   document.querySelector('.header__navigation').classList.toggle('header__navigation_opened');
//   document.querySelector('.page').classList.toggle('background_black');
//   document.querySelector('.root').classList.toggle('overflow-hidden');
//   if (menuIcon.closest('.menu-icon__active')) {
//     menuIconWrapper.ariaLabel = 'Закрыть меню';
//   }
//   else menuIconWrapper.ariaLabel = 'Открыть меню';
// }

header.setEventListener();
map.setEventListener();