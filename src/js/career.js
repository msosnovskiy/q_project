import '../pages/career.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
// import Spoiler from './components/Spoiler.js';
import Vacancy from './components/Vacancy.js';
import VacancyList from './components/VacancyList.js';
import Footer from './components/Footer.js';

// import { vacancySchema } from './data/vacancySchema.js';
// import { vacancyData } from './data/vacancyData.js';

const emptyMessage = 'Нет открытых вакансий';

const vacancyContainer = document.querySelector('.spoiler');

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const createVacancyItem = (...arg) => new Vacancy(...arg);
const vacancyList = new VacancyList(vacancyContainer, createVacancyItem, vacancySchema, vacancyData, emptyMessage);
const footer = new Footer(constants.footer, constants.footerText);

header.setEventListener();
vacancyList.render();
map.setEventListener();
footer.setContent();