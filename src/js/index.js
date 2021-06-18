import '../pages/index.css';
import * as constants from '../js/constants/constants';

//проверяет состояние меню открыто/закрыто
function menuOpened() {
  if (constants.menuIcon.closest('.menu-icon__active')) {
    return true;
  } else return false;
}

// открыть меню
function openMenu() {
  constants.menuIcon.classList.add('menu-icon__active');
  constants.navigation.classList.add('header__navigation_opened');
  constants.page.classList.add('background_black');
  constants.root.classList.add('overflow-hidden');
  constants.menuIconWrapper.ariaLabel = 'Закрыть меню';
}

// закрыть меню
function closeMenu() {
  constants.menuIcon.classList.remove('menu-icon__active');
  constants.navigation.classList.remove('header__navigation_opened');
  constants.page.classList.remove('background_black');
  constants.root.classList.remove('overflow-hidden');
  constants.menuIconWrapper.ariaLabel = 'Открыть меню';
}

// открытие меню по клику на бургер
constants.menuIconWrapper.addEventListener('click', function () {
  if (!menuOpened()) {
    openMenu();
  } else closeMenu();
});

// закрытие меню по клику вне области меню
constants.page.addEventListener('click', function (event) {
  if (event.target === constants.page && menuOpened()) {
    closeMenu();
  }
});


//может изменить на постоянную подсказку?
constants.map.addEventListener('touchmove', function (event) {
  if (constants.map.contains(event.target) && (event.targetTouches.length < 2)) {
    constants.map.classList.add('contacts__map_cover');
  }
});

constants.map.addEventListener('touchend', function (event) {
  if (constants.map.contains(event.target)) {
    constants.map.classList.remove('contacts__map_cover');
  }
});
