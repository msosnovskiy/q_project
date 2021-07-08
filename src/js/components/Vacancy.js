export default class Vacancy {
  constructor(vacancy, experienceSchema, experienceText, employmentText, qualificationSchema, qualificationData, responsibilitiesSchema, responsibilitiesData, conditionsSchema, conditionsData) {
    this.vacancy = vacancy;
    this.experienceSchema = experienceSchema;
    this.experienceText = experienceText;
    this.employmentText = employmentText;
    this.qualificationSchema = qualificationSchema;
    this.qualificationData = qualificationData;
    this.responsibilitiesSchema = responsibilitiesSchema;
    this.responsibilitiesData = responsibilitiesData;
    this.conditionsSchema = conditionsSchema;
    this.conditionsData = conditionsData;
  }

  _createDOMElement(tag, cls) {
    let el = document.createElement(`${tag}`);
    el.classList.add(`${cls}`);
    return el;
  }

  _create() {
    const spoilerItem = this._createDOMElement('div', 'spoiler__item')
    spoilerItem.classList.add('spoiler__item_white');

    const wrapper = this._createDOMElement('div', 'spoiler__wrapper')
    wrapper.classList.add('spoiler__wrapper_white');

    const vacancy = this._createDOMElement('h3', 'spoiler__title')

    const spoilerButton = this._createDOMElement('button', 'spoiler__button')

    const content = this._createDOMElement('div', 'spoiler__content')
    content.classList.add('spoiler__content_white');

    const experience = this._createDOMElement('h3', 'spoiler__subtitle')
    
    const experienceYears = this._createDOMElement('span', 'span')
    experienceYears.classList.add('span_light');

    const employment = this._createDOMElement('p', 'spoiler__text')

    const qualification = this._createDOMElement('h3', 'spoiler__subtitle')

    const responsibilities = this._createDOMElement('h3', 'spoiler__subtitle')

    const conditions = this._createDOMElement('h3', 'spoiler__subtitle')

    spoilerItem.appendChild(wrapper);
    spoilerItem.appendChild(content);

    //вакансия +++
    wrapper.appendChild(vacancy);
    vacancy.textContent = this.vacancy;
    wrapper.appendChild(spoilerButton);

    //требуемый опыт работы
    content.appendChild(experience);
    experience.textContent = this.experienceSchema;

    experience.appendChild(experienceYears);
    experienceYears.textContent = this.experienceText;

    // //занятость
    content.appendChild(employment);
    employment.textContent = this.employmentText;

    // //квалификация
    content.appendChild(qualification);
    qualification.textContent = this.qualificationSchema;
    // От до 
    this.qualificationData.forEach((item) => {
      let el = this._createDOMElement('p', 'spoiler__list');
      content.appendChild(el);
      el.textContent = item.text;
    })

    // //обязанности
    content.appendChild(responsibilities);
    responsibilities.textContent = this.responsibilitiesSchema;
    // От до 
    this.responsibilitiesData.forEach((item) => {
      let el = this._createDOMElement('p', 'spoiler__list');
      content.appendChild(el);
      el.textContent = item.text;
    })

    content.appendChild(conditions);
    conditions.textContent = this.conditionsSchema;
    // От до 
    this.conditionsData.forEach((item) => {
      let el = this._createDOMElement('p', 'spoiler__list');
      content.appendChild(el);
      el.textContent = item.text;
    })

    this.wrapper = wrapper;
    this.button = spoilerButton;
    this.content = content;
    this._setEventListener();

    return spoilerItem;
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

  _setEventListener() {
    this.wrapper.addEventListener('click', () => {
      if (this._spoilerOpened(this.content)) {
        this._closeSpoiler(this.button, 'spoiler__button_active');
        this._closeSpoiler(this.content, 'spoiler__content_visible');
      }
      else {
        this._openSpoiler(this.button, 'spoiler__button_active');
        this._openSpoiler(this.content, 'spoiler__content_visible');
      }
    })
  }
}