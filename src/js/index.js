import '../pages/index.css';
import * as constants from '../js/constants/constants';
import Header from './components/Header.js';
import Map from './components/Map.js';
import NewsPreview from './components/NewsPreview.js';
import NewsPreviewList from './components/NewsPreviewList.js';
import Footer from './components/Footer.js';

const newsContent = document.querySelector('.news__content');
const newsPreviewLength = '3'
import { newsData } from './data/newsData.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.ymap, 'contacts__map_cover');
const createNewsItem = (...arg) => new NewsPreview(...arg);
const newsPreviewList = new NewsPreviewList(newsContent, createNewsItem, newsData, newsPreviewLength)
const footer = new Footer(constants.footer, constants.footerText);

header.setEventListener();
map.setEventListener();
newsPreviewList.render();
footer.setContent();
