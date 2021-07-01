const root = document.querySelector('.root');
const page = root.querySelector('.page');
const navigation = page.querySelector('.header__navigation');
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const ymap = document.querySelector('#map');
const selection = document.querySelector('.selection');
const selectionLink = document.querySelectorAll('.selection__link');
const tempId = document.getElementById('temp');
const spoilersWrappers = document.querySelectorAll('.spoiler__wrapper');
const scrollUpButton = document.querySelector('.scroll-up');
const footer = document.querySelector('.footer__text');
const footerText = 'Quarta. Все права защищены';


export { root, page, navigation, menuIconWrapper, menuIcon, ymap, selection, selectionLink, tempId, spoilersWrappers, scrollUpButton, footer, footerText };