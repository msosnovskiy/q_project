import '../pages/career.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Spoiler from './components/Spoiler.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const spoiler = new Spoiler(constants.spoilersWrappers);

header.setEventListener();
map.setEventListener();
spoiler.setEventListener();