export default class Spoiler {
  constructor(spoilerWrappers) {
    this.spoilerWrappers = spoilerWrappers;
  }

  _currentBlock(e) {
    return e.parentNode
  }

  _spoilerOpened(e) {
    if (e.classList.contains('spoiler__content_visible')) {
      return true;
    } else return false;

  }

  _openSpoiler(e, openingСlass) {
    e.classList.add(openingСlass);
  }

  _closeSpoiler(e, coverСlass) {
    e.classList.remove(coverСlass);
  }

  setEventListener() {
    for (let i = 0; i < this.spoilerWrappers.length; i++) {
      this.spoilerWrappers[i].addEventListener('click', (event) => {
        let button = this.spoilerWrappers[i].querySelector('.spoiler__button');
        let content = this.spoilerWrappers[i].parentNode.querySelector('.spoiler__content');

        if (this._spoilerOpened(content)) {
          this._closeSpoiler(button, 'spoiler__button_active');
          this._closeSpoiler(content, 'spoiler__content_visible');
        }
        else {
          this._openSpoiler(button, 'spoiler__button_active');
          this._openSpoiler(content, 'spoiler__content_visible');
        }
      })
    }
  }
}