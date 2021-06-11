import '../pages/solutions.css';

const selection = document.querySelector('.selection');
const anchors = selection.querySelectorAll('a[href*="#"]');
const temp = document.getElementById('temp');
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon')

// переключение меню
menuIconWrapper.onclick = function () {
  menuIcon.classList.toggle('menu-icon__active');
  document.querySelector('.header__navigation').classList.toggle('header__navigation_opened');
  document.querySelector('.page').classList.toggle('background_black');
  document.querySelector('.root').classList.toggle('overflow-hidden');
  if (menuIcon.closest('.menu-icon__active')) {
    menuIconWrapper.ariaLabel = 'Закрыть меню';
  }
  else menuIconWrapper.ariaLabel = 'Открыть меню';
}

// Подключаем Яндекс карты
ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    center: [55.748184, 37.638970],
    zoom: 15
  },
    {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark([55.748184, 37.638970], {
      balloonContentHeader: 'Quarta',
      balloonContentBody: '109240, г. Москва,<br>Москворецкая набережная, дом 2а',
    },
      {
        preset: 'islands#greenDotIconWithCaption',
        iconColor: '#009966'
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');

  //отключаем зум колёсиком мышки
  myMap.behaviors.disable('scrollZoom');
}

// получение Id из URL
function getUrlId() {
  return window.location.hash.split('#')[1];
}

// получение Id из ссылки
function getLinkHref(element) {
  return element.getAttribute('href').substr(1);
}

// переключение блоков
function switchBlocks(element) {
  if (element) {
    const currentBlock = selection.querySelector('.selection__content_visible');
    currentBlock.classList.remove('selection__content_visible');
    return element.classList.add('selection__content_visible')
  }
  else {
    return;
  }
}

//переключение кнопок
function switchButton(element) {
  const currentButton = selection.querySelector('.selection__link_active');
  currentButton.classList.remove('selection__link_active');
  element.classList.add('selection__link_active');
}

// переключение блоков при переходе
function openSelectedBlocks(event) {
  const anchor = selection.querySelector('.anchor');
  //по якорной ссылке
  if (getUrlId() != null && event == undefined) {
    anchor.id = getUrlId();
    switchBlocks(document.getElementById((getUrlId() + 'Data')));
    for (let anchor of anchors) {
      if (getLinkHref(anchor) === getUrlId()) {
        switchButton(anchor);
      }
    }
  }
  //внутри блока
  else if (event != undefined) {
    anchor.id = getLinkHref(event);
    switchBlocks(document.getElementById((getLinkHref(event) + 'Data')));
    switchButton(event);
  }
  else return;
}

//перезапись temp Id для блока по умолчанию
function rewritingDefaultArchorId() {
  const currentBlock = document.querySelector('.selection__link_active');
  temp.id = getLinkHref(currentBlock);
  return temp.id;
}

// открытие блока при клике на ссылку
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    const blockID = getLinkHref(anchor);
    window.location.hash = blockID;
    openSelectedBlocks(event.target);
  })
}

rewritingDefaultArchorId();
openSelectedBlocks();

