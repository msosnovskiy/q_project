import '../pages/news.css';
import * as constants from '../js/constants/constants.js';
import Header from './components/Header.js';
import Map from './components/Map.js';
import Selection from './components/Selection.js';

const header = new Header(constants.menuIconWrapper, constants.menuIcon, constants.navigation, constants.page, constants.root);
const map = new Map(constants.map, 'contacts__map_cover');
const selection = new Selection(constants.selection, constants.tempId, constants.anchors);

const scrollUp = document.querySelector('.scroll-up');

// определяет текущее положение скрола
function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

// определяет положение элемента
function elmYPosition(eID) {
  let elm = document.getElementById(eID);
  let y = elm.offsetTop;
  let node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  } return y;
}

// скролл к якорю
function smoothScroll(eID) {
  let startY = currentYPosition();
  let stopY = elmYPosition(eID);
  let distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY); return;
  }
  let speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  let step = Math.round(distance / 25);
  let leapY = stopY > startY ? startY + step : startY - step;
  let timer = 0;
  if (stopY > startY) {
    for (let i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step; if (leapY > stopY) leapY = stopY; timer++;
    } return;
  }
  for (let i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }
}

// Отображение и скрытие кнопки при скроле 
document.addEventListener('scroll', function (event) {
  if (currentYPosition() > 2000) {
    scrollUp.classList.add('scroll-up_visible')
  }
  else {
    scrollUp.classList.remove('scroll-up_visible');
  }
});

// скролл к якорной ссылке при клике на кнопку
scrollUp.addEventListener('click', function (event) {
  if (selection.getUrlId() != null) {
    smoothScroll(selection.getUrlId());
  }
  else {
    smoothScroll(selection.rewritingDefaultArchorId());
  }
})


header.setEventListener();
map.setEventListener();
selection.rewritingDefaultArchorId();
selection.openSelectedBlocks();
selection.setEventListener();