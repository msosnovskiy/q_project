
// ymaps.ready(init);

// function init() {
//   // Создание экземпляра карты и его привязка к контейнеру с заданным id ("map")
//   let myMap = new ymaps.Map('map', {
//     center: [55.748184, 37.638970],
//     zoom: 15
//   }, {
//     searchControlProvider: 'yandex#search'
//   }),
//     myPlacemark = new ymaps.Placemark([55.748184, 37.638970], {
//       balloonContentHeader: 'Quarta',
//       balloonContentBody: 'г. Москва, Москворецкая набережная, дом 2а',
//       // balloonContentFooter: 'Телефон <a href="tel:+74959265423">+74959265423</a>',
//     },
//       {
//         preset: 'islands#greenDotIconWithCaption',
//         iconColor: '#009966'
//       });

//   myMap.geoObjects.add(myPlacemark);
//   myMap.controls.remove('searchControl');

//   //отключаем зум колёсиком мышки
//   // myMap.behaviors.disable('scrollZoom');

//   //на мобильных устройствах... (проверяем по userAgent браузера)
//   // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     //... отключаем перетаскивание карты
//     myMap.behaviors.disable('drag');
//   }
// }