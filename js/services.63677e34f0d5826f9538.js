!function(n){var Q={};function e(c){if(Q[c])return Q[c].exports;var t=Q[c]={i:c,l:!1,exports:{}};return n[c].call(t.exports,t,t.exports,e),t.l=!0,t.exports}e.m=n,e.c=Q,e.d=function(n,Q,c){e.o(n,Q)||Object.defineProperty(n,Q,{enumerable:!0,get:c})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,Q){if(1&Q&&(n=e(n)),8&Q)return n;if(4&Q&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&Q&&"string"!=typeof n)for(var t in n)e.d(c,t,function(Q){return n[Q]}.bind(null,t));return c},e.n=function(n){var Q=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(Q,"a",Q),Q},e.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},e.p="",e(e.s=11)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return root; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return navigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return menuIconWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return menuIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return ymap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return selection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return tempId; });\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar ymap = document.querySelector('#map');\nvar selection = document.querySelector('.selection');\nvar tempId = document.getElementById('temp');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIl0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwieW1hcCIsInNlbGVjdGlvbiIsInRlbXBJZCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLElBQU1DLElBQUksR0FBR0gsSUFBSSxDQUFDRSxhQUFMLENBQW1CLE9BQW5CLENBQWI7QUFDQSxJQUFNRSxVQUFVLEdBQUdELElBQUksQ0FBQ0QsYUFBTCxDQUFtQixxQkFBbkIsQ0FBbkI7QUFDQSxJQUFNRyxlQUFlLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBeEI7QUFDQSxJQUFNSSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBLElBQU1LLElBQUksR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFFQSxJQUFNTSxTQUFTLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLElBQU1PLE1BQU0sR0FBR1IsUUFBUSxDQUFDUyxjQUFULENBQXdCLE1BQXhCLENBQWYiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vdCcpO1xyXG5jb25zdCBwYWdlID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xyXG5jb25zdCBuYXZpZ2F0aW9uID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZpZ2F0aW9uJyk7XHJcbmNvbnN0IG1lbnVJY29uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24td3JhcHBlcicpO1xyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcclxuY29uc3QgeW1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKTtcclxuXHJcbmNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb24nKTtcclxuY29uc3QgdGVtcElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcclxuXHJcbmV4cG9ydCB7IHJvb3QsIHBhZ2UsIG5hdmlnYXRpb24sIG1lbnVJY29uV3JhcHBlciwgbWVudUljb24sIHltYXAsIHNlbGVjdGlvbiwgdGVtcElkIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header(menuIconWrapper, menuIcon, navigation, page, root) {\n    _classCallCheck(this, Header);\n\n    this.menuIconWrapper = menuIconWrapper;\n    this.menuIcon = menuIcon;\n    this.navigation = navigation;\n    this.page = page;\n    this.root = root;\n  }\n\n  _createClass(Header, [{\n    key: \"_menuOpened\",\n    value: function _menuOpened() {\n      var menuState = this.menuIconWrapper.querySelector('.menu-icon__active');\n\n      if (menuState === this.menuIcon) {\n        return true;\n      } else return false;\n    }\n  }, {\n    key: \"_openMenu\",\n    value: function _openMenu() {\n      this.menuIcon.classList.add('menu-icon__active');\n      this.navigation.classList.add('header__navigation_opened');\n      this.page.classList.add('background_black');\n      this.root.classList.add('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Закрыть меню';\n    }\n  }, {\n    key: \"_closeMenu\",\n    value: function _closeMenu() {\n      this.menuIcon.classList.remove('menu-icon__active');\n      this.navigation.classList.remove('header__navigation_opened');\n      this.page.classList.remove('background_black');\n      this.root.classList.remove('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Открыть меню';\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.menuIconWrapper.addEventListener('click', function () {\n        if (!_this._menuOpened()) {\n          _this._openMenu();\n        } else _this._closeMenu();\n      });\n      this.page.addEventListener('click', function (event) {\n        if (event.target === _this.page && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n      this.page.addEventListener('keydown', function (event) {\n        if (event.keyCode === 27 && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n    }\n  }]);\n\n  return Header;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanM/NmMxZCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJtZW51SWNvbldyYXBwZXIiLCJtZW51SWNvbiIsIm5hdmlnYXRpb24iLCJwYWdlIiwicm9vdCIsIm1lbnVTdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcmlhTGFiZWwiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiX21lbnVPcGVuZWQiLCJfb3Blbk1lbnUiLCJfY2xvc2VNZW51IiwiZXZlbnQiLCJ0YXJnZXQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxNO0FBQ25CLGtCQUFZQyxlQUFaLEVBQTZCQyxRQUE3QixFQUF1Q0MsVUFBdkMsRUFBbURDLElBQW5ELEVBQXlEQyxJQUF6RCxFQUErRDtBQUFBOztBQUM3RCxTQUFLSixlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztXQUVELHVCQUFjO0FBQ1osVUFBSUMsU0FBUyxHQUFHLEtBQUtMLGVBQUwsQ0FBcUJNLGFBQXJCLENBQW1DLG9CQUFuQyxDQUFoQjs7QUFDQSxVQUFJRCxTQUFTLEtBQUssS0FBS0osUUFBdkIsRUFBaUM7QUFDL0IsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPLE9BQU8sS0FBUDtBQUNSOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUtBLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsbUJBQTVCO0FBQ0EsV0FBS04sVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBLFdBQUtMLElBQUwsQ0FBVUksU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isa0JBQXhCO0FBQ0EsV0FBS0osSUFBTCxDQUFVRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixpQkFBeEI7QUFDQSxXQUFLUixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtSLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsbUJBQS9CO0FBQ0EsV0FBS1IsVUFBTCxDQUFnQkssU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLDJCQUFqQztBQUNBLFdBQUtQLElBQUwsQ0FBVUksU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsa0JBQTNCO0FBQ0EsV0FBS04sSUFBTCxDQUFVRyxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixpQkFBM0I7QUFDQSxXQUFLVixlQUFMLENBQXFCUyxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS1QsZUFBTCxDQUFxQlcsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkQsWUFBSSxDQUFDLEtBQUksQ0FBQ0MsV0FBTCxFQUFMLEVBQXlCO0FBQ3ZCLGVBQUksQ0FBQ0MsU0FBTDtBQUNELFNBRkQsTUFFTyxLQUFJLENBQUNDLFVBQUw7QUFDUixPQUpEO0FBTUEsV0FBS1gsSUFBTCxDQUFVUSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDSSxLQUFELEVBQVc7QUFDN0MsWUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLEtBQUksQ0FBQ2IsSUFBdEIsSUFBOEIsS0FBSSxDQUFDUyxXQUFMLEVBQWxDLEVBQXNEO0FBQ3BELGVBQUksQ0FBQ0UsVUFBTDtBQUNEO0FBQ0YsT0FKRDtBQU1BLFdBQUtYLElBQUwsQ0FBVVEsZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0MsVUFBQ0ksS0FBRCxFQUFXO0FBQy9DLFlBQUlBLEtBQUssQ0FBQ0UsT0FBTixLQUFrQixFQUFsQixJQUF3QixLQUFJLENBQUNMLFdBQUwsRUFBNUIsRUFBZ0Q7QUFDOUMsZUFBSSxDQUFDRSxVQUFMO0FBQ0Q7QUFDRixPQUpEO0FBS0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgbmF2aWdhdGlvbiwgcGFnZSwgcm9vdCkge1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIgPSBtZW51SWNvbldyYXBwZXI7XHJcbiAgICB0aGlzLm1lbnVJY29uID0gbWVudUljb247XHJcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xyXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgfVxyXG5cclxuICBfbWVudU9wZW5lZCgpIHtcclxuICAgIGxldCBtZW51U3RhdGUgPSB0aGlzLm1lbnVJY29uV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIGlmIChtZW51U3RhdGUgPT09IHRoaXMubWVudUljb24pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX29wZW5NZW51KCkge1xyXG4gICAgdGhpcy5tZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWljb25fX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2aWdhdGlvbl9vcGVuZWQnKTtcclxuICAgIHRoaXMucGFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kX2JsYWNrJyk7XHJcbiAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hcmlhTGFiZWwgPSAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlTWVudSgpIHtcclxuICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgICB0aGlzLnBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZF9ibGFjaycpO1xyXG4gICAgdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIuYXJpYUxhYmVsID0gJ9Ce0YLQutGA0YvRgtGMINC80LXQvdGOJztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm1lbnVJY29uV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9vcGVuTWVudSgpO1xyXG4gICAgICB9IGVsc2UgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLnBhZ2UgJiYgdGhpcy5fbWVudU9wZW5lZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFnZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyAmJiB0aGlzLl9tZW51T3BlbmVkKCkpIHtcclxuICAgICAgICB0aGlzLl9jbG9zZU1lbnUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Map = /*#__PURE__*/function () {\n  function Map(ymap, classPrompt) {\n    _classCallCheck(this, Map);\n\n    this.ymap = ymap;\n    this.classPrompt = classPrompt;\n  }\n\n  _createClass(Map, [{\n    key: "setEventListener",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.ymap.addEventListener(\'touchmove\', function (event) {\n        if (_this.ymap.contains(event.target) && event.targetTouches.length < 2) {\n          _this.ymap.classList.add(_this.classPrompt);\n        }\n      }, {\n        passive: true\n      });\n      this.ymap.addEventListener(\'touchend\', function (event) {\n        if (_this.ymap.contains(event.target)) {\n          _this.ymap.classList.remove(_this.classPrompt);\n        }\n      });\n    }\n  }]);\n\n  return Map;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9NYXAuanM/MGRjOSJdLCJuYW1lcyI6WyJNYXAiLCJ5bWFwIiwiY2xhc3NQcm9tcHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsInRhcmdldFRvdWNoZXMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXNzaXZlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxHO0FBQ25CLGVBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS0QsSUFBTCxDQUFVRSxnQkFBVixDQUEyQixXQUEzQixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDakQsWUFBSSxLQUFJLENBQUNILElBQUwsQ0FBVUksUUFBVixDQUFtQkQsS0FBSyxDQUFDRSxNQUF6QixLQUFxQ0YsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxNQUFwQixHQUE2QixDQUF0RSxFQUEwRTtBQUN4RSxlQUFJLENBQUNQLElBQUwsQ0FBVVEsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsS0FBSSxDQUFDUixXQUE3QjtBQUNEO0FBQ0YsT0FKRCxFQUlHO0FBQUVTLGVBQU8sRUFBRTtBQUFYLE9BSkg7QUFNQSxXQUFLVixJQUFMLENBQVVFLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFVBQUNDLEtBQUQsRUFBVztBQUNoRCxZQUFJLEtBQUksQ0FBQ0gsSUFBTCxDQUFVSSxRQUFWLENBQW1CRCxLQUFLLENBQUNFLE1BQXpCLENBQUosRUFBc0M7QUFDcEMsZUFBSSxDQUFDTCxJQUFMLENBQVVRLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLEtBQUksQ0FBQ1YsV0FBaEM7QUFDRDtBQUNGLE9BSkQ7QUFLRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcclxuICBjb25zdHJ1Y3Rvcih5bWFwLCBjbGFzc1Byb21wdCkge1xyXG4gICAgdGhpcy55bWFwID0geW1hcDtcclxuICAgIHRoaXMuY2xhc3NQcm9tcHQgPSBjbGFzc1Byb21wdDtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLnltYXAuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgdGhpcy55bWFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnltYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMueW1hcC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Selection; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Selection = /*#__PURE__*/function () {\n  function Selection(container, tempId) {\n    _classCallCheck(this, Selection);\n\n    this.container = container;\n    this.tempId = tempId;\n    this.selectionList = this.container.querySelector('.selection__list');\n    this.anchors = this.selectionList.querySelectorAll('a[href*=\"#\"]');\n  } // получение Id из URL\n\n\n  _createClass(Selection, [{\n    key: \"getUrlId\",\n    value: function getUrlId() {\n      return window.location.hash.split('#')[1];\n    } // получение Id из ссылки\n\n  }, {\n    key: \"_getLinkHref\",\n    value: function _getLinkHref(element) {\n      return element.getAttribute('href').substr(1);\n    } // переключение блоков\n\n  }, {\n    key: \"_switchBlocks\",\n    value: function _switchBlocks(element) {\n      if (element) {\n        var currentBlock = this.container.querySelector('.selection__content_visible');\n        currentBlock.classList.remove('selection__content_visible');\n        return element.classList.add('selection__content_visible');\n      } else {\n        return;\n      }\n    } // переключение кнопок\n\n  }, {\n    key: \"_switchButton\",\n    value: function _switchButton(element) {\n      var currentButton = this.container.querySelector('.selection__link_active');\n      currentButton.classList.remove('selection__link_active');\n      element.classList.add('selection__link_active');\n    } // переключение блоков при переходе\n\n  }, {\n    key: \"openSelectedBlocks\",\n    value: function openSelectedBlocks(event) {\n      // по якорной ссылке\n      if (this.getUrlId() != null && event === undefined) {\n        this.tempId.id = this.getUrlId();\n        var dataId = this.tempId.id + 'Data'; //поправить на работу с this.container\n\n        this._switchBlocks(document.getElementById(dataId));\n\n        for (var i = 0; i < this.anchors.length; i++) {\n          if (this._getLinkHref(this.anchors[i]) === this.getUrlId()) {\n            this._switchButton(this.anchors[i]);\n          }\n        }\n      } //внутри блока\n      else if (event != undefined) {\n          this.tempId.id = this._getLinkHref(event);\n\n          this._switchBlocks(document.getElementById(this._getLinkHref(event) + 'Data'));\n\n          this._switchButton(event);\n        } else return;\n    } //перезапись temp Id для блока по умолчанию\n\n  }, {\n    key: \"rewritingDefaultArchorId\",\n    value: function rewritingDefaultArchorId() {\n      var currentBlock = this.container.querySelector('.selection__link_active');\n      this.tempId.id = this._getLinkHref(currentBlock);\n      return this.tempId.id;\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      var _loop = function _loop(i) {\n        _this.anchors[i].addEventListener('click', function (event) {\n          event.preventDefault();\n\n          var blockID = _this._getLinkHref(_this.anchors[i]);\n\n          window.location.hash = blockID;\n\n          _this.openSelectedBlocks(event.target);\n        });\n      };\n\n      for (var i = 0; i < this.anchors.length; i++) {\n        _loop(i);\n      }\n    }\n  }]);\n\n  return Selection;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9TZWxlY3Rpb24uanM/MDIwMSJdLCJuYW1lcyI6WyJTZWxlY3Rpb24iLCJjb250YWluZXIiLCJ0ZW1wSWQiLCJzZWxlY3Rpb25MaXN0IiwicXVlcnlTZWxlY3RvciIsImFuY2hvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwic3Vic3RyIiwiY3VycmVudEJsb2NrIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY3VycmVudEJ1dHRvbiIsImV2ZW50IiwiZ2V0VXJsSWQiLCJ1bmRlZmluZWQiLCJpZCIsImRhdGFJZCIsIl9zd2l0Y2hCbG9ja3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaSIsImxlbmd0aCIsIl9nZXRMaW5rSHJlZiIsIl9zd2l0Y2hCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJibG9ja0lEIiwib3BlblNlbGVjdGVkQmxvY2tzIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxTO0FBQ25CLHFCQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQjtBQUFBOztBQUM3QixTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBS0YsU0FBTCxDQUFlRyxhQUFmLENBQTZCLGtCQUE3QixDQUFyQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLRixhQUFMLENBQW1CRyxnQkFBbkIsQ0FBb0MsY0FBcEMsQ0FBZjtBQUNELEcsQ0FFRDs7Ozs7V0FDQSxvQkFBVztBQUNULGFBQU9DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQVA7QUFDRCxLLENBRUQ7Ozs7V0FDQSxz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dkI7O0FBQ0EsZUFBSSxDQUFDQyxrQkFBTCxDQUF3QmYsS0FBSyxDQUFDZ0IsTUFBOUI7QUFDRCxTQUxEO0FBRmU7O0FBQ2pCLFdBQUssSUFBSVIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLdEIsT0FBTCxDQUFhdUIsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7QUFBQSxjQUFyQ0EsQ0FBcUM7QUFPN0M7QUFDRiIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHRlbXBJZCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLnRlbXBJZCA9IHRlbXBJZDtcclxuICAgIHRoaXMuc2VsZWN0aW9uTGlzdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2xpc3QnKTtcclxuICAgIHRoaXMuYW5jaG9ycyA9IHRoaXMuc2VsZWN0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG4gIH1cclxuXHJcbiAgLy8g0L/QvtC70YPRh9C10L3QuNC1IElkINC40LcgVVJMXHJcbiAgZ2V0VXJsSWQoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJyMnKVsxXTtcclxuICB9XHJcblxyXG4gIC8vINC/0L7Qu9GD0YfQtdC90LjQtSBJZCDQuNC3INGB0YHRi9C70LrQuFxyXG4gIF9nZXRMaW5rSHJlZihlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSk7XHJcbiAgfVxyXG5cclxuICAvLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LHQu9C+0LrQvtCyXHJcbiAgX3N3aXRjaEJsb2NrcyhlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX19jb250ZW50X3Zpc2libGUnKTtcclxuICAgICAgY3VycmVudEJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbl9fY29udGVudF92aXNpYmxlJyk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbl9fY29udGVudF92aXNpYmxlJylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LrQvdC+0L/QvtC6XHJcbiAgX3N3aXRjaEJ1dHRvbihlbGVtZW50KSB7XHJcbiAgICBsZXQgY3VycmVudEJ1dHRvbiA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGlvbl9fbGlua19hY3RpdmUnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uX19saW5rX2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgLy8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INCx0LvQvtC60L7QsiDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtVxyXG4gIG9wZW5TZWxlY3RlZEJsb2NrcyhldmVudCkge1xyXG4gICAgLy8g0L/QviDRj9C60L7RgNC90L7QuSDRgdGB0YvQu9C60LVcclxuICAgIGlmICh0aGlzLmdldFVybElkKCkgIT0gbnVsbCAmJiBldmVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGVtcElkLmlkID0gdGhpcy5nZXRVcmxJZCgpO1xyXG4gICAgICBsZXQgZGF0YUlkID0gKHRoaXMudGVtcElkLmlkICsgJ0RhdGEnKTtcclxuICAgICAgLy/Qv9C+0L/RgNCw0LLQuNGC0Ywg0L3QsCDRgNCw0LHQvtGC0YMg0YEgdGhpcy5jb250YWluZXJcclxuICAgICAgdGhpcy5fc3dpdGNoQmxvY2tzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFJZCkpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5jaG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLl9nZXRMaW5rSHJlZih0aGlzLmFuY2hvcnNbaV0pID09PSB0aGlzLmdldFVybElkKCkpIHtcclxuICAgICAgICAgIHRoaXMuX3N3aXRjaEJ1dHRvbih0aGlzLmFuY2hvcnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/QstC90YPRgtGA0Lgg0LHQu9C+0LrQsFxyXG4gICAgZWxzZSBpZiAoZXZlbnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGVtcElkLmlkID0gdGhpcy5fZ2V0TGlua0hyZWYoZXZlbnQpO1xyXG4gICAgICB0aGlzLl9zd2l0Y2hCbG9ja3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKHRoaXMuX2dldExpbmtIcmVmKGV2ZW50KSArICdEYXRhJykpKTtcclxuICAgICAgdGhpcy5fc3dpdGNoQnV0dG9uKGV2ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy/Qv9C10YDQtdC30LDQv9C40YHRjCB0ZW1wIElkINC00LvRjyDQsdC70L7QutCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXHJcbiAgcmV3cml0aW5nRGVmYXVsdEFyY2hvcklkKCkge1xyXG4gICAgbGV0IGN1cnJlbnRCbG9jayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2xpbmtfYWN0aXZlJyk7XHJcbiAgICB0aGlzLnRlbXBJZC5pZCA9IHRoaXMuX2dldExpbmtIcmVmKGN1cnJlbnRCbG9jayk7XHJcbiAgICByZXR1cm4gdGhpcy50ZW1wSWQuaWQ7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVyKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuY2hvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5hbmNob3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBibG9ja0lEID0gdGhpcy5fZ2V0TGlua0hyZWYodGhpcy5hbmNob3JzW2ldKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGJsb2NrSUQ7XHJcbiAgICAgICAgdGhpcy5vcGVuU2VsZWN0ZWRCbG9ja3MoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Spoiler; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Spoiler = /*#__PURE__*/function () {\n  function Spoiler(spoilerWrappers) {\n    _classCallCheck(this, Spoiler);\n\n    this.spoilerWrappers = spoilerWrappers;\n  }\n\n  _createClass(Spoiler, [{\n    key: \"_spoilerOpened\",\n    value: function _spoilerOpened(e) {\n      if (e.classList.contains('spoiler__content_visible')) {\n        return true;\n      } else return false;\n    }\n  }, {\n    key: \"_openSpoiler\",\n    value: function _openSpoiler(e, openingСlass) {\n      e.classList.add(openingСlass);\n    }\n  }, {\n    key: \"_closeSpoiler\",\n    value: function _closeSpoiler(e, coverСlass) {\n      e.classList.remove(coverСlass);\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      var _loop = function _loop(i) {\n        _this.spoilerWrappers[i].addEventListener('click', function (event) {\n          var button = _this.spoilerWrappers[i].querySelector('.spoiler__button');\n\n          var content = _this.spoilerWrappers[i].parentNode.querySelector('.spoiler__content');\n\n          if (_this._spoilerOpened(content)) {\n            _this._closeSpoiler(button, 'spoiler__button_active');\n\n            _this._closeSpoiler(content, 'spoiler__content_visible');\n          } else {\n            _this._openSpoiler(button, 'spoiler__button_active');\n\n            _this._openSpoiler(content, 'spoiler__content_visible');\n          }\n        });\n      };\n\n      for (var i = 0; i < this.spoilerWrappers.length; i++) {\n        _loop(i);\n      }\n    }\n  }]);\n\n  return Spoiler;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9TcG9pbGVyLmpzPzVkYjQiXSwibmFtZXMiOlsiU3BvaWxlciIsInNwb2lsZXJXcmFwcGVycyIsImUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm9wZW5pbmfQoWxhc3MiLCJhZGQiLCJjb3ZlctChbGFzcyIsInJlbW92ZSIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsInBhcmVudE5vZGUiLCJfc3BvaWxlck9wZW5lZCIsIl9jbG9zZVNwb2lsZXIiLCJfb3BlblNwb2lsZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBcUJBLE87QUFDbkIsbUJBQVlDLGVBQVosRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0EsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7OztXQUVELHdCQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLFVBQUlBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxRQUFaLENBQXFCLDBCQUFyQixDQUFKLEVBQXNEO0FBQ3BELGVBQU8sSUFBUDtBQUNELE9BRkQsTUFFTyxPQUFPLEtBQVA7QUFDUjs7O1dBRUQsc0JBQWFGLENBQWIsRUFBZ0JHLFlBQWhCLEVBQThCO0FBQzVCSCxPQUFDLENBQUNDLFNBQUYsQ0FBWUcsR0FBWixDQUFnQkQsWUFBaEI7QUFDRDs7O1dBRUQsdUJBQWNILENBQWQsRUFBaUJLLFVBQWpCLEVBQTZCO0FBQzNCTCxPQUFDLENBQUNDLFNBQUYsQ0FBWUssTUFBWixDQUFtQkQsVUFBbkI7QUFDRDs7O1dBRUQsNEJBQW1CO0FBQUE7O0FBQUEsaUNBQ1JFLENBRFE7QUFFZixhQUFJLENBQUNSLGVBQUwsQ0FBcUJRLENBQXJCLEVBQXdCQyxnQkFBeEIsQ0FBeUMsT0FBekMsRUFBa0QsVUFBQ0MsS0FBRCxFQUFXO0FBQzNELGNBQUlDLE1BQU0sR0FBRyxLQUFJLENBQUNYLGVBQUwsQ0FBcUJRLENBQXJCLEVBQXdCSSxhQUF4QixDQUFzQyxrQkFBdEMsQ0FBYjs7QUFDQSxjQUFJQyxPQUFPLEdBQUcsS0FBSSxDQUFDYixlQUFMLENBQXFCUSxDQUFyQixFQUF3Qk0sVUFBeEIsQ0FBbUNGLGFBQW5DLENBQWlELG1CQUFqRCxDQUFkOztBQUVBLGNBQUksS0FBSSxDQUFDRyxjQUFMLENBQW9CRixPQUFwQixDQUFKLEVBQWtDO0FBQ2hDLGlCQUFJLENBQUNHLGFBQUwsQ0FBbUJMLE1BQW5CLEVBQTJCLHdCQUEzQjs7QUFDQSxpQkFBSSxDQUFDSyxhQUFMLENBQW1CSCxPQUFuQixFQUE0QiwwQkFBNUI7QUFDRCxXQUhELE1BSUs7QUFDSCxpQkFBSSxDQUFDSSxZQUFMLENBQWtCTixNQUFsQixFQUEwQix3QkFBMUI7O0FBQ0EsaUJBQUksQ0FBQ00sWUFBTCxDQUFrQkosT0FBbEIsRUFBMkIsMEJBQTNCO0FBQ0Q7QUFDRixTQVpEO0FBRmU7O0FBQ2pCLFdBQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLUixlQUFMLENBQXFCa0IsTUFBekMsRUFBaURWLENBQUMsRUFBbEQsRUFBc0Q7QUFBQSxjQUE3Q0EsQ0FBNkM7QUFjckQ7QUFDRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvaWxlciB7XHJcbiAgY29uc3RydWN0b3Ioc3BvaWxlcldyYXBwZXJzKSB7XHJcbiAgICB0aGlzLnNwb2lsZXJXcmFwcGVycyA9IHNwb2lsZXJXcmFwcGVycztcclxuICB9XHJcblxyXG4gIF9zcG9pbGVyT3BlbmVkKGUpIHtcclxuICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucygnc3BvaWxlcl9fY29udGVudF92aXNpYmxlJykpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX29wZW5TcG9pbGVyKGUsIG9wZW5pbmfQoWxhc3MpIHtcclxuICAgIGUuY2xhc3NMaXN0LmFkZChvcGVuaW5n0KFsYXNzKTtcclxuICB9XHJcblxyXG4gIF9jbG9zZVNwb2lsZXIoZSwgY292ZXLQoWxhc3MpIHtcclxuICAgIGUuY2xhc3NMaXN0LnJlbW92ZShjb3ZlctChbGFzcyk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVyKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwb2lsZXJXcmFwcGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnNwb2lsZXJXcmFwcGVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSB0aGlzLnNwb2lsZXJXcmFwcGVyc1tpXS5xdWVyeVNlbGVjdG9yKCcuc3BvaWxlcl9fYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnNwb2lsZXJXcmFwcGVyc1tpXS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zcG9pbGVyX19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcG9pbGVyT3BlbmVkKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgICB0aGlzLl9jbG9zZVNwb2lsZXIoYnV0dG9uLCAnc3BvaWxlcl9fYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgdGhpcy5fY2xvc2VTcG9pbGVyKGNvbnRlbnQsICdzcG9pbGVyX19jb250ZW50X3Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9vcGVuU3BvaWxlcihidXR0b24sICdzcG9pbGVyX19idXR0b25fYWN0aXZlJyk7XHJcbiAgICAgICAgICB0aGlzLl9vcGVuU3BvaWxlcihjb250ZW50LCAnc3BvaWxlcl9fY29udGVudF92aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n")},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_services_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);\n/* harmony import */ var _pages_services_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_services_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);\n/* harmony import */ var _components_Selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);\n/* harmony import */ var _components_Spoiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);\n\n\n\n\n\n\nvar spoilersWrappers = document.querySelectorAll(\'.spoiler__wrapper\');\nvar header = new _components_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* menuIconWrapper */ "b"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* menuIcon */ "a"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* navigation */ "c"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* page */ "d"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* root */ "e"]);\nvar map = new _components_Map_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* ymap */ "h"], \'contacts__map_cover\');\nvar selection = new _components_Selection_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* selection */ "f"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* tempId */ "g"]);\nvar spoiler = new _components_Spoiler_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"](spoilersWrappers);\nheader.setEventListener();\nmap.setEventListener();\nselection.rewritingDefaultArchorId();\nselection.openSelectedBlocks();\nselection.setEventListener();\nspoiler.setEventListener();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMuanM/MzM5MCJdLCJuYW1lcyI6WyJzcG9pbGVyc1dyYXBwZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGVyIiwiSGVhZGVyIiwiY29uc3RhbnRzIiwibWFwIiwiTWFwIiwic2VsZWN0aW9uIiwiU2VsZWN0aW9uIiwic3BvaWxlciIsIlNwb2lsZXIiLCJzZXRFdmVudExpc3RlbmVyIiwicmV3cml0aW5nRGVmYXVsdEFyY2hvcklkIiwib3BlblNlbGVjdGVkQmxvY2tzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXpCO0FBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUlDLHFFQUFKLENBQVdDLGtGQUFYLEVBQXNDQSwyRUFBdEMsRUFBMERBLDZFQUExRCxFQUFnRkEsdUVBQWhGLEVBQWdHQSx1RUFBaEcsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJQyxrRUFBSixDQUFRRix1RUFBUixFQUF3QixxQkFBeEIsQ0FBWjtBQUNBLElBQU1HLFNBQVMsR0FBRyxJQUFJQyx3RUFBSixDQUFjSiw0RUFBZCxFQUFtQ0EseUVBQW5DLENBQWxCO0FBQ0EsSUFBTUssT0FBTyxHQUFHLElBQUlDLHNFQUFKLENBQWFYLGdCQUFiLENBQWhCO0FBRUFHLE1BQU0sQ0FBQ1MsZ0JBQVA7QUFDQU4sR0FBRyxDQUFDTSxnQkFBSjtBQUVBSixTQUFTLENBQUNLLHdCQUFWO0FBQ0FMLFNBQVMsQ0FBQ00sa0JBQVY7QUFDQU4sU0FBUyxDQUFDSSxnQkFBVjtBQUNBRixPQUFPLENBQUNFLGdCQUFSIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9wYWdlcy9zZXJ2aWNlcy5jc3MnO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci5qcyc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9jb21wb25lbnRzL01hcC5qcyc7XHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdGlvbi5qcyc7XHJcbmltcG9ydCBTcG9pbGVyIGZyb20gJy4vY29tcG9uZW50cy9TcG9pbGVyLmpzJztcclxuXHJcbmNvbnN0IHNwb2lsZXJzV3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BvaWxlcl9fd3JhcHBlcicpO1xyXG5cclxuY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcihjb25zdGFudHMubWVudUljb25XcmFwcGVyLCBjb25zdGFudHMubWVudUljb24sIGNvbnN0YW50cy5uYXZpZ2F0aW9uLCBjb25zdGFudHMucGFnZSwgY29uc3RhbnRzLnJvb3QpO1xyXG5jb25zdCBtYXAgPSBuZXcgTWFwKGNvbnN0YW50cy55bWFwLCAnY29udGFjdHNfX21hcF9jb3ZlcicpO1xyXG5jb25zdCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKGNvbnN0YW50cy5zZWxlY3Rpb24sIGNvbnN0YW50cy50ZW1wSWQpO1xyXG5jb25zdCBzcG9pbGVyID0gbmV3IFNwb2lsZXIoIHNwb2lsZXJzV3JhcHBlcnMpO1xyXG5cclxuaGVhZGVyLnNldEV2ZW50TGlzdGVuZXIoKTtcclxubWFwLnNldEV2ZW50TGlzdGVuZXIoKTtcclxuXHJcbnNlbGVjdGlvbi5yZXdyaXRpbmdEZWZhdWx0QXJjaG9ySWQoKTtcclxuc2VsZWN0aW9uLm9wZW5TZWxlY3RlZEJsb2NrcygpO1xyXG5zZWxlY3Rpb24uc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5zcG9pbGVyLnNldEV2ZW50TGlzdGVuZXIoKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n')},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VydmljZXMuY3NzP2U4ZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n")}]);