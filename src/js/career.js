import '../pages/career.css';

const vacancies = document.querySelector('.vacancies');
const spoilerWrappers = vacancies.querySelectorAll('.spoiler__wrapper')
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

// подключения Яндекс карты
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

  //отключаем зум колёсиком мышки
  myMap.behaviors.disable('scrollZoom');
}

for (let wrapper of spoilerWrappers) {
  wrapper.addEventListener('click', function () {
    let button = this.querySelector('.spoiler__button');
    let item = this.closest('.spoiler__item')
    let content = item.querySelector('.spoiler__content')
    button.classList.toggle('spoiler__button_active');
    content.classList.toggle('spoiler__content_visible');
  })
}