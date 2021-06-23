import '../pages/news.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Selection from './components/Selection.js';
import ScrollUp from './components/ScrollUp.js';

const scrollUpButton = document.querySelector('.scroll-up');

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const selection = new Selection(constants.selection, constants.tempId);
const scrollUp = new ScrollUp(document, scrollUpButton, selection);

header.setEventListener();
map.setEventListener();
selection.rewritingDefaultArchorId();
selection.openSelectedBlocks();
selection.setEventListener();
scrollUp.setEventListener();