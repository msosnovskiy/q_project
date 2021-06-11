import '../pages/about.css';

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