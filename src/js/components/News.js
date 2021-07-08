export default class News {
  constructor(date, text) {
    this.date = date;
    this.text = text;
  }
  _create() {
    const newsItem = document.createElement('div');
    newsItem.classList.add('selection__news-item');

    const newsDate = document.createElement('p');
    newsDate.classList.add('selection__news-date');
    newsDate.textContent = this.date;

    const newsText = document.createElement('p');
    newsText.classList.add('selection__news-text');
    newsText.textContent = this.text;

    newsItem.appendChild(newsDate);
    newsItem.appendChild(newsText);

    this.newsElement = newsItem;
    return newsItem;
  }

  _createEmpty() {
    const newsItem = document.createElement('div');
    newsItem.classList.add('selection__news-item');

    const newsDate = document.createElement('p');
    newsDate.classList.add('selection__news-date');
    newsDate.classList.add('selection__news-date_empty');
    newsDate.textContent = this.date;

    newsItem.appendChild(newsDate);
    this.newsElement = newsItem;
    return newsItem;
  }
}