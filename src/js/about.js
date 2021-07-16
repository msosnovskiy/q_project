import '../pages/about.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Customers from './components/Customers.js';
import Map from './components/Map.js';
import Footer from './components/Footer.js';

const customersSection = document.querySelector('.customers');
const customersContainer = customersSection.querySelector('.customers__container');
const showMoreButton = customersSection.querySelector('.button');

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const customers = new Customers(customersContainer, showMoreButton, 'button_disabled', 'customers__item', 'customers__item_visible');
const map = new Map(constants.ymap, 'contacts__map_cover');
const footer = new Footer(constants.footer, constants.footerText);

header.setEventListener();
customers.reRender();
customers.setEventListener();
map.setEventListener();
footer.setContent();
