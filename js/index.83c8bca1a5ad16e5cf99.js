!function(Q){var n={};function c(e){if(n[e])return n[e].exports;var B=n[e]={i:e,l:!1,exports:{}};return Q[e].call(B.exports,B,B.exports,c),B.l=!0,B.exports}c.m=Q,c.c=n,c.d=function(Q,n,e){c.o(Q,n)||Object.defineProperty(Q,n,{enumerable:!0,get:e})},c.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},c.t=function(Q,n){if(1&n&&(Q=c(Q)),8&n)return Q;if(4&n&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:Q}),2&n&&"string"!=typeof Q)for(var B in Q)c.d(e,B,function(n){return Q[n]}.bind(null,B));return e},c.n=function(Q){var n=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return c.d(n,"a",n),n},c.o=function(Q,n){return Object.prototype.hasOwnProperty.call(Q,n)},c.p="",c(c.s=73)}({62:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguY3NzPzRiZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///62\n")},73:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/pages/index.css\nvar pages = __webpack_require__(62);\n\n// CONCATENATED MODULE: ./src/js/constants/constants.js\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar map = document.querySelector('#map');\n\n// CONCATENATED MODULE: ./src/js/index.js\n\n //проверяет состояние меню открыто/закрыто\n\nfunction menuOpened() {\n  if (menuIcon.closest('.menu-icon__active')) {\n    return true;\n  } else return false;\n} // открыть меню\n\n\nfunction openMenu() {\n  menuIcon.classList.add('menu-icon__active');\n  navigation.classList.add('header__navigation_opened');\n  page.classList.add('background_black');\n  root.classList.add('overflow-hidden');\n  menuIconWrapper.ariaLabel = 'Закрыть меню';\n} // закрыть меню\n\n\nfunction closeMenu() {\n  menuIcon.classList.remove('menu-icon__active');\n  navigation.classList.remove('header__navigation_opened');\n  page.classList.remove('background_black');\n  root.classList.remove('overflow-hidden');\n  menuIconWrapper.ariaLabel = 'Открыть меню';\n} // открытие меню по клику на бургер\n\n\nmenuIconWrapper.addEventListener('click', function () {\n  if (!menuOpened()) {\n    openMenu();\n  } else closeMenu();\n}); // закрытие меню по клику вне области меню\n\npage.addEventListener('click', function (event) {\n  if (event.target === page && menuOpened()) {\n    closeMenu();\n  }\n}); // function targetToucheslength(event) {\n//   return event.targetTouches.length;\n// }\n// function changedToucheslength(event) {\n//   return event.changedTouches.length;\n// }\n\nmap.addEventListener('touchmove', function (event) {\n  if (map.contains(event.target) && (event.targetTouches.length < 2 || event.changedTouches.length < 2)) {\n    map.classList.add('contacts__map_cover');\n  }\n\n  document.querySelector('.test').textContent = event.targetTouches.length;\n  document.querySelector('.test_two').textContent = event.changedTouches.length;\n});\nmap.addEventListener('touchend', function (event) {\n  if (map.contains(event.target)) {\n    map.classList.remove('contacts__map_cover');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwibWFwIiwibWVudU9wZW5lZCIsImNvbnN0YW50cyIsImNsb3Nlc3QiLCJvcGVuTWVudSIsImNsYXNzTGlzdCIsImFkZCIsImFyaWFMYWJlbCIsImNsb3NlTWVudSIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwidGFyZ2V0VG91Y2hlcyIsImxlbmd0aCIsImNoYW5nZWRUb3VjaGVzIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUMsSUFBSSxHQUFHSCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBYjtBQUNBLElBQU1FLFVBQVUsR0FBR0QsSUFBSSxDQUFDRCxhQUFMLENBQW1CLHFCQUFuQixDQUFuQjtBQUNBLElBQU1HLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF4QjtBQUNBLElBQU1JLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0EsSUFBTUssR0FBRyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjs7O0FDTEE7Q0FHQTs7QUFDQSxTQUFTTSxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLFFBQUEsQ0FBbUJDLE9BQW5CLENBQTJCLG9CQUEzQixDQUFKLEVBQXNEO0FBQ3BELFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxPQUFPLEtBQVA7QUFDUixDLENBRUQ7OztBQUNBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEJGLFVBQUEsQ0FBbUJHLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyxtQkFBakM7QUFDQUosWUFBQSxDQUFxQkcsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLDJCQUFuQztBQUNBSixNQUFBLENBQWVHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGtCQUE3QjtBQUNBSixNQUFBLENBQWVHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGlCQUE3QjtBQUNBSixpQkFBQSxDQUEwQkssU0FBMUIsR0FBc0MsY0FBdEM7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNDLFNBQVQsR0FBcUI7QUFDbkJOLFVBQUEsQ0FBbUJHLFNBQW5CLENBQTZCSSxNQUE3QixDQUFvQyxtQkFBcEM7QUFDQVAsWUFBQSxDQUFxQkcsU0FBckIsQ0FBK0JJLE1BQS9CLENBQXNDLDJCQUF0QztBQUNBUCxNQUFBLENBQWVHLFNBQWYsQ0FBeUJJLE1BQXpCLENBQWdDLGtCQUFoQztBQUNBUCxNQUFBLENBQWVHLFNBQWYsQ0FBeUJJLE1BQXpCLENBQWdDLGlCQUFoQztBQUNBUCxpQkFBQSxDQUEwQkssU0FBMUIsR0FBc0MsY0FBdEM7QUFDRCxDLENBRUQ7OztBQUNBTCxlQUFBLENBQTBCUSxnQkFBMUIsQ0FBMkMsT0FBM0MsRUFBb0QsWUFBWTtBQUM5RCxNQUFJLENBQUNULFVBQVUsRUFBZixFQUFtQjtBQUNqQkcsWUFBUTtBQUNULEdBRkQsTUFFT0ksU0FBUztBQUNqQixDQUpELEUsQ0FNQTs7QUFDQU4sSUFBQSxDQUFlUSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hELE1BQUlBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQlYsSUFBakIsSUFBbUNELFVBQVUsRUFBakQsRUFBcUQ7QUFDbkRPLGFBQVM7QUFDVjtBQUNGLENBSkQsRSxDQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQU4sR0FBQSxDQUFjUSxnQkFBZCxDQUErQixXQUEvQixFQUE0QyxVQUFVQyxLQUFWLEVBQWlCO0FBQzNELE1BQUlULEdBQUEsQ0FBY1csUUFBZCxDQUF1QkYsS0FBSyxDQUFDQyxNQUE3QixNQUF5Q0QsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFwQixHQUE2QixDQUE3QixJQUFrQ0osS0FBSyxDQUFDSyxjQUFOLENBQXFCRCxNQUFyQixHQUE4QixDQUF6RyxDQUFKLEVBQWlIO0FBQy9HYixPQUFBLENBQWNHLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLHFCQUE1QjtBQUNEOztBQUNEWixVQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NzQixXQUFoQyxHQUE4Q04sS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFsRTtBQUNBckIsVUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLEVBQW9Dc0IsV0FBcEMsR0FBa0ROLEtBQUssQ0FBQ0ssY0FBTixDQUFxQkQsTUFBdkU7QUFDRCxDQU5EO0FBUUFiLEdBQUEsQ0FBY1EsZ0JBQWQsQ0FBK0IsVUFBL0IsRUFBMkMsVUFBVUMsS0FBVixFQUFpQjtBQUMxRCxNQUFJVCxHQUFBLENBQWNXLFFBQWQsQ0FBdUJGLEtBQUssQ0FBQ0MsTUFBN0IsQ0FBSixFQUEwQztBQUN4Q1YsT0FBQSxDQUFjRyxTQUFkLENBQXdCSSxNQUF4QixDQUErQixxQkFBL0I7QUFDRDtBQUNGLENBSkQiLCJmaWxlIjoiNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKTtcclxuY29uc3QgcGFnZSA9IHJvb3QucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcclxuY29uc3QgbmF2aWdhdGlvbiA9IHBhZ2UucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2aWdhdGlvbicpO1xyXG5jb25zdCBtZW51SWNvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uLXdyYXBwZXInKTtcclxuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XHJcbmNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKTtcclxuXHJcbmV4cG9ydCB7IHJvb3QsIHBhZ2UsIG5hdmlnYXRpb24sIG1lbnVJY29uV3JhcHBlciwgbWVudUljb24sIG1hcCB9OyIsImltcG9ydCAnLi4vcGFnZXMvaW5kZXguY3NzJztcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL2pzL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuLy/Qv9GA0L7QstC10YDRj9C10YIg0YHQvtGB0YLQvtGP0L3QuNC1INC80LXQvdGOINC+0YLQutGA0YvRgtC+L9C30LDQutGA0YvRgtC+XHJcbmZ1bmN0aW9uIG1lbnVPcGVuZWQoKSB7XHJcbiAgaWYgKGNvbnN0YW50cy5tZW51SWNvbi5jbG9zZXN0KCcubWVudS1pY29uX19hY3RpdmUnKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8g0L7RgtC60YDRi9GC0Ywg0LzQtdC90Y5cclxuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbiAgY29uc3RhbnRzLm1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaWNvbl9fYWN0aXZlJyk7XHJcbiAgY29uc3RhbnRzLm5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXZpZ2F0aW9uX29wZW5lZCcpO1xyXG4gIGNvbnN0YW50cy5wYWdlLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmRfYmxhY2snKTtcclxuICBjb25zdGFudHMucm9vdC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICBjb25zdGFudHMubWVudUljb25XcmFwcGVyLmFyaWFMYWJlbCA9ICfQl9Cw0LrRgNGL0YLRjCDQvNC10L3Rjic7XHJcbn1cclxuXHJcbi8vINC30LDQutGA0YvRgtGMINC80LXQvdGOXHJcbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICBjb25zdGFudHMubWVudUljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pY29uX19hY3RpdmUnKTtcclxuICBjb25zdGFudHMubmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgY29uc3RhbnRzLnBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZF9ibGFjaycpO1xyXG4gIGNvbnN0YW50cy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gIGNvbnN0YW50cy5tZW51SWNvbldyYXBwZXIuYXJpYUxhYmVsID0gJ9Ce0YLQutGA0YvRgtGMINC80LXQvdGOJztcclxufVxyXG5cclxuLy8g0L7RgtC60YDRi9GC0LjQtSDQvNC10L3RjiDQv9C+INC60LvQuNC60YMg0L3QsCDQsdGD0YDQs9C10YBcclxuY29uc3RhbnRzLm1lbnVJY29uV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIW1lbnVPcGVuZWQoKSkge1xyXG4gICAgb3Blbk1lbnUoKTtcclxuICB9IGVsc2UgY2xvc2VNZW51KCk7XHJcbn0pO1xyXG5cclxuLy8g0LfQsNC60YDRi9GC0LjQtSDQvNC10L3RjiDQv9C+INC60LvQuNC60YMg0LLQvdC1INC+0LHQu9Cw0YHRgtC4INC80LXQvdGOXHJcbmNvbnN0YW50cy5wYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29uc3RhbnRzLnBhZ2UgJiYgbWVudU9wZW5lZCgpKSB7XHJcbiAgICBjbG9zZU1lbnUoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRhcmdldFRvdWNoZXNsZW5ndGgoZXZlbnQpIHtcclxuLy8gICByZXR1cm4gZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGg7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZWRUb3VjaGVzbGVuZ3RoKGV2ZW50KSB7XHJcbi8vICAgcmV0dXJuIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDtcclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0YW50cy5tYXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgaWYgKGNvbnN0YW50cy5tYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA8IDIpKSB7XHJcbiAgICBjb25zdGFudHMubWFwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzX19tYXBfY292ZXInKTtcclxuICB9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKS50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0X3R3bycpLnRleHRDb250ZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoO1xyXG59KTtcclxuXHJcbmNvbnN0YW50cy5tYXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoY29uc3RhbnRzLm1hcC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICBjb25zdGFudHMubWFwLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3RzX19tYXBfY292ZXInKTtcclxuICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///73\n")}});