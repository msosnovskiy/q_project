import '../pages/services.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Selection from './components/Selection.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.map, 'contacts__map_cover');
const selection = new Selection(constants.selection, constants.tempId, constants.anchors);

const spoilerWrappers = constants.selection.querySelectorAll('.spoiler__wrapper');

// открытие спойлера
for (let wrapper of spoilerWrappers) {
  wrapper.addEventListener('click', function () {
    let button = this.querySelector('.spoiler__button');
    let item = this.closest('.spoiler__item');
    let content = item.querySelector('.spoiler__content');
    button.classList.toggle('spoiler__button_active');
    content.classList.toggle('spoiler__content_visible');
  })
}

header.setEventListener();
map.setEventListener();

selection.rewritingDefaultArchorId();
selection.openSelectedBlocks();
selection.setEventListener();
