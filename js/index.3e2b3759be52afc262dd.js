!function(Q){var n={};function c(e){if(n[e])return n[e].exports;var B=n[e]={i:e,l:!1,exports:{}};return Q[e].call(B.exports,B,B.exports,c),B.l=!0,B.exports}c.m=Q,c.c=n,c.d=function(Q,n,e){c.o(Q,n)||Object.defineProperty(Q,n,{enumerable:!0,get:e})},c.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},c.t=function(Q,n){if(1&n&&(Q=c(Q)),8&n)return Q;if(4&n&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:Q}),2&n&&"string"!=typeof Q)for(var B in Q)c.d(e,B,function(n){return Q[n]}.bind(null,B));return e},c.n=function(Q){var n=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return c.d(n,"a",n),n},c.o=function(Q,n){return Object.prototype.hasOwnProperty.call(Q,n)},c.p="",c(c.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon'); // переключение меню\n\nmenuIconWrapper.onclick = function () {\n  menuIcon.classList.toggle('menu-icon__active');\n  document.querySelector('.header__navigation').classList.toggle('header__navigation_opened');\n  document.querySelector('.page').classList.toggle('background_black');\n  document.querySelector('.root').classList.toggle('overflow-hidden');\n\n  if (menuIcon.closest('.menu-icon__active')) {\n    menuIconWrapper.ariaLabel = 'Закрыть меню';\n  } else menuIconWrapper.ariaLabel = 'Открыть меню';\n};\n\nymaps.ready(init);\n\nfunction init() {\n  // Создание экземпляра карты и его привязка к контейнеру с заданным id (\"map\")\n  var myMap = new ymaps.Map('map', {\n    center: [55.748184, 37.638970],\n    zoom: 15\n  }, {\n    searchControlProvider: 'yandex#search'\n  }),\n      myPlacemark = new ymaps.Placemark([55.748184, 37.638970], {\n    balloonContentHeader: 'Quarta',\n    balloonContentBody: '109240, г. Москва,<br>Москворецкая набережная, дом 2а' // balloonContentFooter: 'Телефон <a href=\"tel:+74959265423\">+74959265423</a>',\n\n  }, {\n    preset: 'islands#greenDotIconWithCaption',\n    iconColor: '#009966'\n  });\n  myMap.geoObjects.add(myPlacemark);\n  myMap.controls.remove('searchControl'); //отключаем зум колёсиком мышки\n\n  myMap.behaviors.disable('scrollZoom'); //на мобильных устройствах... (проверяем по userAgent браузера)\n\n  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {//... отключаем перетаскивание карты\n    // myMap.behaviors.disable('drag');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJtZW51SWNvbldyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SWNvbiIsIm9uY2xpY2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbG9zZXN0IiwiYXJpYUxhYmVsIiwieW1hcHMiLCJyZWFkeSIsImluaXQiLCJteU1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJzZWFyY2hDb250cm9sUHJvdmlkZXIiLCJteVBsYWNlbWFyayIsIlBsYWNlbWFyayIsImJhbGxvb25Db250ZW50SGVhZGVyIiwiYmFsbG9vbkNvbnRlbnRCb2R5IiwicHJlc2V0IiwiaWNvbkNvbG9yIiwiZ2VvT2JqZWN0cyIsImFkZCIsImNvbnRyb2xzIiwicmVtb3ZlIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakIsQyxDQUVBOztBQUNBRixlQUFlLENBQUNJLE9BQWhCLEdBQTBCLFlBQVk7QUFDcENELFVBQVEsQ0FBQ0UsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsbUJBQTFCO0FBQ0FMLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENHLFNBQTlDLENBQXdEQyxNQUF4RCxDQUErRCwyQkFBL0Q7QUFDQUwsVUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDRyxTQUFoQyxDQUEwQ0MsTUFBMUMsQ0FBaUQsa0JBQWpEO0FBQ0FMLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixFQUFnQ0csU0FBaEMsQ0FBMENDLE1BQTFDLENBQWlELGlCQUFqRDs7QUFDQSxNQUFJSCxRQUFRLENBQUNJLE9BQVQsQ0FBaUIsb0JBQWpCLENBQUosRUFBNEM7QUFDMUNQLG1CQUFlLENBQUNRLFNBQWhCLEdBQTRCLGNBQTVCO0FBQ0QsR0FGRCxNQUdLUixlQUFlLENBQUNRLFNBQWhCLEdBQTRCLGNBQTVCO0FBQ04sQ0FURDs7QUFXQUMsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVo7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQUlILEtBQUssQ0FBQ0ksR0FBVixDQUFjLEtBQWQsRUFBcUI7QUFDL0JDLFVBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBRHVCO0FBRS9CQyxRQUFJLEVBQUU7QUFGeUIsR0FBckIsRUFJVjtBQUNFQyx5QkFBcUIsRUFBRTtBQUR6QixHQUpVLENBQVo7QUFBQSxNQU9FQyxXQUFXLEdBQUcsSUFBSVIsS0FBSyxDQUFDUyxTQUFWLENBQW9CLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBcEIsRUFBNEM7QUFDeERDLHdCQUFvQixFQUFFLFFBRGtDO0FBRXhEQyxzQkFBa0IsRUFBRSx1REFGb0MsQ0FHeEQ7O0FBSHdELEdBQTVDLEVBS1o7QUFDRUMsVUFBTSxFQUFFLGlDQURWO0FBRUVDLGFBQVMsRUFBRTtBQUZiLEdBTFksQ0FQaEI7QUFpQkFWLE9BQUssQ0FBQ1csVUFBTixDQUFpQkMsR0FBakIsQ0FBcUJQLFdBQXJCO0FBQ0FMLE9BQUssQ0FBQ2EsUUFBTixDQUFlQyxNQUFmLENBQXNCLGVBQXRCLEVBcEJjLENBc0JkOztBQUNBZCxPQUFLLENBQUNlLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCLFlBQXhCLEVBdkJjLENBeUJkOztBQUNBLE1BQUksaUVBQWlFQyxJQUFqRSxDQUFzRUMsU0FBUyxDQUFDQyxTQUFoRixDQUFKLEVBQWdHLENBQ2hHO0FBQ0E7QUFDQztBQUNGIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcblxyXG5jb25zdCBtZW51SWNvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uLXdyYXBwZXInKTtcclxuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJylcclxuXHJcbi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQvNC10L3RjlxyXG5tZW51SWNvbldyYXBwZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdmlnYXRpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICBpZiAobWVudUljb24uY2xvc2VzdCgnLm1lbnUtaWNvbl9fYWN0aXZlJykpIHtcclxuICAgIG1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG4gIH1cclxuICBlbHNlIG1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG59XHJcbiBcclxueW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIC8vINCh0L7Qt9C00LDQvdC40LUg0Y3QutC30LXQvNC/0LvRj9GA0LAg0LrQsNGA0YLRiyDQuCDQtdCz0L4g0L/RgNC40LLRj9C30LrQsCDQuiDQutC+0L3RgtC10LnQvdC10YDRgyDRgSDQt9Cw0LTQsNC90L3Ri9C8IGlkIChcIm1hcFwiKVxyXG4gIGxldCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgIGNlbnRlcjogWzU1Ljc0ODE4NCwgMzcuNjM4OTcwXSxcclxuICAgIHpvb206IDE1XHJcbiAgfSxcclxuICAgIHtcclxuICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcclxuICAgIH0pLFxyXG4gICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NDgxODQsIDM3LjYzODk3MF0sIHtcclxuICAgICAgYmFsbG9vbkNvbnRlbnRIZWFkZXI6ICdRdWFydGEnLFxyXG4gICAgICBiYWxsb29uQ29udGVudEJvZHk6ICcxMDkyNDAsINCzLiDQnNC+0YHQutCy0LAsPGJyPtCc0L7RgdC60LLQvtGA0LXRhtC60LDRjyDQvdCw0LHQtdGA0LXQttC90LDRjywg0LTQvtC8IDLQsCcsXHJcbiAgICAgIC8vIGJhbGxvb25Db250ZW50Rm9vdGVyOiAn0KLQtdC70LXRhNC+0L0gPGEgaHJlZj1cInRlbDorNzQ5NTkyNjU0MjNcIj4rNzQ5NTkyNjU0MjM8L2E+JyxcclxuICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2dyZWVuRG90SWNvbldpdGhDYXB0aW9uJyxcclxuICAgICAgICBpY29uQ29sb3I6ICcjMDA5OTY2J1xyXG4gICAgICB9KTtcclxuXHJcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xyXG5cclxuICAvL9C+0YLQutC70Y7Rh9Cw0LXQvCDQt9GD0Lwg0LrQvtC70ZHRgdC40LrQvtC8INC80YvRiNC60LhcclxuICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xyXG5cclxuICAvL9C90LAg0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQstCw0YUuLi4gKNC/0YDQvtCy0LXRgNGP0LXQvCDQv9C+IHVzZXJBZ2VudCDQsdGA0LDRg9C30LXRgNCwKVxyXG4gIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAvLy4uLiDQvtGC0LrQu9GO0YfQsNC10Lwg0L/QtdGA0LXRgtCw0YHQutC40LLQsNC90LjQtSDQutCw0YDRgtGLXHJcbiAgLy8gbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ2RyYWcnKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguY3NzPzRiZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")}]);