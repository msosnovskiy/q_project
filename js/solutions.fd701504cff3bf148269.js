!function(n){var Q={};function t(e){if(Q[e])return Q[e].exports;var s=Q[e]={i:e,l:!1,exports:{}};return n[e].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=n,t.c=Q,t.d=function(n,Q,e){t.o(n,Q)||Object.defineProperty(n,Q,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,Q){if(1&Q&&(n=t(n)),8&Q)return n;if(4&Q&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&Q&&"string"!=typeof n)for(var s in n)t.d(e,s,function(Q){return n[Q]}.bind(null,s));return e},t.n=function(n){var Q=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(Q,"a",Q),Q},t.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},t.p="",t(t.s=7)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return root; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return navigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return menuIconWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return menuIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return ymap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return selection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"j\", function() { return selectionLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"l\", function() { return tempId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"k\", function() { return spoilersWrappers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return scrollUpButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return footerText; });\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar ymap = document.querySelector('#map');\nvar selection = document.querySelector('.selection');\nvar selectionLink = document.querySelectorAll('.selection__link');\nvar tempId = document.getElementById('temp');\nvar spoilersWrappers = document.querySelectorAll('.spoiler__wrapper');\nvar scrollUpButton = document.querySelector('.scroll-up');\nvar footer = document.querySelector('.footer__text');\nvar footerText = 'Quarta. Все права защищены';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIl0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwieW1hcCIsInNlbGVjdGlvbiIsInNlbGVjdGlvbkxpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGVtcElkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzcG9pbGVyc1dyYXBwZXJzIiwic2Nyb2xsVXBCdXR0b24iLCJmb290ZXIiLCJmb290ZXJUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0UsYUFBTCxDQUFtQixPQUFuQixDQUFiO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCxJQUFJLENBQUNELGFBQUwsQ0FBbUIscUJBQW5CLENBQW5CO0FBQ0EsSUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXhCO0FBQ0EsSUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxJQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTU0sU0FBUyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNTyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQXRCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHVixRQUFRLENBQUNXLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZjtBQUNBLElBQU1DLGdCQUFnQixHQUFHWixRQUFRLENBQUNTLGdCQUFULENBQTBCLG1CQUExQixDQUF6QjtBQUNBLElBQU1JLGNBQWMsR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXZCO0FBQ0EsSUFBTWEsTUFBTSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZjtBQUNBLElBQU1jLFVBQVUsR0FBRyw0QkFBbkIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vdCcpO1xyXG5jb25zdCBwYWdlID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xyXG5jb25zdCBuYXZpZ2F0aW9uID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZpZ2F0aW9uJyk7XHJcbmNvbnN0IG1lbnVJY29uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24td3JhcHBlcicpO1xyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcclxuY29uc3QgeW1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKTtcclxuY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbicpO1xyXG5jb25zdCBzZWxlY3Rpb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGlvbl9fbGluaycpO1xyXG5jb25zdCB0ZW1wSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xyXG5jb25zdCBzcG9pbGVyc1dyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwb2lsZXJfX3dyYXBwZXInKTtcclxuY29uc3Qgc2Nyb2xsVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXVwJyk7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3RleHQnKTtcclxuY29uc3QgZm9vdGVyVGV4dCA9ICdRdWFydGEuINCS0YHQtcKg0L/RgNCw0LLQsMKg0LfQsNGJ0LjRidC10L3Riyc7XHJcblxyXG5cclxuZXhwb3J0IHsgcm9vdCwgcGFnZSwgbmF2aWdhdGlvbiwgbWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgeW1hcCwgc2VsZWN0aW9uLCBzZWxlY3Rpb25MaW5rLCB0ZW1wSWQsIHNwb2lsZXJzV3JhcHBlcnMsIHNjcm9sbFVwQnV0dG9uLCBmb290ZXIsIGZvb3RlclRleHQgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header(menuIconWrapper, menuIcon, navigation, page, root) {\n    _classCallCheck(this, Header);\n\n    this.menuIconWrapper = menuIconWrapper;\n    this.menuIcon = menuIcon;\n    this.navigation = navigation;\n    this.page = page;\n    this.root = root;\n  }\n\n  _createClass(Header, [{\n    key: \"_menuOpened\",\n    value: function _menuOpened() {\n      var menuState = this.menuIconWrapper.querySelector('.menu-icon__active');\n\n      if (menuState === this.menuIcon) {\n        return true;\n      } else return false;\n    }\n  }, {\n    key: \"_openMenu\",\n    value: function _openMenu() {\n      this.menuIcon.classList.add('menu-icon__active');\n      this.navigation.classList.add('header__navigation_opened');\n      this.page.classList.add('background_black');\n      this.root.classList.add('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Закрыть меню';\n    }\n  }, {\n    key: \"_closeMenu\",\n    value: function _closeMenu() {\n      this.menuIcon.classList.remove('menu-icon__active');\n      this.navigation.classList.remove('header__navigation_opened');\n      this.page.classList.remove('background_black');\n      this.root.classList.remove('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Открыть меню';\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.menuIconWrapper.addEventListener('click', function () {\n        if (!_this._menuOpened()) {\n          _this._openMenu();\n        } else _this._closeMenu();\n      });\n      this.page.addEventListener('click', function (event) {\n        if (event.target === _this.page && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n      this.page.addEventListener('keydown', function (event) {\n        if (event.keyCode === 27 && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n    }\n  }]);\n\n  return Header;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanM/NmMxZCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJtZW51SWNvbldyYXBwZXIiLCJtZW51SWNvbiIsIm5hdmlnYXRpb24iLCJwYWdlIiwicm9vdCIsIm1lbnVTdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcmlhTGFiZWwiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiX21lbnVPcGVuZWQiLCJfb3Blbk1lbnUiLCJfY2xvc2VNZW51IiwiZXZlbnQiLCJ0YXJnZXQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxNO0FBQ25CLGtCQUFZQyxlQUFaLEVBQTZCQyxRQUE3QixFQUF1Q0MsVUFBdkMsRUFBbURDLElBQW5ELEVBQXlEQyxJQUF6RCxFQUErRDtBQUFBOztBQUM3RCxTQUFLSixlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztXQUVELHVCQUFjO0FBQ1osVUFBSUMsU0FBUyxHQUFHLEtBQUtMLGVBQUwsQ0FBcUJNLGFBQXJCLENBQW1DLG9CQUFuQyxDQUFoQjs7QUFDQSxVQUFJRCxTQUFTLEtBQUssS0FBS0osUUFBdkIsRUFBaUM7QUFDL0IsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPLE9BQU8sS0FBUDtBQUNSOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUtBLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsbUJBQTVCO0FBQ0EsV0FBS04sVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBLFdBQUtMLElBQUwsQ0FBVUksU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isa0JBQXhCO0FBQ0EsV0FBS0osSUFBTCxDQUFVRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixpQkFBeEI7QUFDQSxXQUFLUixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtSLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsbUJBQS9CO0FBQ0EsV0FBS1IsVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLDJCQUFqQztBQUNBLFdBQUtQLElBQUwsQ0FBVUksU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsa0JBQTNCO0FBQ0EsV0FBS04sSUFBTCxDQUFVRyxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixpQkFBM0I7QUFDQSxXQUFLVixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS1QsZUFBTCxDQUFxQlcsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkQsWUFBSSxDQUFDLEtBQUksQ0FBQ0MsV0FBTCxFQUFMLEVBQXlCO0FBQ3ZCLGVBQUksQ0FBQ0MsU0FBTDtBQUNELFNBRkQsTUFFTyxLQUFJLENBQUNDLFVBQUw7QUFDUixPQUpEO0FBTUEsV0FBS1gsSUFBTCxDQUFVUSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDSSxLQUFELEVBQVc7QUFDN0MsWUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLEtBQUksQ0FBQ2IsSUFBdEIsSUFBOEIsS0FBSSxDQUFDUyxXQUFMLEVBQWxDLEVBQXNEO0FBQ3BELGVBQUksQ0FBQ0UsVUFBTDtBQUNEO0FBQ0YsT0FKRDtBQU1BLFdBQUtYLElBQUwsQ0FBVVEsZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0MsVUFBQ0ksS0FBRCxFQUFXO0FBQy9DLFlBQUlBLEtBQUssQ0FBQ0UsT0FBTixLQUFrQixFQUFsQixJQUF3QixLQUFJLENBQUNMLFdBQUwsRUFBNUIsRUFBZ0Q7QUFDOUMsZUFBSSxDQUFDRSxVQUFMO0FBQ0Q7QUFDRixPQUpEO0FBS0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgbmF2aWdhdGlvbiwgcGFnZSwgcm9vdCkge1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIgPSBtZW51SWNvbldyYXBwZXI7XHJcbiAgICB0aGlzLm1lbnVJY29uID0gbWVudUljb247XHJcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xyXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgfVxyXG5cclxuICBfbWVudU9wZW5lZCgpIHtcclxuICAgIGxldCBtZW51U3RhdGUgPSB0aGlzLm1lbnVJY29uV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIGlmIChtZW51U3RhdGUgPT09IHRoaXMubWVudUljb24pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX29wZW5NZW51KCkge1xyXG4gICAgdGhpcy5tZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2aWdhdGlvbl9vcGVuZWQnKTtcclxuICAgIHRoaXMucGFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlTWVudSgpIHtcclxuICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgICB0aGlzLnBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZF9ibGFjaycpO1xyXG4gICAgdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIuYXJpYUxhYmVsID0gJ9Ce0YLQutGA0YvRgtGMINC80LXQvdGOJztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9vcGVuTWVudSgpO1xyXG4gICAgICB9IGVsc2UgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLnBhZ2UgJiYgdGhpcy5fbWVudU9wZW5lZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyAmJiB0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9jbG9zZU1lbnUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Map = /*#__PURE__*/function () {\n  function Map(ymap, classPrompt) {\n    _classCallCheck(this, Map);\n\n    this.ymap = ymap;\n    this.classPrompt = classPrompt;\n  }\n\n  _createClass(Map, [{\n    key: "setEventListener",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.ymap.addEventListener(\'touchmove\', function (event) {\n        if (_this.ymap.contains(event.target) && event.targetTouches.length < 2) {\n          _this.ymap.classList.add(_this.classPrompt);\n        }\n      }, {\n        passive: true\n      });\n      this.ymap.addEventListener(\'touchend\', function (event) {\n        if (_this.ymap.contains(event.target)) {\n          _this.ymap.classList.remove(_this.classPrompt);\n        }\n      });\n    }\n  }]);\n\n  return Map;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9NYXAuanM/MGRjOSJdLCJuYW1lcyI6WyJNYXAiLCJ5bWFwIiwiY2xhc3NQcm9tcHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsInRhcmdldFRvdWNoZXMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXNzaXZlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxHO0FBQ25CLGVBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS0QsSUFBTCxDQUFVRSxnQkFBVixDQUEyQixXQUEzQixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDakQsWUFBSSxLQUFJLENBQUNILElBQUwsQ0FBVUksUUFBVixDQUFtQkQsS0FBSyxDQUFDRSxNQUF6QixLQUFxQ0YsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFwQixHQUE2QixDQUF0RSxFQUEwRTtBQUN4RSxlQUFJLENBQUNQLElBQUwsQ0FBVVEsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsS0FBSSxDQUFDUixXQUE3QjtBQUNEO0FBQ0YsT0FKRCxFQUlHO0FBQUVTLGVBQU8sRUFBRTtBQUFYLE9BSkg7QUFNQSxXQUFLVixJQUFMLENBQVVFLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFVBQUNDLEtBQUQsRUFBVztBQUNoRCxZQUFJLEtBQUksQ0FBQ0gsSUFBTCxDQUFVSSxRQUFWLENBQW1CRCxLQUFLLENBQUNFLE1BQXpCLENBQUosRUFBc0M7QUFDcEMsZUFBSSxDQUFDTCxJQUFMLENBQVVRLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLEtBQUksQ0FBQ1YsV0FBaEM7QUFDRDtBQUNGLE9BSkQ7QUFLRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcclxuICBjb25zdHJ1Y3Rvcih5bWFwLCBjbGFzc1Byb21wdCkge1xyXG4gICAgdGhpcy55bWFwID0geW1hcDtcclxuICAgIHRoaXMuY2xhc3NQcm9tcHQgPSBjbGFzc1Byb21wdDtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLnltYXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy55bWFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Footer = /*#__PURE__*/function () {\n  function Footer(footer, text) {\n    _classCallCheck(this, Footer);\n\n    this.footer = footer;\n    this.text = text;\n  }\n\n  _createClass(Footer, [{\n    key: "setContent",\n    value: function setContent() {\n      this.footer.textContent = "1992-".concat(this._getСurrentYear(), " ").concat(this.text);\n    }\n  }, {\n    key: "_get\\u0421urrentYear",\n    value: function _getСurrentYear() {\n      var year = new Date().getFullYear();\n\n      if (year >= 2021) {\n        return year;\n      } else return 2021;\n    }\n  }]);\n\n  return Footer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb290ZXIuanM/ZjkwMiJdLCJuYW1lcyI6WyJGb290ZXIiLCJmb290ZXIiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJfZ2V00KF1cnJlbnRZZWFyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFxQkEsTTtBQUNuQixrQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7V0FFRCxzQkFBYTtBQUNYLFdBQUtELE1BQUwsQ0FBWUUsV0FBWixrQkFBbUMsS0FBS0MsZUFBTCxFQUFuQyxjQUE2RCxLQUFLRixJQUFsRTtBQUNEOzs7V0FFRCwyQkFBa0I7QUFDaEIsVUFBSUcsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFYOztBQUNBLFVBQUlGLElBQUksSUFBSSxJQUFaLEVBQW1CO0FBQ2pCLGVBQU9BLElBQVA7QUFDRCxPQUZELE1BR0ssT0FBTyxJQUFQO0FBQ04iLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XHJcbiAgY29uc3RydWN0b3IoZm9vdGVyLCB0ZXh0KSB7XHJcbiAgICB0aGlzLmZvb3RlciA9IGZvb3RlcjtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50KCkge1xyXG4gICAgdGhpcy5mb290ZXIudGV4dENvbnRlbnQgPSAoYDE5OTItJHt0aGlzLl9nZXTQoXVycmVudFllYXIoKX0gJHt0aGlzLnRleHR9YCk7XHJcbiAgfVxyXG5cclxuICBfZ2V00KF1cnJlbnRZZWFyKCkge1xyXG4gICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBpZiAoeWVhciA+PSAyMDIxICkge1xyXG4gICAgICByZXR1cm4geWVhcjtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIDIwMjE7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Selections; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Selections = /*#__PURE__*/function () {\n  function Selections(container, tempId, block, blockAction) {\n    _classCallCheck(this, Selections);\n\n    this.container = container;\n    this.tempId = tempId;\n    this.block = block;\n    this.blockAction = blockAction;\n    this.selectionList = this.container.querySelector('.selection__list');\n    this.anchors = this.selectionList.querySelectorAll('a[href*=\"#\"]');\n  } // получение Id из URL\n\n\n  _createClass(Selections, [{\n    key: \"getUrlId\",\n    value: function getUrlId() {\n      return window.location.hash.split('#')[1];\n    } // получение Id из ссылки\n\n  }, {\n    key: \"_getLinkHref\",\n    value: function _getLinkHref(element) {\n      return element.getAttribute('href').substr(1);\n    } // переключение блоков\n\n  }, {\n    key: \"_switchBlocks\",\n    value: function _switchBlocks(element) {\n      if (element) {\n        var currentBlock = this.container.querySelector('.selection__content_visible');\n        currentBlock.classList.remove('selection__content_visible');\n        return element.classList.add('selection__content_visible');\n      } else {\n        return;\n      }\n    } // переключение кнопок\n\n  }, {\n    key: \"_switchButton\",\n    value: function _switchButton(element) {\n      var currentButton = this.container.querySelector('.selection__link_active');\n      currentButton.classList.remove('selection__link_active');\n      element.classList.add('selection__link_active');\n    } // переключение блоков при переходе\n\n  }, {\n    key: \"openSelectedBlocks\",\n    value: function openSelectedBlocks(event) {\n      // по якорной ссылке\n      if (this.getUrlId() != null && event === undefined) {\n        this.tempId.id = this.getUrlId();\n        var dataId = this.tempId.id + 'Data';\n\n        this._switchBlocks(this.container.querySelector(\"#\".concat(dataId)));\n\n        for (var i = 0; i < this.anchors.length; i++) {\n          if (this._getLinkHref(this.anchors[i]) === this.getUrlId()) {\n            this._switchButton(this.anchors[i]);\n          }\n        }\n      } //внутри блока\n      else if (event != undefined) {\n          this.tempId.id = this._getLinkHref(event);\n\n          this._switchBlocks(document.getElementById(this._getLinkHref(event) + 'Data'));\n\n          this._switchButton(event);\n        } else return;\n    } //перезапись temp Id для блока по умолчанию\n\n  }, {\n    key: \"rewritingDefaultArchorId\",\n    value: function rewritingDefaultArchorId() {\n      var currentBlock = this.container.querySelector('.selection__link_active');\n      this.tempId.id = this._getLinkHref(currentBlock);\n      return this.tempId.id;\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      var _loop = function _loop(i) {\n        _this.anchors[i].addEventListener('click', function (event) {\n          event.preventDefault();\n\n          var blockID = _this._getLinkHref(_this.anchors[i]);\n\n          window.location.hash = blockID;\n\n          _this.openSelectedBlocks(event.target); // если это блок новостей - запустить рендер из БД\n\n\n          if (_this.block === 'news') {\n            _this.blockAction.render();\n          }\n        });\n      };\n\n      for (var i = 0; i < this.anchors.length; i++) {\n        _loop(i);\n      }\n    }\n  }]);\n\n  return Selections;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9TZWxlY3Rpb25zLmpzP2RiZGMiXSwibmFtZXMiOlsiU2VsZWN0aW9ucyIsImNvbnRhaW5lciIsInRlbXBJZCIsImJsb2NrIiwiYmxvY2tBY3Rpb24iLCJzZWxlY3Rpb25MaXN0IiwicXVlcnlTZWxlY3RvciIsImFuY2hvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwic3Vic3RyIiwiY3VycmVudEJsb2NrIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY3VycmVudEJ1dHRvbiIsImV2ZW50IiwiZ2V0VXJsSWQiLCJ1bmRlZmluZWQiLCJpZCIsImRhdGFJZCIsIl9zd2l0Y2hCbG9ja3MiLCJpIiwibGVuZ3RoIiwiX2dldExpbmtIcmVmIiwiX3N3aXRjaEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJibG9ja0lEIiwib3BlblNlbGVjdGVkQmxvY2tzIiwidGFyZ2V0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxVO0FBQ25CLHNCQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQkMsS0FBL0IsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQUE7O0FBQ2pELFNBQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtKLFNBQUwsQ0FBZUssYUFBZixDQUE2QixrQkFBN0IsQ0FBckI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0YsYUFBTCxDQUFtQkcsZ0JBQW5CLENBQW9DLGNBQXBDLENBQWY7QUFDRCxHLENBRUQ7Ozs7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QUksQ0FBQ04sWUFBTCxDQUFrQixLQUFJLENBQUN0QixPQUFMLENBQWFvQixDQUFiLENBQWxCLENBQWhCOztBQUNBbEIsZ0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJ3QixPQUF2Qjs7QUFDQSxlQUFJLENBQUNDLGtCQUFMLENBQXdCZixLQUFLLENBQUNnQixNQUE5QixFQUptRCxDQUtuRDs7O0FBQ0EsY0FBSSxLQUFJLENBQUNsQyxLQUFMLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsaUJBQUksQ0FBQ0MsV0FBTCxDQUFpQmtDLE1BQWpCO0FBQ0Q7QUFDRixTQVREO0FBRmU7O0FBQ2pCLFdBQUssSUFBSVgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLcEIsT0FBTCxDQUFhcUIsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7QUFBQSxjQUFyQ0EsQ0FBcUM7QUFXN0M7QUFDRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9ucyB7XHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCB0ZW1wSWQsIGJsb2NrLCBibG9ja0FjdGlvbikge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLnRlbXBJZCA9IHRlbXBJZDtcclxuICAgIHRoaXMuYmxvY2sgPSBibG9jaztcclxuICAgIHRoaXMuYmxvY2tBY3Rpb24gPSBibG9ja0FjdGlvbjtcclxuICAgIHRoaXMuc2VsZWN0aW9uTGlzdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2xpc3QnKTtcclxuICAgIHRoaXMuYW5jaG9ycyA9IHRoaXMuc2VsZWN0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG4gIH1cclxuXHJcbiAgLy8g0L/QvtC70YPRh9C10L3QuNC1IElkINC40LcgVVJMXHJcbiAgZ2V0VXJsSWQoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJyMnKVsxXTtcclxuICB9XHJcblxyXG4gIC8vINC/0L7Qu9GD0YfQtdC90LjQtSBJZCDQuNC3INGB0YHRi9C70LrQuFxyXG4gIF9nZXRMaW5rSHJlZihlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSk7XHJcbiAgfVxyXG5cclxuICAvLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LHQu9C+0LrQvtCyXHJcbiAgX3N3aXRjaEJsb2NrcyhlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX19jb250ZW50X3Zpc2libGUnKTtcclxuICAgICAgY3VycmVudEJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbl9fY29udGVudF92aXNpYmxlJyk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbl9fY29udGVudF92aXNpYmxlJylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LrQvdC+0L/QvtC6XHJcbiAgX3N3aXRjaEJ1dHRvbihlbGVtZW50KSB7XHJcbiAgICBsZXQgY3VycmVudEJ1dHRvbiA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbl9fbGlua19hY3RpdmUnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uX19saW5rX2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgLy8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INCx0LvQvtC60L7QsiDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtVxyXG4gIG9wZW5TZWxlY3RlZEJsb2NrcyhldmVudCkge1xyXG4gICAgLy8g0L/QviDRj9C60L7RgNC90L7QuSDRgdGB0YvQu9C60LVcclxuICAgIGlmICh0aGlzLmdldFVybElkKCkgIT0gbnVsbCAmJiBldmVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGVtcElkLmlkID0gdGhpcy5nZXRVcmxJZCgpO1xyXG4gICAgICBsZXQgZGF0YUlkID0gKHRoaXMudGVtcElkLmlkICsgJ0RhdGEnKTtcclxuICAgICAgdGhpcy5fc3dpdGNoQmxvY2tzKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2RhdGFJZH1gKSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbmNob3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dldExpbmtIcmVmKHRoaXMuYW5jaG9yc1tpXSkgPT09IHRoaXMuZ2V0VXJsSWQoKSkge1xyXG4gICAgICAgICAgdGhpcy5fc3dpdGNoQnV0dG9uKHRoaXMuYW5jaG9yc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9Cy0L3Rg9GC0YDQuCDQsdC70L7QutCwXHJcbiAgICBlbHNlIGlmIChldmVudCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50ZW1wSWQuaWQgPSB0aGlzLl9nZXRMaW5rSHJlZihldmVudCk7XHJcbiAgICAgIHRoaXMuX3N3aXRjaEJsb2Nrcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgodGhpcy5fZ2V0TGlua0hyZWYoZXZlbnQpICsgJ0RhdGEnKSkpO1xyXG4gICAgICB0aGlzLl9zd2l0Y2hCdXR0b24oZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvL9C/0LXRgNC10LfQsNC/0LjRgdGMIHRlbXAgSWQg0LTQu9GPINCx0LvQvtC60LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuICByZXdyaXRpbmdEZWZhdWx0QXJjaG9ySWQoKSB7XHJcbiAgICBsZXQgY3VycmVudEJsb2NrID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbl9fbGlua19hY3RpdmUnKTtcclxuICAgIHRoaXMudGVtcElkLmlkID0gdGhpcy5fZ2V0TGlua0hyZWYoY3VycmVudEJsb2NrKTtcclxuICAgIHJldHVybiB0aGlzLnRlbXBJZC5pZDtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5jaG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmFuY2hvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSUQgPSB0aGlzLl9nZXRMaW5rSHJlZih0aGlzLmFuY2hvcnNbaV0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYmxvY2tJRDtcclxuICAgICAgICB0aGlzLm9wZW5TZWxlY3RlZEJsb2NrcyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgIC8vINC10YHQu9C4INGN0YLQviDQsdC70L7QuiDQvdC+0LLQvtGB0YLQtdC5IC0g0LfQsNC/0YPRgdGC0LjRgtGMINGA0LXQvdC00LXRgCDQuNC3INCR0JRcclxuICAgICAgICBpZiAodGhpcy5ibG9jayA9PT0gJ25ld3MnKSB7XHJcbiAgICAgICAgICB0aGlzLmJsb2NrQWN0aW9uLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n")},,,function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_solutions_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);\n/* harmony import */ var _pages_solutions_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_solutions_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);\n/* harmony import */ var _components_Selections_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);\n\n\n\n\n\n\nvar header = new _components_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* menuIconWrapper */ "d"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* menuIcon */ "c"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* navigation */ "e"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* page */ "f"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* root */ "g"]);\nvar map = new _components_Map_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* ymap */ "m"], \'contacts__map_cover\');\nvar selections = new _components_Selections_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* selection */ "i"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* tempId */ "l"]);\nvar footer = new _components_Footer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* footer */ "a"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* footerText */ "b"]);\nheader.setEventListener();\nmap.setEventListener();\nselections.rewritingDefaultArchorId();\nselections.openSelectedBlocks();\nselections.setEventListener();\nfooter.setContent();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc29sdXRpb25zLmpzPzZlNTIiXSwibmFtZXMiOlsiaGVhZGVyIiwiSGVhZGVyIiwiY29uc3RhbnRzIiwibWFwIiwiTWFwIiwic2VsZWN0aW9ucyIsIlNlbGVjdGlvbnMiLCJmb290ZXIiLCJGb290ZXIiLCJzZXRFdmVudExpc3RlbmVyIiwicmV3cml0aW5nRGVmYXVsdEFyY2hvcklkIiwib3BlblNlbGVjdGVkQmxvY2tzIiwic2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxJQUFJQyxxRUFBSixDQUFXQyxrRkFBWCxFQUFzQ0EsMkVBQXRDLEVBQTBEQSw2RUFBMUQsRUFBZ0ZBLHVFQUFoRixFQUFnR0EsdUVBQWhHLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsa0VBQUosQ0FBUUYsdUVBQVIsRUFBd0IscUJBQXhCLENBQVo7QUFDQSxJQUFNRyxVQUFVLEdBQUcsSUFBSUMseUVBQUosQ0FBZUosNEVBQWYsRUFBb0NBLHlFQUFwQyxDQUFuQjtBQUNBLElBQU1LLE1BQU0sR0FBRyxJQUFJQyxxRUFBSixDQUFXTix5RUFBWCxFQUE2QkEsNkVBQTdCLENBQWY7QUFFQUYsTUFBTSxDQUFDUyxnQkFBUDtBQUNBTixHQUFHLENBQUNNLGdCQUFKO0FBQ0FKLFVBQVUsQ0FBQ0ssd0JBQVg7QUFDQUwsVUFBVSxDQUFDTSxrQkFBWDtBQUNBTixVQUFVLENBQUNJLGdCQUFYO0FBQ0FGLE1BQU0sQ0FBQ0ssVUFBUCIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9wYWdlcy9zb2x1dGlvbnMuY3NzJztcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL2pzL2NvbnN0YW50cy9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIuanMnO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vY29tcG9uZW50cy9NYXAuanMnO1xyXG5pbXBvcnQgU2VsZWN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0aW9ucy5qcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci5qcyc7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKGNvbnN0YW50cy5tZW51SWNvbldyYXBwZXIsIGNvbnN0YW50cy5tZW51SWNvbiwgY29uc3RhbnRzLm5hdmlnYXRpb24sIGNvbnN0YW50cy5wYWdlLCBjb25zdGFudHMucm9vdCk7XHJcbmNvbnN0IG1hcCA9IG5ldyBNYXAoY29uc3RhbnRzLnltYXAsICdjb250YWN0c19fbWFwX2NvdmVyJyk7XHJcbmNvbnN0IHNlbGVjdGlvbnMgPSBuZXcgU2VsZWN0aW9ucyhjb25zdGFudHMuc2VsZWN0aW9uLCBjb25zdGFudHMudGVtcElkKTtcclxuY29uc3QgZm9vdGVyID0gbmV3IEZvb3Rlcihjb25zdGFudHMuZm9vdGVyLCBjb25zdGFudHMuZm9vdGVyVGV4dCk7XHJcblxyXG5oZWFkZXIuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5tYXAuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5zZWxlY3Rpb25zLnJld3JpdGluZ0RlZmF1bHRBcmNob3JJZCgpO1xyXG5zZWxlY3Rpb25zLm9wZW5TZWxlY3RlZEJsb2NrcygpO1xyXG5zZWxlY3Rpb25zLnNldEV2ZW50TGlzdGVuZXIoKTtcclxuZm9vdGVyLnNldENvbnRlbnQoKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n')},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc29sdXRpb25zLmNzcz81N2VjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n")}]);