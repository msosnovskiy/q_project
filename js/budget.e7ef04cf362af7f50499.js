!function(n){var e={};function t(c){if(e[c])return e[c].exports;var Q=e[c]={i:c,l:!1,exports:{}};return n[c].call(Q.exports,Q,Q.exports,t),Q.l=!0,Q.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var Q in n)t.d(c,Q,function(e){return n[e]}.bind(null,Q));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=21)}({0:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return root; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return navigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return menuIconWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return menuIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"l\", function() { return ymap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return selection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"k\", function() { return tempId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"j\", function() { return spoilersWrappers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return scrollUpButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return footerText; });\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar ymap = document.querySelector('#map');\nvar selection = document.querySelector('.selection');\nvar tempId = document.getElementById('temp');\nvar spoilersWrappers = document.querySelectorAll('.spoiler__wrapper');\nvar scrollUpButton = document.querySelector('.scroll-up');\nvar footer = document.querySelector('.footer__text');\nvar footerText = 'Quarta. Все права защищены';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIl0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwieW1hcCIsInNlbGVjdGlvbiIsInRlbXBJZCIsImdldEVsZW1lbnRCeUlkIiwic3BvaWxlcnNXcmFwcGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzY3JvbGxVcEJ1dHRvbiIsImZvb3RlciIsImZvb3RlclRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0UsYUFBTCxDQUFtQixPQUFuQixDQUFiO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCxJQUFJLENBQUNELGFBQUwsQ0FBbUIscUJBQW5CLENBQW5CO0FBQ0EsSUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXhCO0FBQ0EsSUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxJQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTU0sU0FBUyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNTyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUdWLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXpCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBdkI7QUFDQSxJQUFNWSxNQUFNLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFmO0FBQ0EsSUFBTWEsVUFBVSxHQUFHLDRCQUFuQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290Jyk7XHJcbmNvbnN0IHBhZ2UgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbmNvbnN0IG5hdmlnYXRpb24gPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdmlnYXRpb24nKTtcclxuY29uc3QgbWVudUljb25XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbi13cmFwcGVyJyk7XHJcbmNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xyXG5jb25zdCB5bWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpO1xyXG5jb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uJyk7XHJcbmNvbnN0IHRlbXBJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJyk7XHJcbmNvbnN0IHNwb2lsZXJzV3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BvaWxlcl9fd3JhcHBlcicpO1xyXG5jb25zdCBzY3JvbGxVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtdXAnKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fdGV4dCcpO1xyXG5jb25zdCBmb290ZXJUZXh0ID0gJ1F1YXJ0YS4g0JLRgdC1wqDQv9GA0LDQstCwwqDQt9Cw0YnQuNGJ0LXQvdGLJztcclxuXHJcblxyXG5leHBvcnQgeyByb290LCBwYWdlLCBuYXZpZ2F0aW9uLCBtZW51SWNvbldyYXBwZXIsIG1lbnVJY29uLCB5bWFwLCBzZWxlY3Rpb24sIHRlbXBJZCwgc3BvaWxlcnNXcmFwcGVycywgc2Nyb2xsVXBCdXR0b24sIGZvb3RlciwgZm9vdGVyVGV4dCB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")},1:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header(menuIconWrapper, menuIcon, navigation, page, root) {\n    _classCallCheck(this, Header);\n\n    this.menuIconWrapper = menuIconWrapper;\n    this.menuIcon = menuIcon;\n    this.navigation = navigation;\n    this.page = page;\n    this.root = root;\n  }\n\n  _createClass(Header, [{\n    key: \"_menuOpened\",\n    value: function _menuOpened() {\n      var menuState = this.menuIconWrapper.querySelector('.menu-icon__active');\n\n      if (menuState === this.menuIcon) {\n        return true;\n      } else return false;\n    }\n  }, {\n    key: \"_openMenu\",\n    value: function _openMenu() {\n      this.menuIcon.classList.add('menu-icon__active');\n      this.navigation.classList.add('header__navigation_opened');\n      this.page.classList.add('background_black');\n      this.root.classList.add('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Закрыть меню';\n    }\n  }, {\n    key: \"_closeMenu\",\n    value: function _closeMenu() {\n      this.menuIcon.classList.remove('menu-icon__active');\n      this.navigation.classList.remove('header__navigation_opened');\n      this.page.classList.remove('background_black');\n      this.root.classList.remove('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Открыть меню';\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.menuIconWrapper.addEventListener('click', function () {\n        if (!_this._menuOpened()) {\n          _this._openMenu();\n        } else _this._closeMenu();\n      });\n      this.page.addEventListener('click', function (event) {\n        if (event.target === _this.page && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n      this.page.addEventListener('keydown', function (event) {\n        if (event.keyCode === 27 && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n    }\n  }]);\n\n  return Header;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanM/NmMxZCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJtZW51SWNvbldyYXBwZXIiLCJtZW51SWNvbiIsIm5hdmlnYXRpb24iLCJwYWdlIiwicm9vdCIsIm1lbnVTdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcmlhTGFiZWwiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiX21lbnVPcGVuZWQiLCJfb3Blbk1lbnUiLCJfY2xvc2VNZW51IiwiZXZlbnQiLCJ0YXJnZXQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxNO0FBQ25CLGtCQUFZQyxlQUFaLEVBQTZCQyxRQUE3QixFQUF1Q0MsVUFBdkMsRUFBbURDLElBQW5ELEVBQXlEQyxJQUF6RCxFQUErRDtBQUFBOztBQUM3RCxTQUFLSixlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztXQUVELHVCQUFjO0FBQ1osVUFBSUMsU0FBUyxHQUFHLEtBQUtMLGVBQUwsQ0FBcUJNLGFBQXJCLENBQW1DLG9CQUFuQyxDQUFoQjs7QUFDQSxVQUFJRCxTQUFTLEtBQUssS0FBS0osUUFBdkIsRUFBaUM7QUFDL0IsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPLE9BQU8sS0FBUDtBQUNSOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUtBLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsbUJBQTVCO0FBQ0EsV0FBS04sVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBLFdBQUtMLElBQUwsQ0FBVUksU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isa0JBQXhCO0FBQ0EsV0FBS0osSUFBTCxDQUFVRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixpQkFBeEI7QUFDQSxXQUFLUixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtSLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsbUJBQS9CO0FBQ0EsV0FBS1IsVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLDJCQUFqQztBQUNBLFdBQUtQLElBQUwsQ0FBVUksU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsa0JBQTNCO0FBQ0EsV0FBS04sSUFBTCxDQUFVRyxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixpQkFBM0I7QUFDQSxXQUFLVixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS1QsZUFBTCxDQUFxQlcsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkQsWUFBSSxDQUFDLEtBQUksQ0FBQ0MsV0FBTCxFQUFMLEVBQXlCO0FBQ3ZCLGVBQUksQ0FBQ0MsU0FBTDtBQUNELFNBRkQsTUFFTyxLQUFJLENBQUNDLFVBQUw7QUFDUixPQUpEO0FBTUEsV0FBS1gsSUFBTCxDQUFVUSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDSSxLQUFELEVBQVc7QUFDN0MsWUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLEtBQUksQ0FBQ2IsSUFBdEIsSUFBOEIsS0FBSSxDQUFDUyxXQUFMLEVBQWxDLEVBQXNEO0FBQ3BELGVBQUksQ0FBQ0UsVUFBTDtBQUNEO0FBQ0YsT0FKRDtBQU1BLFdBQUtYLElBQUwsQ0FBVVEsZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0MsVUFBQ0ksS0FBRCxFQUFXO0FBQy9DLFlBQUlBLEtBQUssQ0FBQ0UsT0FBTixLQUFrQixFQUFsQixJQUF3QixLQUFJLENBQUNMLFdBQUwsRUFBNUIsRUFBZ0Q7QUFDOUMsZUFBSSxDQUFDRSxVQUFMO0FBQ0Q7QUFDRixPQUpEO0FBS0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgbmF2aWdhdGlvbiwgcGFnZSwgcm9vdCkge1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIgPSBtZW51SWNvbldyYXBwZXI7XHJcbiAgICB0aGlzLm1lbnVJY29uID0gbWVudUljb247XHJcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xyXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgfVxyXG5cclxuICBfbWVudU9wZW5lZCgpIHtcclxuICAgIGxldCBtZW51U3RhdGUgPSB0aGlzLm1lbnVJY29uV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIGlmIChtZW51U3RhdGUgPT09IHRoaXMubWVudUljb24pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX29wZW5NZW51KCkge1xyXG4gICAgdGhpcy5tZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2aWdhdGlvbl9vcGVuZWQnKTtcclxuICAgIHRoaXMucGFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlTWVudSgpIHtcclxuICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgICB0aGlzLnBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZF9ibGFjaycpO1xyXG4gICAgdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIuYXJpYUxhYmVsID0gJ9Ce0YLQutGA0YvRgtGMINC80LXQvdGOJztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9vcGVuTWVudSgpO1xyXG4gICAgICB9IGVsc2UgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLnBhZ2UgJiYgdGhpcy5fbWVudU9wZW5lZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyAmJiB0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9jbG9zZU1lbnUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")},2:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Map = /*#__PURE__*/function () {\n  function Map(ymap, classPrompt) {\n    _classCallCheck(this, Map);\n\n    this.ymap = ymap;\n    this.classPrompt = classPrompt;\n  }\n\n  _createClass(Map, [{\n    key: "setEventListener",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.ymap.addEventListener(\'touchmove\', function (event) {\n        if (_this.ymap.contains(event.target) && event.targetTouches.length < 2) {\n          _this.ymap.classList.add(_this.classPrompt);\n        }\n      }, {\n        passive: true\n      });\n      this.ymap.addEventListener(\'touchend\', function (event) {\n        if (_this.ymap.contains(event.target)) {\n          _this.ymap.classList.remove(_this.classPrompt);\n        }\n      });\n    }\n  }]);\n\n  return Map;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9NYXAuanM/MGRjOSJdLCJuYW1lcyI6WyJNYXAiLCJ5bWFwIiwiY2xhc3NQcm9tcHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsInRhcmdldFRvdWNoZXMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXNzaXZlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxHO0FBQ25CLGVBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS0QsSUFBTCxDQUFVRSxnQkFBVixDQUEyQixXQUEzQixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDakQsWUFBSSxLQUFJLENBQUNILElBQUwsQ0FBVUksUUFBVixDQUFtQkQsS0FBSyxDQUFDRSxNQUF6QixLQUFxQ0YsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFwQixHQUE2QixDQUF0RSxFQUEwRTtBQUN4RSxlQUFJLENBQUNQLElBQUwsQ0FBVVEsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsS0FBSSxDQUFDUixXQUE3QjtBQUNEO0FBQ0YsT0FKRCxFQUlHO0FBQUVTLGVBQU8sRUFBRTtBQUFYLE9BSkg7QUFNQSxXQUFLVixJQUFMLENBQVVFLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFVBQUNDLEtBQUQsRUFBVztBQUNoRCxZQUFJLEtBQUksQ0FBQ0gsSUFBTCxDQUFVSSxRQUFWLENBQW1CRCxLQUFLLENBQUNFLE1BQXpCLENBQUosRUFBc0M7QUFDcEMsZUFBSSxDQUFDTCxJQUFMLENBQVVRLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLEtBQUksQ0FBQ1YsV0FBaEM7QUFDRDtBQUNGLE9BSkQ7QUFLRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcclxuICBjb25zdHJ1Y3Rvcih5bWFwLCBjbGFzc1Byb21wdCkge1xyXG4gICAgdGhpcy55bWFwID0geW1hcDtcclxuICAgIHRoaXMuY2xhc3NQcm9tcHQgPSBjbGFzc1Byb21wdDtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLnltYXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy55bWFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')},21:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_budget_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);\n/* harmony import */ var _pages_budget_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_budget_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);\n\n\n\n\n\nvar header = new _components_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* menuIconWrapper */ "d"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* menuIcon */ "c"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* navigation */ "e"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* page */ "f"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* root */ "g"]);\nvar map = new _components_Map_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* ymap */ "l"], \'contacts__map_cover\');\nvar footer = new _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* footer */ "a"], _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__[/* footerText */ "b"]);\nheader.setEventListener();\nmap.setEventListener();\nfooter.setContent();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVkZ2V0LmpzPzA1MzEiXSwibmFtZXMiOlsiaGVhZGVyIiwiSGVhZGVyIiwiY29uc3RhbnRzIiwibWFwIiwiTWFwIiwiZm9vdGVyIiwiRm9vdGVyIiwic2V0RXZlbnRMaXN0ZW5lciIsInNldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxJQUFJQyxxRUFBSixDQUFXQywrRUFBWCxFQUFzQ0Esd0VBQXRDLEVBQTBEQSwwRUFBMUQsRUFBZ0ZBLG9FQUFoRixFQUFnR0Esb0VBQWhHLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsa0VBQUosQ0FBUUYsb0VBQVIsRUFBd0IscUJBQXhCLENBQVo7QUFDQSxJQUFNRyxNQUFNLEdBQUcsSUFBSUMscUVBQUosQ0FBV0osc0VBQVgsRUFBNkJBLDBFQUE3QixDQUFmO0FBRUFGLE1BQU0sQ0FBQ08sZ0JBQVA7QUFDQUosR0FBRyxDQUFDSSxnQkFBSjtBQUNBRixNQUFNLENBQUNHLFVBQVAiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3BhZ2VzL2J1ZGdldC5jc3MnO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vanMvY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci5qcyc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9jb21wb25lbnRzL01hcC5qcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci5qcyc7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKGNvbnN0YW50cy5tZW51SWNvbldyYXBwZXIsIGNvbnN0YW50cy5tZW51SWNvbiwgY29uc3RhbnRzLm5hdmlnYXRpb24sIGNvbnN0YW50cy5wYWdlLCBjb25zdGFudHMucm9vdCk7XHJcbmNvbnN0IG1hcCA9IG5ldyBNYXAoY29uc3RhbnRzLnltYXAsICdjb250YWN0c19fbWFwX2NvdmVyJyk7XHJcbmNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoY29uc3RhbnRzLmZvb3RlciwgY29uc3RhbnRzLmZvb3RlclRleHQpO1xyXG5cclxuaGVhZGVyLnNldEV2ZW50TGlzdGVuZXIoKTtcclxubWFwLnNldEV2ZW50TGlzdGVuZXIoKTtcclxuZm9vdGVyLnNldENvbnRlbnQoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n')},22:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYnVkZ2V0LmNzcz8yNmRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n")},3:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Footer = /*#__PURE__*/function () {\n  function Footer(footer, text) {\n    _classCallCheck(this, Footer);\n\n    this.footer = footer;\n    this.text = text;\n  }\n\n  _createClass(Footer, [{\n    key: "setContent",\n    value: function setContent() {\n      this.footer.textContent = "\\xA9npm 1992-".concat(this._gettingYear(), " ").concat(this.text);\n    }\n  }, {\n    key: "_gettingYear",\n    value: function _gettingYear() {\n      var year = new Date().getFullYear();\n\n      if (year >= 2021) {\n        return year;\n      } else return 2021;\n    }\n  }]);\n\n  return Footer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb290ZXIuanM/ZjkwMiJdLCJuYW1lcyI6WyJGb290ZXIiLCJmb290ZXIiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJfZ2V0dGluZ1llYXIiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxNO0FBQ25CLGtCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQjtBQUFBOztBQUN4QixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztXQUVELHNCQUFhO0FBQ1gsV0FBS0QsTUFBTCxDQUFZRSxXQUFaLDBCQUF3QyxLQUFLQyxZQUFMLEVBQXhDLGNBQStELEtBQUtGLElBQXBFO0FBQ0Q7OztXQUVELHdCQUFlO0FBQ2IsVUFBSUcsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFYOztBQUNBLFVBQUlGLElBQUksSUFBSSxJQUFaLEVBQW1CO0FBQ2pCLGVBQU9BLElBQVA7QUFDRCxPQUZELE1BR0ssT0FBTyxJQUFQO0FBQ04iLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XHJcbiAgY29uc3RydWN0b3IoZm9vdGVyLCB0ZXh0KSB7XHJcbiAgICB0aGlzLmZvb3RlciA9IGZvb3RlcjtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50KCkge1xyXG4gICAgdGhpcy5mb290ZXIudGV4dENvbnRlbnQgPSAoYMKpbnBtIDE5OTItJHt0aGlzLl9nZXR0aW5nWWVhcigpfSAke3RoaXMudGV4dH1gKTtcclxuICB9XHJcblxyXG4gIF9nZXR0aW5nWWVhcigpIHtcclxuICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgaWYgKHllYXIgPj0gMjAyMSApIHtcclxuICAgICAgcmV0dXJuIHllYXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiAyMDIxO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n')}});