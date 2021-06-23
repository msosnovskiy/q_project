import '../pages/news.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Selections from './components/Selections.js';
import ScrollUp from './components/ScrollUp.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const selections = new Selections(constants.selection, constants.tempId);
const scrollUp = new ScrollUp(document, constants.scrollUpButton, selections);

header.setEventListener();
map.setEventListener();
selections.rewritingDefaultArchorId();
selections.openSelectedBlocks();
selections.setEventListener();
scrollUp.setEventListener();