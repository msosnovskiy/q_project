export default class News {
  constructor(date, text) {
    this.date = date;
    this.text = text;
  }

  _createDOMElement(tag, cls) {
    let elem = document.createElement(`${tag}`);
    elem.classList.add(`${cls}`);
    return elem;
  }

  _create() {

    const newsItem = this._createDOMElement('div', 'selection__news-item');
    
    const newsDate = this._createDOMElement('p', 'selection__news-date');
    newsDate.textContent = this.date;

    const newsText = this._createDOMElement('p', 'selection__news-text');
    newsText.textContent = this.text;

    newsItem.appendChild(newsDate);
    newsItem.appendChild(newsText);

    this.newsElement = newsItem;
    return newsItem;
  }

  _createEmpty(message) {
    const newsItem = this._createDOMElement('div', 'selection__news-item');
    const newsDate = this._createDOMElement('p', 'empty-message');
    newsDate.textContent = message;
    newsItem.appendChild(newsDate);
    this.newsElement = newsItem;
    return newsItem;
  }
}