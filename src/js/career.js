import '../pages/career.css';

const vacancies = document.querySelector('.vacancies');
const spoilerWrappers = vacancies.querySelectorAll('.spoiler__wrapper')

// переключение меню
document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon').classList.toggle('menu-icon__active');
  document.querySelector('.header__navigation').classList.toggle('header__navigation_opened');
  document.querySelector('.page').classList.toggle('background_black');
  document.querySelector('.root').classList.toggle('overflow-hidden');
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