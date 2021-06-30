import '../pages/index.css';
import * as constants from '../js/constants/constants';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Footer from './components/Footer.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const footer = new Footer(constants.footer, constants.footerText);

header.setEventListener();
map.setEventListener();
footer.setContent();
