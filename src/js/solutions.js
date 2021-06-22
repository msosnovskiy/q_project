import '../pages/solutions.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Selection from './components/Selection.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.map, 'contacts__map_cover');
const selection = new Selection(constants.selection, constants.tempId, constants.anchors);

header.setEventListener();
map.setEventListener();
selection.rewritingDefaultArchorId();
selection.openSelectedBlocks();
selection.setEventListener();


