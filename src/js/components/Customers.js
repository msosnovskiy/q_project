export default class Customers {
  constructor(container, button, disableButtonClass, itemClass, visibleItemСlass) {
    this.container = container;
    this.button = button;
    this.disableButtonClass = disableButtonClass;
    this.itemClass = itemClass;
    this.visibleItemСlass = visibleItemСlass;
    this.items = this.container.querySelectorAll(`.${this.itemClass}`);
    this.firstItem = this._getNotOpenedItems(this.items)[0];
    this.quantityToAdded = 8;
    this.openedStatus = false;
  }

  _open(item) {
    item.classList.add(this.visibleItemСlass);
    return item;
  }

  _delete(item) {
    item.classList.remove(this.visibleItemСlass);
    return item;
  }

  _getOpenedItems() {
    return this.container.querySelectorAll(`.${this.visibleItemСlass}`);
  }

  _getNotOpenedItems(array) {
    let arr = []
    array.forEach(item => {
      if (!item.classList.contains(this.visibleItemСlass)) {
        arr.push(item);
      };
    });
    return arr;
  }

  _getWindowWidth() {
    return document.documentElement.clientWidth;
  }


  reRender() {

    let multiplicity = 0;
    let openedItemsLength = this._getOpenedItems().length;

    if (this._getWindowWidth() > 840 && this._getWindowWidth() <= 1160) {
      this.quantityToAdded = 6;
      multiplicity = 3;
    }
    else {
      this.quantityToAdded = 8;
      multiplicity = 4;
    }

    console.log(`отображено изначально (openedItemsLength) - ${openedItemsLength}`);

    let toRender = openedItemsLength % multiplicity;
    console.log(`в последней строке отрисовано ${toRender} из ${multiplicity}`)

    if (toRender >= (multiplicity - toRender)) {
      // if (toRender === 0) {
      //   console.log('нечего рендерить');
      // }
      // if (toRender > 0) {
      console.log(`на рендер (multiplicity - toRender) ${multiplicity - toRender}`);
      toRender = multiplicity - toRender;
      for (let i = 0; i < toRender; i++) {
        this._open(this._getNotOpenedItems(this.items)[i]);
        console.log(`добавлен ${toRender} элемент`);
      }
      // }
    }

    toRender = openedItemsLength % multiplicity;

    if (toRender < (multiplicity - toRender) && toRender != 0) {
      console.log(`проще удалить (toRender) ${toRender}`);
      for (let i = 0; i < toRender; i++) {
        let numLastItem = this._getOpenedItems(this.items).length - 1;
        this._delete(this._getOpenedItems(this.items)[numLastItem]);
        console.log(`удален ${toRender} элемент`);
      }
    }

    // else {
    //   console.log('ничего не делать');
    // }

  }

  setEventListener() {
    window.addEventListener(`resize`, event => {
      this.reRender();
    }, false);

    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      let arr = this._getNotOpenedItems(this.items);
      if (arr.length > this.quantityToAdded) {
        for (let i = 0; i < this.quantityToAdded; i++) {
          this._open(arr[i]);
        }
      }
      else {
        for (let i = 0; i < arr.length; i++) {
          this._open(arr[i]);
        }
        this.button.classList.add(this.disableButtonClass);
        this.button.setAttribute('disabled', true);
      }
      console.log(`уже отображено - ${this._getOpenedItems().length}`);
    })
  }
}