import '../pages/index.css';

const root = document.querySelector('.root');
const page = root.querySelector('.page');
const navigation = page.querySelector('.header__navigation');
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');

//проверяет состояние меню открыто/закрыто
function menuOpened() {
  if (menuIcon.closest(".menu-icon__active")) {
    return true;
  } else return false;
}

// открыть меню
function openMenu() {
  menuIcon.classList.add('menu-icon__active');
  navigation.classList.add('header__navigation_opened');
  page.classList.add('background_black');
  root.classList.add('overflow-hidden');
  menuIconWrapper.ariaLabel = 'Закрыть меню';
}

// закрыть меню
function closeMenu() {
  menuIcon.classList.remove('menu-icon__active');
  navigation.classList.remove('header__navigation_opened');
  page.classList.remove('background_black');
  root.classList.remove('overflow-hidden');
  menuIconWrapper.ariaLabel = 'Открыть меню';
}

menuIconWrapper.addEventListener("click", function () {
  if (!menuOpened()) {
    openMenu();
  } else closeMenu();
});

page.addEventListener("click", function (event) {
  if (event.target === page && menuOpened()) {
    closeMenu();
  }
});

