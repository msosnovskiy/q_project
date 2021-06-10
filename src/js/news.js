import '../pages/news.css';

const selection = document.querySelector('.selection');
const anchors = selection.querySelectorAll('a[href*="#"]')
const scrollUp = document.querySelector('.scroll-up');
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
  if (getUrlId() != null) {
    smoothScroll(getUrlId());
  }
  else {
    smoothScroll(rewritingDefaultArchorId());
  }
})

rewritingDefaultArchorId();
openSelectedBlocks();