import '../pages/career.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.map, 'contacts__map_cover');

const vacancies = document.querySelector('.vacancies');
const spoilerWrappers = vacancies.querySelectorAll('.spoiler__wrapper')

for (let wrapper of spoilerWrappers) {
  wrapper.addEventListener('click', function () {
    let button = this.querySelector('.spoiler__button');
    let item = this.closest('.spoiler__item')
    let content = item.querySelector('.spoiler__content')
    button.classList.toggle('spoiler__button_active');
    content.classList.toggle('spoiler__content_visible');
  })
}

header.setEventListener();
map.setEventListener();