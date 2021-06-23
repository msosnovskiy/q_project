export default class ScrollUp {
  constructor(container, button, selection) {
    this.container = container;
    this.button = button;
    this.selection = selection;
  }

  // определяет текущее положение скрола
  _currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (this.container.documentElement && this.container.documentElement.scrollTop)
      return this.container.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (this.container.body.scrollTop) return this.container.body.scrollTop;
    return 0;
  }

  // определяет положение элемента
  _elmYPosition(eID) {
    let elm = this.container.getElementById(eID);
    let y = elm.offsetTop;
    let node = elm;
    while (node.offsetParent && node.offsetParent != this.container.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    } return y;
  }

  // скролл к якорю
  _smoothScroll(eID) {
    let startY = this._currentYPosition();
    let stopY = this._elmYPosition(eID);
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

  setEventListener() {
    this.container.addEventListener('scroll', (event) => {
      if (this._currentYPosition() > 2000) {
        this.button.classList.add('scroll-up_visible')
      }
      else {
        this.button.classList.remove('scroll-up_visible');
      }
    });

    // скролл к якорной ссылке при клике на кнопку
    this.button.addEventListener('click', (event) => {
      if (this.selection.getUrlId() != null) {
        this._smoothScroll(this.selection.getUrlId());
      }
      else {
        this._smoothScroll(this.selection.rewritingDefaultArchorId());
      }
    })
  }
}