export default class Selection {
  constructor(container, tempId, anchors) {
    this.container = container;
    this.tempId = tempId;
    this.anchors = anchors;
    this.tempAnchor = this.container.querySelector('.anchor')
  }

  // получение Id из URL
  getUrlId() {
    return window.location.hash.split('#')[1];
  }

  // получение Id из ссылки
  _getLinkHref(element) {
    return element.getAttribute('href').substr(1);
  }

  // переключение блоков
  _switchBlocks(element) {
    if (element) {
      const currentBlock = this.container.querySelector('.selection__content_visible');
      currentBlock.classList.remove('selection__content_visible');
      return element.classList.add('selection__content_visible')
    }
    else {
      return;
    }
  }

  // переключение кнопок
  _switchButton(element) {
    const currentButton = this.container.querySelector('.selection__link_active');
    currentButton.classList.remove('selection__link_active');
    element.classList.add('selection__link_active');
  }

  // переключение блоков при переходе
  openSelectedBlocks(event) {
    // по якорной ссылке
    if (this.getUrlId() != null && event === undefined) {
      this.tempAnchor.id = this.getUrlId();
      this._switchBlocks(document.getElementById((this.tempAnchor.id + 'Data')));
      for (let anchor of this.anchors) {
        if (this._getLinkHref(anchor) === this.getUrlId()) {
          this._switchButton(anchor);
        }
      }
    }
    //внутри блока
    else if (event != undefined) {
      this.tempAnchor.id = this._getLinkHref(event);
      this._switchBlocks(document.getElementById((this._getLinkHref(event) + 'Data')));
      this._switchButton(event);
    }
    else return;
  }

  //перезапись temp Id для блока по умолчанию
  rewritingDefaultArchorId() {
    const currentBlock = document.querySelector('.selection__link_active');
    this.tempId.id = this._getLinkHref(currentBlock);
    return this.tempId.id;
  }

  setEventListener() {
    for (let i = 0; i < this.anchors.length; i++) {
      this.anchors[i].addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = this._getLinkHref(this.anchors[i]);
        window.location.hash = blockID;
        this.openSelectedBlocks(event.target);
      })
    }
  }
}