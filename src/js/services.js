import '../pages/services.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Selections from './components/Selections.js';
import Spoiler from './components/Spoiler.js';

const spoilersWrappers = document.querySelectorAll('.spoiler__wrapper');

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const selections = new Selections(constants.selection, constants.tempId);
const spoiler = new Spoiler( spoilersWrappers);

header.setEventListener();
map.setEventListener();

selections.rewritingDefaultArchorId();
selections.openSelectedBlocks();
selections.setEventListener();
spoiler.setEventListener()
