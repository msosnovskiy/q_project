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
}