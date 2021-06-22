const root = document.querySelector('.root');
const page = root.querySelector('.page');
const navigation = page.querySelector('.header__navigation');
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const map = document.querySelector('#map');

const selection = document.querySelector('.selection');
const anchors = document.querySelectorAll('a[href*="#"]');
const tempId = document.getElementById('temp');

export { root, page, navigation, menuIconWrapper, menuIcon, map, selection, anchors, tempId };