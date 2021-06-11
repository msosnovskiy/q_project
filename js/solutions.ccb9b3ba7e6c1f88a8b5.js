!function(Q){var n={};function e(t){if(n[t])return n[t].exports;var B=n[t]={i:t,l:!1,exports:{}};return Q[t].call(B.exports,B,B.exports,e),B.l=!0,B.exports}e.m=Q,e.c=n,e.d=function(Q,n,t){e.o(Q,n)||Object.defineProperty(Q,n,{enumerable:!0,get:t})},e.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},e.t=function(Q,n){if(1&n&&(Q=e(Q)),8&n)return Q;if(4&n&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:Q}),2&n&&"string"!=typeof Q)for(var B in Q)e.d(t,B,function(n){return Q[n]}.bind(null,B));return t},e.n=function(Q){var n=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return e.d(n,"a",n),n},e.o=function(Q,n){return Object.prototype.hasOwnProperty.call(Q,n)},e.p="",e(e.s=4)}({4:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_solutions_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n/* harmony import */ var _pages_solutions_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_solutions_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar selection = document.querySelector('.selection');\nvar anchors = selection.querySelectorAll('a[href*=\"#\"]');\nvar temp = document.getElementById('temp');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon'); // переключение меню\n\nmenuIconWrapper.onclick = function () {\n  menuIcon.classList.toggle('menu-icon__active');\n  document.querySelector('.header__navigation').classList.toggle('header__navigation_opened');\n  document.querySelector('.page').classList.toggle('background_black');\n  document.querySelector('.root').classList.toggle('overflow-hidden');\n\n  if (menuIcon.closest('.menu-icon__active')) {\n    menuIconWrapper.ariaLabel = 'Закрыть меню';\n  } else menuIconWrapper.ariaLabel = 'Открыть меню';\n}; // Подключаем Яндекс карты\n\n\nymaps.ready(init);\n\nfunction init() {\n  var myMap = new ymaps.Map('map', {\n    center: [55.748184, 37.638970],\n    zoom: 15\n  }, {\n    searchControlProvider: 'yandex#search'\n  }),\n      myPlacemark = new ymaps.Placemark([55.748184, 37.638970], {\n    balloonContentHeader: 'Quarta',\n    balloonContentBody: '109240, г. Москва,<br>Москворецкая набережная, дом 2а'\n  }, {\n    preset: 'islands#greenDotIconWithCaption',\n    iconColor: '#009966'\n  });\n  myMap.geoObjects.add(myPlacemark);\n  myMap.controls.remove('searchControl'); //отключаем зум колёсиком мышки\n\n  myMap.behaviors.disable('scrollZoom');\n} // получение Id из URL\n\n\nfunction getUrlId() {\n  return window.location.hash.split('#')[1];\n} // получение Id из ссылки\n\n\nfunction getLinkHref(element) {\n  return element.getAttribute('href').substr(1);\n} // переключение блоков\n\n\nfunction switchBlocks(element) {\n  if (element) {\n    var currentBlock = selection.querySelector('.selection__content_visible');\n    currentBlock.classList.remove('selection__content_visible');\n    return element.classList.add('selection__content_visible');\n  } else {\n    return;\n  }\n} //переключение кнопок\n\n\nfunction switchButton(element) {\n  var currentButton = selection.querySelector('.selection__link_active');\n  currentButton.classList.remove('selection__link_active');\n  element.classList.add('selection__link_active');\n} // переключение блоков при переходе\n\n\nfunction openSelectedBlocks(event) {\n  var anchor = selection.querySelector('.anchor'); //по якорной ссылке\n\n  if (getUrlId() != null && event == undefined) {\n    anchor.id = getUrlId();\n    switchBlocks(document.getElementById(getUrlId() + 'Data'));\n\n    var _iterator = _createForOfIteratorHelper(anchors),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _anchor = _step.value;\n\n        if (getLinkHref(_anchor) === getUrlId()) {\n          switchButton(_anchor);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  } //внутри блока\n  else if (event != undefined) {\n      anchor.id = getLinkHref(event);\n      switchBlocks(document.getElementById(getLinkHref(event) + 'Data'));\n      switchButton(event);\n    } else return;\n} //перезапись temp Id для блока по умолчанию\n\n\nfunction rewritingDefaultArchorId() {\n  var currentBlock = document.querySelector('.selection__link_active');\n  temp.id = getLinkHref(currentBlock);\n  return temp.id;\n} // открытие блока при клике на ссылку\n\n\nvar _iterator2 = _createForOfIteratorHelper(anchors),\n    _step2;\n\ntry {\n  var _loop = function _loop() {\n    var anchor = _step2.value;\n    anchor.addEventListener('click', function (event) {\n      event.preventDefault();\n      var blockID = getLinkHref(anchor);\n      window.location.hash = blockID;\n      openSelectedBlocks(event.target);\n    });\n  };\n\n  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator2.e(err);\n} finally {\n  _iterator2.f();\n}\n\nrewritingDefaultArchorId();\nopenSelectedBlocks();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc29sdXRpb25zLmpzPzZlNTIiXSwibmFtZXMiOlsic2VsZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZW1wIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51SWNvbldyYXBwZXIiLCJtZW51SWNvbiIsIm9uY2xpY2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbG9zZXN0IiwiYXJpYUxhYmVsIiwieW1hcHMiLCJyZWFkeSIsImluaXQiLCJteU1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJzZWFyY2hDb250cm9sUHJvdmlkZXIiLCJteVBsYWNlbWFyayIsIlBsYWNlbWFyayIsImJhbGxvb25Db250ZW50SGVhZGVyIiwiYmFsbG9vbkNvbnRlbnRCb2R5IiwicHJlc2V0IiwiaWNvbkNvbG9yIiwiZ2VvT2JqZWN0cyIsImFkZCIsImNvbnRyb2xzIiwicmVtb3ZlIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsImdldFVybElkIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJnZXRMaW5rSHJlZiIsImVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdWJzdHIiLCJzd2l0Y2hCbG9ja3MiLCJjdXJyZW50QmxvY2siLCJzd2l0Y2hCdXR0b24iLCJjdXJyZW50QnV0dG9uIiwib3BlblNlbGVjdGVkQmxvY2tzIiwiZXZlbnQiLCJhbmNob3IiLCJ1bmRlZmluZWQiLCJpZCIsInJld3JpdGluZ0RlZmF1bHRBcmNob3JJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsImJsb2NrSUQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxPQUFPLEdBQUdILFNBQVMsQ0FBQ0ksZ0JBQVYsQ0FBMkIsY0FB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QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQXJCO0FBQ0FHLE1BQUksQ0FBQzhDLEVBQUwsR0FBVVosV0FBVyxDQUFDSyxZQUFELENBQXJCO0FBQ0EsU0FBT3ZDLElBQUksQ0FBQzhDLEVBQVo7QUFDRCxDLENBRUQ7Ozs0Q0FDbUJoRCxPOzs7OztRQUFWOEMsTTtBQUNQQSxVQUFNLENBQUNJLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVVMLEtBQVYsRUFBaUI7QUFDaERBLFdBQUssQ0FBQ00sY0FBTjtBQUVBLFVBQU1DLE9BQU8sR0FBR2hCLFdBQVcsQ0FBQ1UsTUFBRCxDQUEzQjtBQUNBZCxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCa0IsT0FBdkI7QUFDQVIsd0JBQWtCLENBQUNDLEtBQUssQ0FBQ1EsTUFBUCxDQUFsQjtBQUNELEtBTkQ7OztBQURGLHlEQUE0QjtBQUFBO0FBUTNCOzs7Ozs7O0FBRURKLHdCQUF3QjtBQUN4Qkwsa0JBQWtCIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3BhZ2VzL3NvbHV0aW9ucy5jc3MnO1xyXG5cclxuY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbicpO1xyXG5jb25zdCBhbmNob3JzID0gc2VsZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZio9XCIjXCJdJyk7XHJcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xyXG5jb25zdCBtZW51SWNvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uLXdyYXBwZXInKTtcclxuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJylcclxuXHJcbi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQvNC10L3RjlxyXG5tZW51SWNvbldyYXBwZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdmlnYXRpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICBpZiAobWVudUljb24uY2xvc2VzdCgnLm1lbnUtaWNvbl9fYWN0aXZlJykpIHtcclxuICAgIG1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG4gIH1cclxuICBlbHNlIG1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG59XHJcblxyXG4vLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQr9C90LTQtdC60YEg0LrQsNGA0YLRi1xyXG55bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgbGV0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgY2VudGVyOiBbNTUuNzQ4MTg0LCAzNy42Mzg5NzBdLFxyXG4gICAgem9vbTogMTVcclxuICB9LFxyXG4gICAge1xyXG4gICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xyXG4gICAgfSksXHJcbiAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc0ODE4NCwgMzcuNjM4OTcwXSwge1xyXG4gICAgICBiYWxsb29uQ29udGVudEhlYWRlcjogJ1F1YXJ0YScsXHJcbiAgICAgIGJhbGxvb25Db250ZW50Qm9keTogJzEwOTI0MCwg0LMuINCc0L7RgdC60LLQsCw8YnI+0JzQvtGB0LrQstC+0YDQtdGG0LrQsNGPINC90LDQsdC10YDQtdC20L3QsNGPLCDQtNC+0LwgMtCwJyxcclxuICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2dyZWVuRG90SWNvbldpdGhDYXB0aW9uJyxcclxuICAgICAgICBpY29uQ29sb3I6ICcjMDA5OTY2J1xyXG4gICAgICB9KTtcclxuXHJcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xyXG5cclxuICAvL9C+0YLQutC70Y7Rh9Cw0LXQvCDQt9GD0Lwg0LrQvtC70ZHRgdC40LrQvtC8INC80YvRiNC60LhcclxuICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xyXG59XHJcblxyXG4vLyDQv9C+0LvRg9GH0LXQvdC40LUgSWQg0LjQtyBVUkxcclxuZnVuY3Rpb24gZ2V0VXJsSWQoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV07XHJcbn1cclxuXHJcbi8vINC/0L7Qu9GD0YfQtdC90LjQtSBJZCDQuNC3INGB0YHRi9C70LrQuFxyXG5mdW5jdGlvbiBnZXRMaW5rSHJlZihlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpO1xyXG59XHJcblxyXG4vLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LHQu9C+0LrQvtCyXHJcbmZ1bmN0aW9uIHN3aXRjaEJsb2NrcyhlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IHNlbGVjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX19jb250ZW50X3Zpc2libGUnKTtcclxuICAgIGN1cnJlbnRCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb25fX2NvbnRlbnRfdmlzaWJsZScpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uX19jb250ZW50X3Zpc2libGUnKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8v0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INC60L3QvtC/0L7QulxyXG5mdW5jdGlvbiBzd2l0Y2hCdXR0b24oZWxlbWVudCkge1xyXG4gIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBzZWxlY3Rpb24ucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbl9fbGlua19hY3RpdmUnKTtcclxuICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbl9fbGlua19hY3RpdmUnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbl9fbGlua19hY3RpdmUnKTtcclxufVxyXG5cclxuLy8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INCx0LvQvtC60L7QsiDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtVxyXG5mdW5jdGlvbiBvcGVuU2VsZWN0ZWRCbG9ja3MoZXZlbnQpIHtcclxuICBjb25zdCBhbmNob3IgPSBzZWxlY3Rpb24ucXVlcnlTZWxlY3RvcignLmFuY2hvcicpO1xyXG4gIC8v0L/QviDRj9C60L7RgNC90L7QuSDRgdGB0YvQu9C60LVcclxuICBpZiAoZ2V0VXJsSWQoKSAhPSBudWxsICYmIGV2ZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgYW5jaG9yLmlkID0gZ2V0VXJsSWQoKTtcclxuICAgIHN3aXRjaEJsb2Nrcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoZ2V0VXJsSWQoKSArICdEYXRhJykpKTtcclxuICAgIGZvciAobGV0IGFuY2hvciBvZiBhbmNob3JzKSB7XHJcbiAgICAgIGlmIChnZXRMaW5rSHJlZihhbmNob3IpID09PSBnZXRVcmxJZCgpKSB7XHJcbiAgICAgICAgc3dpdGNoQnV0dG9uKGFuY2hvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy/QstC90YPRgtGA0Lgg0LHQu9C+0LrQsFxyXG4gIGVsc2UgaWYgKGV2ZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgYW5jaG9yLmlkID0gZ2V0TGlua0hyZWYoZXZlbnQpO1xyXG4gICAgc3dpdGNoQmxvY2tzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKChnZXRMaW5rSHJlZihldmVudCkgKyAnRGF0YScpKSk7XHJcbiAgICBzd2l0Y2hCdXR0b24oZXZlbnQpO1xyXG4gIH1cclxuICBlbHNlIHJldHVybjtcclxufVxyXG5cclxuLy/Qv9C10YDQtdC30LDQv9C40YHRjCB0ZW1wIElkINC00LvRjyDQsdC70L7QutCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXHJcbmZ1bmN0aW9uIHJld3JpdGluZ0RlZmF1bHRBcmNob3JJZCgpIHtcclxuICBjb25zdCBjdXJyZW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX19saW5rX2FjdGl2ZScpO1xyXG4gIHRlbXAuaWQgPSBnZXRMaW5rSHJlZihjdXJyZW50QmxvY2spO1xyXG4gIHJldHVybiB0ZW1wLmlkO1xyXG59XHJcblxyXG4vLyDQvtGC0LrRgNGL0YLQuNC1INCx0LvQvtC60LAg0L/RgNC4INC60LvQuNC60LUg0L3QsCDRgdGB0YvQu9C60YNcclxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYmxvY2tJRCA9IGdldExpbmtIcmVmKGFuY2hvcik7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGJsb2NrSUQ7XHJcbiAgICBvcGVuU2VsZWN0ZWRCbG9ja3MoZXZlbnQudGFyZ2V0KTtcclxuICB9KVxyXG59XHJcblxyXG5yZXdyaXRpbmdEZWZhdWx0QXJjaG9ySWQoKTtcclxub3BlblNlbGVjdGVkQmxvY2tzKCk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n")},5:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc29sdXRpb25zLmNzcz81N2VjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n")}});