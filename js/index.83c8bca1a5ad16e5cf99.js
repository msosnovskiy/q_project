!function(n){var Q={};function c(e){if(Q[e])return Q[e].exports;var t=Q[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=Q,c.d=function(n,Q,e){c.o(n,Q)||Object.defineProperty(n,Q,{enumerable:!0,get:e})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,Q){if(1&Q&&(n=c(n)),8&Q)return n;if(4&Q&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&Q&&"string"!=typeof n)for(var t in n)c.d(e,t,function(Q){return n[Q]}.bind(null,t));return e},c.n=function(n){var Q=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(Q,"a",Q),Q},c.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},c.p="",c(c.s=73)}({62:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguY3NzPzRiZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///62\n")},73:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/pages/index.css\nvar pages = __webpack_require__(62);\n\n// CONCATENATED MODULE: ./src/js/constants/constants.js\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar map = document.querySelector('#map');\n\n// CONCATENATED MODULE: ./src/js/index.js\n\n //проверяет состояние меню открыто/закрыто\n\nfunction menuOpened() {\n  if (menuIcon.closest('.menu-icon__active')) {\n    return true;\n  } else return false;\n} // открыть меню\n\n\nfunction openMenu() {\n  menuIcon.classList.add('menu-icon__active');\n  navigation.classList.add('header__navigation_opened');\n  page.classList.add('background_black');\n  root.classList.add('overflow-hidden');\n  menuIconWrapper.ariaLabel = 'Закрыть меню';\n} // закрыть меню\n\n\nfunction closeMenu() {\n  menuIcon.classList.remove('menu-icon__active');\n  navigation.classList.remove('header__navigation_opened');\n  page.classList.remove('background_black');\n  root.classList.remove('overflow-hidden');\n  menuIconWrapper.ariaLabel = 'Открыть меню';\n} // открытие меню по клику на бургер\n\n\nmenuIconWrapper.addEventListener('click', function () {\n  if (!menuOpened()) {\n    openMenu();\n  } else closeMenu();\n}); // закрытие меню по клику вне области меню\n\npage.addEventListener('click', function (event) {\n  if (event.target === page && menuOpened()) {\n    closeMenu();\n  }\n}); // constants.map.addEventListener('dragstart', function (event) {\n//   console.log(event);\n//     if (constants.map.contains(event.target)) {\n//       constants.map.classList.toggle('contacts__map_cover');\n//     }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwibWFwIiwibWVudU9wZW5lZCIsImNvbnN0YW50cyIsImNsb3Nlc3QiLCJvcGVuTWVudSIsImNsYXNzTGlzdCIsImFkZCIsImFyaWFMYWJlbCIsImNsb3NlTWVudSIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0UsYUFBTCxDQUFtQixPQUFuQixDQUFiO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCxJQUFJLENBQUNELGFBQUwsQ0FBbUIscUJBQW5CLENBQW5CO0FBQ0EsSUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXhCO0FBQ0EsSUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxJQUFNSyxHQUFHLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFaOzs7QUNMQTtDQUdBOztBQUNBLFNBQVNNLFVBQVQsR0FBc0I7QUFDcEIsTUFBSUMsUUFBQSxDQUFtQkMsT0FBbkIsQ0FBMkIsb0JBQTNCLENBQUosRUFBc0Q7QUFDcEQsV0FBTyxJQUFQO0FBQ0QsR0FGRCxNQUVPLE9BQU8sS0FBUDtBQUNSLEMsQ0FFRDs7O0FBQ0EsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQkYsVUFBQSxDQUFtQkcsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLG1CQUFqQztBQUNBSixZQUFBLENBQXFCRyxTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUMsMkJBQW5DO0FBQ0FKLE1BQUEsQ0FBZUcsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsa0JBQTdCO0FBQ0FKLE1BQUEsQ0FBZUcsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsaUJBQTdCO0FBQ0FKLGlCQUFBLENBQTBCSyxTQUExQixHQUFzQyxjQUF0QztBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQk4sVUFBQSxDQUFtQkcsU0FBbkIsQ0FBNkJJLE1BQTdCLENBQW9DLG1CQUFwQztBQUNBUCxZQUFBLENBQXFCRyxTQUFyQixDQUErQkksTUFBL0IsQ0FBc0MsMkJBQXRDO0FBQ0FQLE1BQUEsQ0FBZUcsU0FBZixDQUF5QkksTUFBekIsQ0FBZ0Msa0JBQWhDO0FBQ0FQLE1BQUEsQ0FBZUcsU0FBZixDQUF5QkksTUFBekIsQ0FBZ0MsaUJBQWhDO0FBQ0FQLGlCQUFBLENBQTBCSyxTQUExQixHQUFzQyxjQUF0QztBQUNELEMsQ0FFRDs7O0FBQ0FMLGVBQUEsQ0FBMEJRLGdCQUExQixDQUEyQyxPQUEzQyxFQUFvRCxZQUFZO0FBQzlELE1BQUksQ0FBQ1QsVUFBVSxFQUFmLEVBQW1CO0FBQ2pCRyxZQUFRO0FBQ1QsR0FGRCxNQUVPSSxTQUFTO0FBQ2pCLENBSkQsRSxDQU1BOztBQUNBTixJQUFBLENBQWVRLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEQsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCVixJQUFqQixJQUFtQ0QsVUFBVSxFQUFqRCxFQUFxRDtBQUNuRE8sYUFBUztBQUNWO0FBQ0YsQ0FKRCxFLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjczLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290Jyk7XHJcbmNvbnN0IHBhZ2UgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbmNvbnN0IG5hdmlnYXRpb24gPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdmlnYXRpb24nKTtcclxuY29uc3QgbWVudUljb25XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbi13cmFwcGVyJyk7XHJcbmNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xyXG5jb25zdCBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwJyk7XHJcblxyXG5leHBvcnQgeyByb290LCBwYWdlLCBuYXZpZ2F0aW9uLCBtZW51SWNvbldyYXBwZXIsIG1lbnVJY29uLCBtYXAgfTsiLCJpbXBvcnQgJy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi9qcy9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbi8v0L/RgNC+0LLQtdGA0Y/QtdGCINGB0L7RgdGC0L7Rj9C90LjQtSDQvNC10L3RjiDQvtGC0LrRgNGL0YLQvi/Qt9Cw0LrRgNGL0YLQvlxyXG5mdW5jdGlvbiBtZW51T3BlbmVkKCkge1xyXG4gIGlmIChjb25zdGFudHMubWVudUljb24uY2xvc2VzdCgnLm1lbnUtaWNvbl9fYWN0aXZlJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8vINC+0YLQutGA0YvRgtGMINC80LXQvdGOXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gIGNvbnN0YW50cy5tZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gIGNvbnN0YW50cy5uYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2aWdhdGlvbl9vcGVuZWQnKTtcclxuICBjb25zdGFudHMucGFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgY29uc3RhbnRzLnJvb3QuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgY29uc3RhbnRzLm1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG59XHJcblxyXG4vLyDQt9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7XHJcbiAgY29uc3RhbnRzLm1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaWNvbl9fYWN0aXZlJyk7XHJcbiAgY29uc3RhbnRzLm5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXZpZ2F0aW9uX29wZW5lZCcpO1xyXG4gIGNvbnN0YW50cy5wYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmRfYmxhY2snKTtcclxuICBjb25zdGFudHMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICBjb25zdGFudHMubWVudUljb25XcmFwcGVyLmFyaWFMYWJlbCA9ICfQntGC0LrRgNGL0YLRjCDQvNC10L3Rjic7XHJcbn1cclxuXHJcbi8vINC+0YLQutGA0YvRgtC40LUg0LzQtdC90Y4g0L/QviDQutC70LjQutGDINC90LAg0LHRg9GA0LPQtdGAXHJcbmNvbnN0YW50cy5tZW51SWNvbldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFtZW51T3BlbmVkKCkpIHtcclxuICAgIG9wZW5NZW51KCk7XHJcbiAgfSBlbHNlIGNsb3NlTWVudSgpO1xyXG59KTtcclxuXHJcbi8vINC30LDQutGA0YvRgtC40LUg0LzQtdC90Y4g0L/QviDQutC70LjQutGDINCy0L3QtSDQvtCx0LvQsNGB0YLQuCDQvNC10L3RjlxyXG5jb25zdGFudHMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGlmIChldmVudC50YXJnZXQgPT09IGNvbnN0YW50cy5wYWdlICYmIG1lbnVPcGVuZWQoKSkge1xyXG4gICAgY2xvc2VNZW51KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGNvbnN0YW50cy5tYXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4vLyAgICAgaWYgKGNvbnN0YW50cy5tYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4vLyAgICAgICBjb25zdGFudHMubWFwLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3RzX19tYXBfY292ZXInKTtcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///73\n")}});