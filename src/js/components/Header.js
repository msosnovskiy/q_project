export default class Header {
  constructor(menuIconWrapper, menuIcon, navigation, page, root) {
    this.menuIconWrapper = menuIconWrapper;
    this.menuIcon = menuIcon;
    this.navigation = navigation;
    this.page = page;
    this.root = root;
  }

  _menuOpened() {
    let menuState = this.menuIconWrapper.querySelector('.menu-icon__active');
    if (menuState === this.menuIcon) {
      return true;
    } else return false;
  }

  _openMenu() {
    this.menuIcon.classList.add('menu-icon__active');
    this.navigation.classList.add('header__navigation_opened');
    this.page.classList.add('background_black');
    this.root.classList.add('overflow-hidden');
    this.menuIconWrapper.ariaLabel = 'Закрыть меню';
  }

  _closeMenu() {
    this.menuIcon.classList.remove('menu-icon__active');
    this.navigation.classList.remove('header__navigation_opened');
    this.page.classList.remove('background_black');
    this.root.classList.remove('overflow-hidden');
    this.menuIconWrapper.ariaLabel = 'Открыть меню';
  }

  setEventListener() {
    this.menuIconWrapper.addEventListener('click', () => {
      if (!this._menuOpened()) {
        this._openMenu();
      } else this._closeMenu();
    })

    this.page.addEventListener('click', (event) => {
      if (event.target === this.page && this._menuOpened()) {
        this._closeMenu();
      }
    });

    this.page.addEventListener('keydown', (event) => {
      if (event.keyCode === 27 && this._menuOpened()) {
        this._closeMenu();
      }
    });
  }

}