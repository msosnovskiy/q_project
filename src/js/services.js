import '../pages/services.css';

const selection = document.querySelector('.selection');
const anchors = selection.querySelectorAll('a[href*="#"]')
const spoilerWrappers = selection.querySelectorAll('.spoiler__wrapper');
const temp = document.getElementById('temp');


// переключение меню
document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon').classList.toggle('menu-icon__active');
  document.querySelector('.header__navigation').classList.toggle('header__navigation_opened');
  document.querySelector('.page').classList.toggle('background_black');
  document.querySelector('.root').classList.toggle('overflow-hidden');
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
    let currentBlock = selection.querySelector('.selection__content_visible');
    currentBlock.classList.remove('selection__content_visible');
    return element.classList.add('selection__content_visible')
  }
  else {
    return;
  }
}

//переключение кнопок
function switchButton(element) {
  let currentButton = selection.querySelector('.selection__link_active');
  currentButton.classList.remove('selection__link_active');
  element.classList.add('selection__link_active');
}

// переключение блоков при переходе
function openSelectedBlocks(event) {
  let anchor = selection.querySelector('.anchor');
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

// открытие спойлера
for (let wrapper of spoilerWrappers) {
  wrapper.addEventListener('click', function () {
    let button = this.querySelector('.spoiler__button');
    let item = this.closest('.spoiler__item')
    let content = item.querySelector('.spoiler__content')
    button.classList.toggle('spoiler__button_active');
    content.classList.toggle('spoiler__content_visible');
  })
}

rewritingDefaultArchorId();
openSelectedBlocks();

