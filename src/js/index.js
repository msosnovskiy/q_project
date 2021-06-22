import '../pages/index.css';
import * as constants from '../js/constants/constants';
import Header from './components/Header.js';
import Map from './components/Map.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.map, 'contacts__map_cover');

header.setEventListener();
map.setEventListener();
