import '../pages/news.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Selections from './components/Selections.js';
import ScrollUp from './components/ScrollUp.js';
import News from './components/News.js';
import NewsLists from './components/NewsLists.js';
import Footer from './components/Footer.js';

const selectionContent = document.querySelector('.selection_content');
const anchor = document.querySelector('.anchor');

const emptyMessage = 'Нет новостей за\u00A0текущий\u00A0год';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const createNews = (...arg) => new News(...arg);
const newsList = new NewsLists(selectionContent, newsData, createNews, anchor, constants.selectionLink, emptyMessage)
const selections = new Selections(constants.selection, constants.tempId, 'news', newsList);
const scrollUp = new ScrollUp(document, constants.scrollUpButton, selections);
const footer = new Footer(constants.footer, constants.footerText);

header.setEventListener();
map.setEventListener();

newsList.setYearsHref();
selections.rewritingDefaultArchorId();
newsList.render();
selections.setEventListener();
scrollUp.setEventListener();
footer.setContent();

