!function(Q){var n={};function c(e){if(n[e])return n[e].exports;var F=n[e]={i:e,l:!1,exports:{}};return Q[e].call(F.exports,F,F.exports,c),F.l=!0,F.exports}c.m=Q,c.c=n,c.d=function(Q,n,e){c.o(Q,n)||Object.defineProperty(Q,n,{enumerable:!0,get:e})},c.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},c.t=function(Q,n){if(1&n&&(Q=c(Q)),8&n)return Q;if(4&n&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:Q}),2&n&&"string"!=typeof Q)for(var F in Q)c.d(e,F,function(n){return Q[n]}.bind(null,F));return e},c.n=function(Q){var n=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return c.d(n,"a",n),n},c.o=function(Q,n){return Object.prototype.hasOwnProperty.call(Q,n)},c.p="",c(c.s=73)}({62:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguY3NzPzRiZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///62\n")},73:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/pages/index.css\nvar pages = __webpack_require__(62);\n\n// CONCATENATED MODULE: ./src/js/constants/constants.js\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar map = document.querySelector('#map');\n\n// CONCATENATED MODULE: ./src/js/index.js\n\n //проверяет состояние меню открыто/закрыто\n\nfunction menuOpened() {\n  if (menuIcon.closest('.menu-icon__active')) {\n    return true;\n  } else return false;\n} // открыть меню\n\n\nfunction openMenu() {\n  menuIcon.classList.add('menu-icon__active');\n  navigation.classList.add('header__navigation_opened');\n  page.classList.add('background_black');\n  root.classList.add('overflow-hidden');\n  menuIconWrapper.ariaLabel = 'Закрыть меню';\n} // закрыть меню\n\n\nfunction closeMenu() {\n  menuIcon.classList.remove('menu-icon__active');\n  navigation.classList.remove('header__navigation_opened');\n  page.classList.remove('background_black');\n  root.classList.remove('overflow-hidden');\n  menuIconWrapper.ariaLabel = 'Открыть меню';\n} // открытие меню по клику на бургер\n\n\nmenuIconWrapper.addEventListener('click', function () {\n  if (!menuOpened()) {\n    openMenu();\n  } else closeMenu();\n}); // закрытие меню по клику вне области меню\n\npage.addEventListener('click', function (event) {\n  if (event.target === page && menuOpened()) {\n    closeMenu();\n  }\n}); // function targetToucheslength(event) {\n//   return event.targetTouches.length;\n// }\n// function changedToucheslength(event) {\n//   return event.changedTouches.length;\n// }\n\nmap.addEventListener('touchmove', function (event) {\n  if (map.contains(event.target) && (event.targetTouches.length < 2 || event.changedTouches.length < 2)) {\n    map.classList.add('contacts__map_cover');\n  }\n\n  document.querySelector('.test').textContent = event.targetTouches.length;\n});\nmap.addEventListener('touchend', function (event) {\n  if (map.contains(event.target)) {\n    map.classList.remove('contacts__map_cover');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwibWFwIiwibWVudU9wZW5lZCIsImNvbnN0YW50cyIsImNsb3Nlc3QiLCJvcGVuTWVudSIsImNsYXNzTGlzdCIsImFkZCIsImFyaWFMYWJlbCIsImNsb3NlTWVudSIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwidGFyZ2V0VG91Y2hlcyIsImxlbmd0aCIsImNoYW5nZWRUb3VjaGVzIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUMsSUFBSSxHQUFHSCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBYjtBQUNBLElBQU1FLFVBQVUsR0FBR0QsSUFBSSxDQUFDRCxhQUFMLENBQW1CLHFCQUFuQixDQUFuQjtBQUNBLElBQU1HLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF4QjtBQUNBLElBQU1JLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0EsSUFBTUssR0FBRyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjs7O0FDTEE7Q0FHQTs7QUFDQSxTQUFTTSxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLFFBQUEsQ0FBbUJDLE9BQW5CLENBQTJCLG9CQUEzQixDQUFKLEVBQXNEO0FBQ3BELFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxPQUFPLEtBQVA7QUFDUixDLENBRUQ7OztBQUNBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEJGLFVBQUEsQ0FBbUJHLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyxtQkFBakM7QUFDQUosWUFBQSxDQUFxQkcsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLDJCQUFuQztBQUNBSixNQUFBLENBQWVHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGtCQUE3QjtBQUNBSixNQUFBLENBQWVHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGlCQUE3QjtBQUNBSixpQkFBQSxDQUEwQkssU0FBMUIsR0FBc0MsY0FBdEM7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNDLFNBQVQsR0FBcUI7QUFDbkJOLFVBQUEsQ0FBbUJHLFNBQW5CLENBQTZCSSxNQUE3QixDQUFvQyxtQkFBcEM7QUFDQVAsWUFBQSxDQUFxQkcsU0FBckIsQ0FBK0JJLE1BQS9CLENBQXNDLDJCQUF0QztBQUNBUCxNQUFBLENBQWVHLFNBQWYsQ0FBeUJJLE1BQXpCLENBQWdDLGtCQUFoQztBQUNBUCxNQUFBLENBQWVHLFNBQWYsQ0FBeUJJLE1BQXpCLENBQWdDLGlCQUFoQztBQUNBUCxpQkFBQSxDQUEwQkssU0FBMUIsR0FBc0MsY0FBdEM7QUFDRCxDLENBRUQ7OztBQUNBTCxlQUFBLENBQTBCUSxnQkFBMUIsQ0FBMkMsT0FBM0MsRUFBb0QsWUFBWTtBQUM5RCxNQUFJLENBQUNULFVBQVUsRUFBZixFQUFtQjtBQUNqQkcsWUFBUTtBQUNULEdBRkQsTUFFT0ksU0FBUztBQUNqQixDQUpELEUsQ0FNQTs7QUFDQU4sSUFBQSxDQUFlUSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hELE1BQUlBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQlYsSUFBakIsSUFBbUNELFVBQVUsRUFBakQsRUFBcUQ7QUFDbkRPLGFBQVM7QUFDVjtBQUNGLENBSkQsRSxDQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQU4sR0FBQSxDQUFjUSxnQkFBZCxDQUErQixXQUEvQixFQUE0QyxVQUFVQyxLQUFWLEVBQWlCO0FBQzNELE1BQUlULEdBQUEsQ0FBY1csUUFBZCxDQUF1QkYsS0FBSyxDQUFDQyxNQUE3QixNQUF5Q0QsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFwQixHQUE2QixDQUE3QixJQUFrQ0osS0FBSyxDQUFDSyxjQUFOLENBQXFCRCxNQUFyQixHQUE4QixDQUF6RyxDQUFKLEVBQWlIO0FBQy9HYixPQUFBLENBQWNHLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLHFCQUE1QjtBQUNEOztBQUNEWixVQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NzQixXQUFoQyxHQUE4Q04sS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFsRTtBQUNELENBTEQ7QUFPQWIsR0FBQSxDQUFjUSxnQkFBZCxDQUErQixVQUEvQixFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO0FBQzFELE1BQUlULEdBQUEsQ0FBY1csUUFBZCxDQUF1QkYsS0FBSyxDQUFDQyxNQUE3QixDQUFKLEVBQTBDO0FBQ3hDVixPQUFBLENBQWNHLFNBQWQsQ0FBd0JJLE1BQXhCLENBQStCLHFCQUEvQjtBQUNEO0FBQ0YsQ0FKRCIsImZpbGUiOiI3My5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vdCcpO1xyXG5jb25zdCBwYWdlID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xyXG5jb25zdCBuYXZpZ2F0aW9uID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZpZ2F0aW9uJyk7XHJcbmNvbnN0IG1lbnVJY29uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24td3JhcHBlcicpO1xyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcclxuY29uc3QgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpO1xyXG5cclxuZXhwb3J0IHsgcm9vdCwgcGFnZSwgbmF2aWdhdGlvbiwgbWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgbWFwIH07IiwiaW1wb3J0ICcuLi9wYWdlcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vanMvY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG4vL9C/0YDQvtCy0LXRgNGP0LXRgiDRgdC+0YHRgtC+0Y/QvdC40LUg0LzQtdC90Y4g0L7RgtC60YDRi9GC0L4v0LfQsNC60YDRi9GC0L5cclxuZnVuY3Rpb24gbWVudU9wZW5lZCgpIHtcclxuICBpZiAoY29uc3RhbnRzLm1lbnVJY29uLmNsb3Nlc3QoJy5tZW51LWljb25fX2FjdGl2ZScpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDQvtGC0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuICBjb25zdGFudHMubWVudUljb24uY2xhc3NMaXN0LmFkZCgnbWVudS1pY29uX19hY3RpdmUnKTtcclxuICBjb25zdGFudHMubmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgY29uc3RhbnRzLnBhZ2UuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZF9ibGFjaycpO1xyXG4gIGNvbnN0YW50cy5yb290LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gIGNvbnN0YW50cy5tZW51SWNvbldyYXBwZXIuYXJpYUxhYmVsID0gJ9CX0LDQutGA0YvRgtGMINC80LXQvdGOJztcclxufVxyXG5cclxuLy8g0LfQsNC60YDRi9GC0Ywg0LzQtdC90Y5cclxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gIGNvbnN0YW50cy5tZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gIGNvbnN0YW50cy5uYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2aWdhdGlvbl9vcGVuZWQnKTtcclxuICBjb25zdGFudHMucGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgY29uc3RhbnRzLnJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgY29uc3RhbnRzLm1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG59XHJcblxyXG4vLyDQvtGC0LrRgNGL0YLQuNC1INC80LXQvdGOINC/0L4g0LrQu9C40LrRgyDQvdCwINCx0YPRgNCz0LXRgFxyXG5jb25zdGFudHMubWVudUljb25XcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmICghbWVudU9wZW5lZCgpKSB7XHJcbiAgICBvcGVuTWVudSgpO1xyXG4gIH0gZWxzZSBjbG9zZU1lbnUoKTtcclxufSk7XHJcblxyXG4vLyDQt9Cw0LrRgNGL0YLQuNC1INC80LXQvdGOINC/0L4g0LrQu9C40LrRgyDQstC90LUg0L7QsdC70LDRgdGC0Lgg0LzQtdC90Y5cclxuY29uc3RhbnRzLnBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBjb25zdGFudHMucGFnZSAmJiBtZW51T3BlbmVkKCkpIHtcclxuICAgIGNsb3NlTWVudSgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdGFyZ2V0VG91Y2hlc2xlbmd0aChldmVudCkge1xyXG4vLyAgIHJldHVybiBldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aDtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY2hhbmdlZFRvdWNoZXNsZW5ndGgoZXZlbnQpIHtcclxuLy8gICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoO1xyXG4vLyB9XHJcblxyXG5cclxuY29uc3RhbnRzLm1hcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoY29uc3RhbnRzLm1hcC5jb250YWlucyhldmVudC50YXJnZXQpICYmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIgfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoIDwgMikpIHtcclxuICAgIGNvbnN0YW50cy5tYXAuY2xhc3NMaXN0LmFkZCgnY29udGFjdHNfX21hcF9jb3ZlcicpO1xyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdCcpLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGg7XHJcbn0pO1xyXG5cclxuY29uc3RhbnRzLm1hcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGlmIChjb25zdGFudHMubWFwLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgIGNvbnN0YW50cy5tYXAuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdHNfX21hcF9jb3ZlcicpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///73\n")}});