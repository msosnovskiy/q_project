!function(Q){var n={};function B(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return Q[t].call(e.exports,e,e.exports,B),e.l=!0,e.exports}B.m=Q,B.c=n,B.d=function(Q,n,t){B.o(Q,n)||Object.defineProperty(Q,n,{enumerable:!0,get:t})},B.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},B.t=function(Q,n){if(1&n&&(Q=B(Q)),8&n)return Q;if(4&n&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var t=Object.create(null);if(B.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:Q}),2&n&&"string"!=typeof Q)for(var e in Q)B.d(t,e,function(n){return Q[n]}.bind(null,e));return t},B.n=function(Q){var n=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return B.d(n,"a",n),n},B.o=function(Q,n){return Object.prototype.hasOwnProperty.call(Q,n)},B.p="",B(B.s=11)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return root; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return navigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return menuIconWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return menuIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return map; });\nvar root = document.querySelector('.root');\nvar page = root.querySelector('.page');\nvar navigation = page.querySelector('.header__navigation');\nvar menuIconWrapper = document.querySelector('.menu-icon-wrapper');\nvar menuIcon = document.querySelector('.menu-icon');\nvar map = document.querySelector('#map');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz9lNTUyIl0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlIiwibmF2aWdhdGlvbiIsIm1lbnVJY29uV3JhcHBlciIsIm1lbnVJY29uIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUMsSUFBSSxHQUFHSCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBYjtBQUNBLElBQU1FLFVBQVUsR0FBR0QsSUFBSSxDQUFDRCxhQUFMLENBQW1CLHFCQUFuQixDQUFuQjtBQUNBLElBQU1HLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF4QjtBQUNBLElBQU1JLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0EsSUFBTUssR0FBRyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290Jyk7XHJcbmNvbnN0IHBhZ2UgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbmNvbnN0IG5hdmlnYXRpb24gPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdmlnYXRpb24nKTtcclxuY29uc3QgbWVudUljb25XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbi13cmFwcGVyJyk7XHJcbmNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xyXG5jb25zdCBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwJyk7XHJcblxyXG5leHBvcnQgeyByb290LCBwYWdlLCBuYXZpZ2F0aW9uLCBtZW51SWNvbldyYXBwZXIsIG1lbnVJY29uLCBtYXAgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Header; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header(menuIconWrapper, menuIcon, navigation, page, root) {\n    _classCallCheck(this, Header);\n\n    this.menuIconWrapper = menuIconWrapper;\n    this.menuIcon = menuIcon;\n    this.navigation = navigation;\n    this.page = page;\n    this.root = root;\n  }\n\n  _createClass(Header, [{\n    key: \"_menuOpened\",\n    value: function _menuOpened() {\n      if (this.menuIcon.closest('.menu-icon__active')) {\n        return true;\n      } else return false;\n    }\n  }, {\n    key: \"_openMenu\",\n    value: function _openMenu() {\n      this.menuIcon.classList.add('menu-icon__active');\n      this.navigation.classList.add('header__navigation_opened');\n      this.page.classList.add('background_black');\n      this.root.classList.add('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Закрыть меню';\n    }\n  }, {\n    key: \"_closeMenu\",\n    value: function _closeMenu() {\n      this.menuIcon.classList.remove('menu-icon__active');\n      this.navigation.classList.remove('header__navigation_opened');\n      this.page.classList.remove('background_black');\n      this.root.classList.remove('overflow-hidden');\n      this.menuIconWrapper.ariaLabel = 'Открыть меню';\n    }\n  }, {\n    key: \"setEventListener\",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.menuIconWrapper.addEventListener('click', function () {\n        if (!_this._menuOpened()) {\n          _this._openMenu();\n        } else _this._closeMenu();\n      });\n      this.page.addEventListener('click', function (event) {\n        if (event.target === _this.page && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n      this.page.addEventListener('keydown', function (event) {\n        if (event.keyCode === 27 && _this._menuOpened()) {\n          _this._closeMenu();\n        }\n      });\n    }\n  }]);\n\n  return Header;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanM/NmMxZCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJtZW51SWNvbldyYXBwZXIiLCJtZW51SWNvbiIsIm5hdmlnYXRpb24iLCJwYWdlIiwicm9vdCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcmlhTGFiZWwiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiX21lbnVPcGVuZWQiLCJfb3Blbk1lbnUiLCJfY2xvc2VNZW51IiwiZXZlbnQiLCJ0YXJnZXQiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxNO0FBQ25CLGtCQUFZQyxlQUFaLEVBQTZCQyxRQUE3QixFQUF1Q0MsVUFBdkMsRUFBbURDLElBQW5ELEVBQXlEQyxJQUF6RCxFQUErRDtBQUFBOztBQUM3RCxTQUFLSixlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztXQUVELHVCQUFjO0FBQ1osVUFBSSxLQUFLSCxRQUFMLENBQWNJLE9BQWQsQ0FBc0Isb0JBQXRCLENBQUosRUFBaUQ7QUFDL0MsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPLE9BQU8sS0FBUDtBQUNSOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUtKLFFBQUwsQ0FBY0ssU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsbUJBQTVCO0FBQ0EsV0FBS0wsVUFBTCxDQUFnQkksU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDJCQUE5QjtBQUNBLFdBQUtKLElBQUwsQ0FBVUcsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isa0JBQXhCO0FBQ0EsV0FBS0gsSUFBTCxDQUFVRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixpQkFBeEI7QUFDQSxXQUFLUCxlQUFMLENBQXFCUSxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtQLFFBQUwsQ0FBY0ssU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsbUJBQS9CO0FBQ0EsV0FBS1AsVUFBTCxDQUFnQkksU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLDJCQUFqQztBQUNBLFdBQUtOLElBQUwsQ0FBVUcsU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsa0JBQTNCO0FBQ0EsV0FBS0wsSUFBTCxDQUFVRSxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixpQkFBM0I7QUFDQSxXQUFLVCxlQUFMLENBQXFCUSxTQUFyQixHQUFpQyxjQUFqQztBQUNEOzs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS1IsZUFBTCxDQUFxQlUsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkQsWUFBSSxDQUFDLEtBQUksQ0FBQ0MsV0FBTCxFQUFMLEVBQXlCO0FBQ3ZCLGVBQUksQ0FBQ0MsU0FBTDtBQUNELFNBRkQsTUFFTyxLQUFJLENBQUNDLFVBQUw7QUFDUixPQUpEO0FBTUEsV0FBS1YsSUFBTCxDQUFVTyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDSSxLQUFELEVBQVc7QUFDN0MsWUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLEtBQUksQ0FBQ1osSUFBdEIsSUFBOEIsS0FBSSxDQUFDUSxXQUFMLEVBQWxDLEVBQXNEO0FBQ3BELGVBQUksQ0FBQ0UsVUFBTDtBQUNEO0FBQ0YsT0FKRDtBQU1BLFdBQUtWLElBQUwsQ0FBVU8sZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0MsVUFBQ0ksS0FBRCxFQUFXO0FBQy9DLFlBQUlBLEtBQUssQ0FBQ0UsT0FBTixLQUFrQixFQUFsQixJQUF3QixLQUFJLENBQUNMLFdBQUwsRUFBNUIsRUFBZ0Q7QUFDOUMsZUFBSSxDQUFDRSxVQUFMO0FBQ0Q7QUFDRixPQUpEO0FBS0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWVudUljb25XcmFwcGVyLCBtZW51SWNvbiwgbmF2aWdhdGlvbiwgcGFnZSwgcm9vdCkge1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIgPSBtZW51SWNvbldyYXBwZXI7XHJcbiAgICB0aGlzLm1lbnVJY29uID0gbWVudUljb247XHJcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xyXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgfVxyXG5cclxuICBfbWVudU9wZW5lZCgpIHtcclxuICAgIGlmICh0aGlzLm1lbnVJY29uLmNsb3Nlc3QoJy5tZW51LWljb25fX2FjdGl2ZScpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9vcGVuTWVudSgpIHtcclxuICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LmFkZCgnbWVudS1pY29uX19hY3RpdmUnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdmlnYXRpb25fb3BlbmVkJyk7XHJcbiAgICB0aGlzLnBhZ2UuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZF9ibGFjaycpO1xyXG4gICAgdGhpcy5yb290LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIuYXJpYUxhYmVsID0gJ9CX0LDQutGA0YvRgtGMINC80LXQvdGOJztcclxuICB9XHJcblxyXG4gIF9jbG9zZU1lbnUoKSB7XHJcbiAgICB0aGlzLm1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaWNvbl9fYWN0aXZlJyk7XHJcbiAgICB0aGlzLm5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXZpZ2F0aW9uX29wZW5lZCcpO1xyXG4gICAgdGhpcy5wYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmRfYmxhY2snKTtcclxuICAgIHRoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgIHRoaXMubWVudUljb25XcmFwcGVyLmFyaWFMYWJlbCA9ICfQntGC0LrRgNGL0YLRjCDQvNC10L3Rjic7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5tZW51SWNvbldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5fbWVudU9wZW5lZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fb3Blbk1lbnUoKTtcclxuICAgICAgfSBlbHNlIHRoaXMuX2Nsb3NlTWVudSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5wYWdlICYmIHRoaXMuX21lbnVPcGVuZWQoKSkge1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlTWVudSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBhZ2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5fbWVudU9wZW5lZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VNZW51KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Map = /*#__PURE__*/function () {\n  function Map(map, classPrompt) {\n    _classCallCheck(this, Map);\n\n    this.map = map;\n    this.classPrompt = classPrompt;\n  }\n\n  _createClass(Map, [{\n    key: "setEventListener",\n    value: function setEventListener() {\n      var _this = this;\n\n      this.map.addEventListener(\'touchmove\', function (event) {\n        event.preventDefault();\n\n        if (_this.map.contains(event.target) && event.targetTouches.length < 2) {\n          _this.map.classList.add(_this.classPrompt);\n        }\n      });\n      this.map.addEventListener(\'touchend\', function (event) {\n        event.preventDefault();\n\n        if (_this.map.contains(event.target)) {\n          _this.map.classList.remove(_this.classPrompt);\n        }\n      });\n    }\n  }]);\n\n  return Map;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9NYXAuanM/MGRjOSJdLCJuYW1lcyI6WyJNYXAiLCJtYXAiLCJjbGFzc1Byb21wdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ0YXJnZXRUb3VjaGVzIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQXFCQSxHO0FBQ25CLGVBQVlDLEdBQVosRUFBaUJDLFdBQWpCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7V0FFRCw0QkFBbUI7QUFBQTs7QUFDakIsV0FBS0QsR0FBTCxDQUFTRSxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxVQUFDQyxLQUFELEVBQVc7QUFDaERBLGFBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFJLEtBQUksQ0FBQ0osR0FBTCxDQUFTSyxRQUFULENBQWtCRixLQUFLLENBQUNHLE1BQXhCLEtBQW9DSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLE1BQXBCLEdBQTZCLENBQXJFLEVBQXlFO0FBQ3ZFLGVBQUksQ0FBQ1IsR0FBTCxDQUFTUyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixLQUFJLENBQUNULFdBQTVCO0FBQ0Q7QUFDRixPQUxEO0FBT0EsV0FBS0QsR0FBTCxDQUFTRSxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFDQyxLQUFELEVBQVc7QUFDL0NBLGFBQUssQ0FBQ0MsY0FBTjs7QUFDQSxZQUFJLEtBQUksQ0FBQ0osR0FBTCxDQUFTSyxRQUFULENBQWtCRixLQUFLLENBQUNHLE1BQXhCLENBQUosRUFBcUM7QUFDbkMsZUFBSSxDQUFDTixHQUFMLENBQVNTLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLEtBQUksQ0FBQ1YsV0FBL0I7QUFDRDtBQUNGLE9BTEQ7QUFNRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcclxuICBjb25zdHJ1Y3RvcihtYXAsIGNsYXNzUHJvbXB0KSB7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHRoaXMuY2xhc3NQcm9tcHQgPSBjbGFzc1Byb21wdDtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm1hcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMubWFwLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikpIHtcclxuICAgICAgICB0aGlzLm1hcC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NQcm9tcHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm1hcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy5tYXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMubWFwLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc1Byb21wdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_news_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);\n/* harmony import */ var _pages_news_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_news_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar header = new _components_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* menuIconWrapper */ \"c\"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* menuIcon */ \"b\"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* navigation */ \"d\"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* page */ \"e\"], _js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* root */ \"f\"]);\nvar map = new _components_Map_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"](_js_constants_constants_js__WEBPACK_IMPORTED_MODULE_1__[/* map */ \"a\"], 'contacts__map_cover');\nvar selection = document.querySelector('.selection');\nvar anchors = selection.querySelectorAll('a[href*=\"#\"]');\nvar scrollUp = document.querySelector('.scroll-up');\nvar temp = document.getElementById('temp'); // получение Id из URL\n\nfunction getUrlId() {\n  return window.location.hash.split('#')[1];\n} // получение Id из ссылки\n\n\nfunction getLinkHref(element) {\n  return element.getAttribute('href').substr(1);\n} // переключение блоков\n\n\nfunction switchBlocks(element) {\n  if (element) {\n    var currentBlock = selection.querySelector('.selection__content_visible');\n    currentBlock.classList.remove('selection__content_visible');\n    return element.classList.add('selection__content_visible');\n  } else {\n    return;\n  }\n} //переключение кнопок\n\n\nfunction switchButton(element) {\n  var currentButton = selection.querySelector('.selection__link_active');\n  currentButton.classList.remove('selection__link_active');\n  element.classList.add('selection__link_active');\n} // переключение блоков при переходе\n\n\nfunction openSelectedBlocks(event) {\n  var anchor = selection.querySelector('.anchor'); //по якорной ссылке\n\n  if (getUrlId() != null && event == undefined) {\n    anchor.id = getUrlId();\n    switchBlocks(document.getElementById(getUrlId() + 'Data'));\n\n    var _iterator = _createForOfIteratorHelper(anchors),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _anchor = _step.value;\n\n        if (getLinkHref(_anchor) === getUrlId()) {\n          switchButton(_anchor);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  } //внутри блока\n  else if (event != undefined) {\n      anchor.id = getLinkHref(event);\n      switchBlocks(document.getElementById(getLinkHref(event) + 'Data'));\n      switchButton(event);\n    } else return;\n} // определяет текущее положение скрола\n\n\nfunction currentYPosition() {\n  // Firefox, Chrome, Opera, Safari\n  if (self.pageYOffset) return self.pageYOffset; // Internet Explorer 6 - standards mode\n\n  if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6, 7 and 8\n\n  if (document.body.scrollTop) return document.body.scrollTop;\n  return 0;\n} // определяет положение элемента\n\n\nfunction elmYPosition(eID) {\n  var elm = document.getElementById(eID);\n  var y = elm.offsetTop;\n  var node = elm;\n\n  while (node.offsetParent && node.offsetParent != document.body) {\n    node = node.offsetParent;\n    y += node.offsetTop;\n  }\n\n  return y;\n} // скролл к якорю\n\n\nfunction smoothScroll(eID) {\n  var startY = currentYPosition();\n  var stopY = elmYPosition(eID);\n  var distance = stopY > startY ? stopY - startY : startY - stopY;\n\n  if (distance < 100) {\n    scrollTo(0, stopY);\n    return;\n  }\n\n  var speed = Math.round(distance / 100);\n  if (speed >= 20) speed = 20;\n  var step = Math.round(distance / 25);\n  var leapY = stopY > startY ? startY + step : startY - step;\n  var timer = 0;\n\n  if (stopY > startY) {\n    for (var i = startY; i < stopY; i += step) {\n      setTimeout(\"window.scrollTo(0, \" + leapY + \")\", timer * speed);\n      leapY += step;\n      if (leapY > stopY) leapY = stopY;\n      timer++;\n    }\n\n    return;\n  }\n\n  for (var _i = startY; _i > stopY; _i -= step) {\n    setTimeout(\"window.scrollTo(0, \" + leapY + \")\", timer * speed);\n    leapY -= step;\n    if (leapY < stopY) leapY = stopY;\n    timer++;\n  }\n} //перезапись temp Id для блока по умолчанию\n\n\nfunction rewritingDefaultArchorId() {\n  var currentBlock = document.querySelector('.selection__link_active');\n  temp.id = getLinkHref(currentBlock);\n  return temp.id;\n} // открытие блока при клике на ссылку\n\n\nvar _iterator2 = _createForOfIteratorHelper(anchors),\n    _step2;\n\ntry {\n  var _loop = function _loop() {\n    var anchor = _step2.value;\n    anchor.addEventListener('click', function (event) {\n      event.preventDefault();\n      var blockID = getLinkHref(anchor);\n      window.location.hash = blockID;\n      openSelectedBlocks(event.target);\n    });\n  };\n\n  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n    _loop();\n  } // Отображение и скрытие кнопки при скроле \n\n} catch (err) {\n  _iterator2.e(err);\n} finally {\n  _iterator2.f();\n}\n\ndocument.addEventListener('scroll', function (event) {\n  if (currentYPosition() > 2000) {\n    scrollUp.classList.add('scroll-up_visible');\n  } else {\n    scrollUp.classList.remove('scroll-up_visible');\n  }\n}); // скролл к якорной ссылке при клике на кнопку\n\nscrollUp.addEventListener('click', function (event) {\n  if (getUrlId() != null) {\n    smoothScroll(getUrlId());\n  } else {\n    smoothScroll(rewritingDefaultArchorId());\n  }\n});\nrewritingDefaultArchorId();\nopenSelectedBlocks();\nheader.setEventListener();\nmap.setEventListener();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbmV3cy5qcz8yODg2Il0sIm5hbWVzIjpbImhlYWRlciIsIkhlYWRlciIsImNvbnN0YW50cyIsIm1hcCIsIk1hcCIsInNlbGVjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFuY2hvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2Nyb2xsVXAiLCJ0ZW1wIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRVcmxJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNwbGl0IiwiZ2V0TGlua0hyZWYiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwic3Vic3RyIiwic3dpdGNoQmxvY2tzIiwiY3VycmVudEJsb2NrIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic3dpdGNoQnV0dG9uIiwiY3VycmVudEJ1dHRvbiIsIm9wZW5TZWxlY3RlZEJsb2NrcyIsImV2ZW50IiwiYW5jaG9yIiwidW5kZWZpbmVkIiwiaWQiLCJjdXJyZW50WVBvc2l0aW9uIiwic2VsZiIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsImVsbVlQb3NpdGlvbiIsImVJRCIsImVsbSIsInkiLCJvZmZzZXRUb3AiLCJub2RlIiwib2Zmc2V0UGFyZW50Iiwic21vb3RoU2Nyb2xsIiwic3RhcnRZIiwic3RvcFkiLCJkaXN0YW5jZSIsInNjcm9sbFRvIiwic3BlZWQiLCJNYXRoIiwicm91bmQiLCJzdGVwIiwibGVhcFkiLCJ0aW1lciIsImkiLCJzZXRUaW1lb3V0IiwicmV3cml0aW5nRGVmYXVsdEFyY2hvcklkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsInRhcmdldCIsInNldEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLHFFQUFKLENBQVdDLGtGQUFYLEVBQXNDQSwyRUFBdEMsRUFBMERBLDZFQUExRCxFQUFnRkEsdUVBQWhGLEVBQWdHQSx1RUFBaEcsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJQyxrRUFBSixDQUFRRixzRUFBUixFQUF1QixxQkFBdkIsQ0FBWjtBQUVBLElBQU1HLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWxCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHSCxTQUFTLENBQUNJLGdCQUFWLENBQTJCLGNBQTNCLENBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxJQUFNSSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixNQUF4QixDQUFiLEMsQ0FHQTs7QUFDQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFNBQU9DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQVA7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzVCLFNBQU9BLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQixNQUFyQixFQUE2QkMsTUFBN0IsQ0FBb0MsQ0FBcEMsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBU0MsWUFBVCxDQUFzQkgsT0FBdEIsRUFBK0I7QUFDN0IsTUFBSUEsT0FBSixFQUFhO0FBQ1gsUUFBSUksWUFBWSxHQUFHbEIsU0FBUyxDQUFDRSxhQUFWLENBQXdCLDZCQUF4QixDQUFuQjtBQUNBZ0IsZ0JBQVksQ0FBQ0MsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsNEJBQTlCO0FBQ0EsV0FBT04sT0FBTyxDQUFDSyxTQUFSLENBQWtCRSxHQUFsQixDQUFzQiw0QkFBdEIsQ0FBUDtBQUNELEdBSkQsTUFLSztBQUNIO0FBQ0Q7QUFDRixDLENBRUQ7OztBQUNBLFNBQVNDLFlBQVQsQ0FBc0JSLE9BQXRCLEVBQStCO0FBQzdCLE1BQUlTLGFBQWEsR0FBR3ZCLFNBQVMsQ0FBQ0UsYUFBVixDQUF3Qix5QkFBeEIsQ0FBcEI7QUFDQXFCLGVBQWEsQ0FBQ0osU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0Isd0JBQS9CO0FBQ0FOLFNBQU8sQ0FBQ0ssU0FBUixDQUFrQkUsR0FBbEIsQ0FBc0Isd0JBQXRCO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTRyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDakMsTUFBSUMsTUFBTSxHQUFHMUIsU0FBUyxDQUFDRSxhQUFWLENBQXdCLFNBQXhCLENBQWIsQ0FEaUMsQ0FFakM7O0FBQ0EsTUFBSU0sUUFBUSxNQUFNLElBQWQsSUFBc0JpQixLQUFLLElBQUlFLFNBQW5DLEVBQThDO0FBQzVDRCxVQUFNLENBQUNFLEVBQVAsR0FBWXBCLFFBQVEsRUFBcEI7QUFDQVMsZ0JBQVksQ0FBQ2hCLFFBQVEsQ0FBQ00sY0FBVCxDQUF5QkMsUUFBUSxLQUFLLE1BQXRDLENBQUQsQ0FBWjs7QUFGNEMsK0NBR3pCTCxPQUh5QjtBQUFBOztBQUFBO0FBRzVDLDBEQUE0QjtBQUFBLFlBQW5CdUIsT0FBbUI7O0FBQzFCLFlBQUliLFdBQVcsQ0FBQ2EsT0FBRCxDQUFYLEtBQXdCbEIsUUFBUSxFQUFwQyxFQUF3QztBQUN0Q2Msc0JBQVksQ0FBQ0ksT0FBRCxDQUFaO0FBQ0Q7QUFDRjtBQVAyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUTdDLEdBUkQsQ0FTQTtBQVRBLE9BVUssSUFBSUQsS0FBSyxJQUFJRSxTQUFiLEVBQXdCO0FBQzNCRCxZQUFNLENBQUNFLEVBQVAsR0FBWWYsV0FBVyxDQUFDWSxLQUFELENBQXZCO0FBQ0FSLGtCQUFZLENBQUNoQixRQUFRLENBQUNNLGNBQVQsQ0FBeUJNLFdBQVcsQ0FBQ1ksS0FBRCxDQUFYLEdBQXFCLE1BQTlDLENBQUQsQ0FBWjtBQUNBSCxrQkFBWSxDQUFDRyxLQUFELENBQVo7QUFDRCxLQUpJLE1BS0E7QUFDTixDLENBRUQ7OztBQUNBLFNBQVNJLGdCQUFULEdBQTRCO0FBQzFCO0FBQ0EsTUFBSUMsSUFBSSxDQUFDQyxXQUFULEVBQXNCLE9BQU9ELElBQUksQ0FBQ0MsV0FBWixDQUZJLENBRzFCOztBQUNBLE1BQUk5QixRQUFRLENBQUMrQixlQUFULElBQTRCL0IsUUFBUSxDQUFDK0IsZUFBVCxDQUF5QkMsU0FBekQsRUFDRSxPQUFPaEMsUUFBUSxDQUFDK0IsZUFBVCxDQUF5QkMsU0FBaEMsQ0FMd0IsQ0FNMUI7O0FBQ0EsTUFBSWhDLFFBQVEsQ0FBQ2lDLElBQVQsQ0FBY0QsU0FBbEIsRUFBNkIsT0FBT2hDLFFBQVEsQ0FBQ2lDLElBQVQsQ0FBY0QsU0FBckI7QUFDN0IsU0FBTyxDQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTRSxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUN6QixNQUFJQyxHQUFHLEdBQUdwQyxRQUFRLENBQUNNLGNBQVQsQ0FBd0I2QixHQUF4QixDQUFWO0FBQ0EsTUFBSUUsQ0FBQyxHQUFHRCxHQUFHLENBQUNFLFNBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUdILEdBQVg7O0FBQ0EsU0FBT0csSUFBSSxDQUFDQyxZQUFMLElBQXFCRCxJQUFJLENBQUNDLFlBQUwsSUFBcUJ4QyxRQUFRLENBQUNpQyxJQUExRCxFQUFnRTtBQUM5RE0sUUFBSSxHQUFHQSxJQUFJLENBQUNDLFlBQVo7QUFDQUgsS0FBQyxJQUFJRSxJQUFJLENBQUNELFNBQVY7QUFDRDs7QUFBQyxTQUFPRCxDQUFQO0FBQ0gsQyxDQUVEOzs7QUFDQSxTQUFTSSxZQUFULENBQXNCTixHQUF0QixFQUEyQjtBQUN6QixNQUFJTyxNQUFNLEdBQUdkLGdCQUFnQixFQUE3QjtBQUNBLE1BQUllLEtBQUssR0FBR1QsWUFBWSxDQUFDQyxHQUFELENBQXhCO0FBQ0EsTUFBSVMsUUFBUSxHQUFHRCxLQUFLLEdBQUdELE1BQVIsR0FBaUJDLEtBQUssR0FBR0QsTUFBekIsR0FBa0NBLE1BQU0sR0FBR0MsS0FBMUQ7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEdBQWYsRUFBb0I7QUFDbEJDLFlBQVEsQ0FBQyxDQUFELEVBQUlGLEtBQUosQ0FBUjtBQUFvQjtBQUNyQjs7QUFDRCxNQUFJRyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixRQUFRLEdBQUcsR0FBdEIsQ0FBWjtBQUNBLE1BQUlFLEtBQUssSUFBSSxFQUFiLEVBQWlCQSxLQUFLLEdBQUcsRUFBUjtBQUNqQixNQUFJRyxJQUFJLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixRQUFRLEdBQUcsRUFBdEIsQ0FBWDtBQUNBLE1BQUlNLEtBQUssR0FBR1AsS0FBSyxHQUFHRCxNQUFSLEdBQWlCQSxNQUFNLEdBQUdPLElBQTFCLEdBQWlDUCxNQUFNLEdBQUdPLElBQXREO0FBQ0EsTUFBSUUsS0FBSyxHQUFHLENBQVo7O0FBQ0EsTUFBSVIsS0FBSyxHQUFHRCxNQUFaLEVBQW9CO0FBQ2xCLFNBQUssSUFBSVUsQ0FBQyxHQUFHVixNQUFiLEVBQXFCVSxDQUFDLEdBQUdULEtBQXpCLEVBQWdDUyxDQUFDLElBQUlILElBQXJDLEVBQTJDO0FBQ3pDSSxnQkFBVSxDQUFDLHdCQUF3QkgsS0FBeEIsR0FBZ0MsR0FBakMsRUFBc0NDLEtBQUssR0FBR0wsS0FBOUMsQ0FBVjtBQUNBSSxXQUFLLElBQUlELElBQVQ7QUFBZSxVQUFJQyxLQUFLLEdBQUdQLEtBQVosRUFBbUJPLEtBQUssR0FBR1AsS0FBUjtBQUFlUSxXQUFLO0FBQ3ZEOztBQUFDO0FBQ0g7O0FBQ0QsT0FBSyxJQUFJQyxFQUFDLEdBQUdWLE1BQWIsRUFBcUJVLEVBQUMsR0FBR1QsS0FBekIsRUFBZ0NTLEVBQUMsSUFBSUgsSUFBckMsRUFBMkM7QUFDekNJLGNBQVUsQ0FBQyx3QkFBd0JILEtBQXhCLEdBQWdDLEdBQWpDLEVBQXNDQyxLQUFLLEdBQUdMLEtBQTlDLENBQVY7QUFDQUksU0FBSyxJQUFJRCxJQUFUO0FBQWUsUUFBSUMsS0FBSyxHQUFHUCxLQUFaLEVBQW1CTyxLQUFLLEdBQUdQLEtBQVI7QUFBZVEsU0FBSztBQUN2RDtBQUNGLEMsQ0FFRDs7O0FBQ0EsU0FBU0csd0JBQVQsR0FBb0M7QUFDbEMsTUFBTXJDLFlBQVksR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBckI7QUFDQUksTUFBSSxDQUFDc0IsRUFBTCxHQUFVZixXQUFXLENBQUNLLFlBQUQsQ0FBckI7QUFDQSxTQUFPWixJQUFJLENBQUNzQixFQUFaO0FBQ0QsQyxDQUVEOzs7NENBQ21CekIsTzs7Ozs7UUFBVnVCLE07QUFDUEEsVUFBTSxDQUFDOEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVS9CLEtBQVYsRUFBaUI7QUFDaERBLFdBQUssQ0FBQ2dDLGNBQU47QUFDQSxVQUFNQyxPQUFPLEdBQUc3QyxXQUFXLENBQUNhLE1BQUQsQ0FBM0I7QUFDQWpCLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIrQyxPQUF2QjtBQUNBbEMsd0JBQWtCLENBQUNDLEtBQUssQ0FBQ2tDLE1BQVAsQ0FBbEI7QUFDRCxLQUxEOzs7QUFERix5REFBNEI7QUFBQTtBQU8zQixHLENBRUQ7Ozs7Ozs7O0FBQ0ExRCxRQUFRLENBQUN1RCxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFVL0IsS0FBVixFQUFpQjtBQUNuRCxNQUFJSSxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUM3QnhCLFlBQVEsQ0FBQ2MsU0FBVCxDQUFtQkUsR0FBbkIsQ0FBdUIsbUJBQXZCO0FBQ0QsR0FGRCxNQUdLO0FBQ0hoQixZQUFRLENBQUNjLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLG1CQUExQjtBQUNEO0FBQ0YsQ0FQRCxFLENBU0E7O0FBQ0FmLFFBQVEsQ0FBQ21ELGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVUvQixLQUFWLEVBQWlCO0FBQ2xELE1BQUlqQixRQUFRLE1BQU0sSUFBbEIsRUFBd0I7QUFDdEJrQyxnQkFBWSxDQUFDbEMsUUFBUSxFQUFULENBQVo7QUFDRCxHQUZELE1BR0s7QUFDSGtDLGdCQUFZLENBQUNhLHdCQUF3QixFQUF6QixDQUFaO0FBQ0Q7QUFDRixDQVBEO0FBU0FBLHdCQUF3QjtBQUN4Qi9CLGtCQUFrQjtBQUVsQjdCLE1BQU0sQ0FBQ2lFLGdCQUFQO0FBQ0E5RCxHQUFHLENBQUM4RCxnQkFBSiIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vcGFnZXMvbmV3cy5jc3MnO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vanMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci5qcyc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9jb21wb25lbnRzL01hcC5qcyc7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKGNvbnN0YW50cy5tZW51SWNvbldyYXBwZXIsIGNvbnN0YW50cy5tZW51SWNvbiwgY29uc3RhbnRzLm5hdmlnYXRpb24sIGNvbnN0YW50cy5wYWdlLCBjb25zdGFudHMucm9vdCk7XHJcbmNvbnN0IG1hcCA9IG5ldyBNYXAoY29uc3RhbnRzLm1hcCwgJ2NvbnRhY3RzX19tYXBfY292ZXInKTtcclxuXHJcbmNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb24nKTtcclxuY29uc3QgYW5jaG9ycyA9IHNlbGVjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpXHJcbmNvbnN0IHNjcm9sbFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC11cCcpO1xyXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcclxuXHJcblxyXG4vLyDQv9C+0LvRg9GH0LXQvdC40LUgSWQg0LjQtyBVUkxcclxuZnVuY3Rpb24gZ2V0VXJsSWQoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV07XHJcbn1cclxuXHJcbi8vINC/0L7Qu9GD0YfQtdC90LjQtSBJZCDQuNC3INGB0YHRi9C70LrQuFxyXG5mdW5jdGlvbiBnZXRMaW5rSHJlZihlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpO1xyXG59XHJcblxyXG4vLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LHQu9C+0LrQvtCyXHJcbmZ1bmN0aW9uIHN3aXRjaEJsb2NrcyhlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQpIHtcclxuICAgIGxldCBjdXJyZW50QmxvY2sgPSBzZWxlY3Rpb24ucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbl9fY29udGVudF92aXNpYmxlJyk7XHJcbiAgICBjdXJyZW50QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0aW9uX19jb250ZW50X3Zpc2libGUnKTtcclxuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbl9fY29udGVudF92aXNpYmxlJylcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vL9C/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQutC90L7Qv9C+0LpcclxuZnVuY3Rpb24gc3dpdGNoQnV0dG9uKGVsZW1lbnQpIHtcclxuICBsZXQgY3VycmVudEJ1dHRvbiA9IHNlbGVjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uX19saW5rX2FjdGl2ZScpO1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0aW9uX19saW5rX2FjdGl2ZScpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uX19saW5rX2FjdGl2ZScpO1xyXG59XHJcblxyXG4vLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LHQu9C+0LrQvtCyINC/0YDQuCDQv9C10YDQtdGF0L7QtNC1XHJcbmZ1bmN0aW9uIG9wZW5TZWxlY3RlZEJsb2NrcyhldmVudCkge1xyXG4gIGxldCBhbmNob3IgPSBzZWxlY3Rpb24ucXVlcnlTZWxlY3RvcignLmFuY2hvcicpO1xyXG4gIC8v0L/QviDRj9C60L7RgNC90L7QuSDRgdGB0YvQu9C60LVcclxuICBpZiAoZ2V0VXJsSWQoKSAhPSBudWxsICYmIGV2ZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgYW5jaG9yLmlkID0gZ2V0VXJsSWQoKTtcclxuICAgIHN3aXRjaEJsb2Nrcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoZ2V0VXJsSWQoKSArICdEYXRhJykpKTtcclxuICAgIGZvciAobGV0IGFuY2hvciBvZiBhbmNob3JzKSB7XHJcbiAgICAgIGlmIChnZXRMaW5rSHJlZihhbmNob3IpID09PSBnZXRVcmxJZCgpKSB7XHJcbiAgICAgICAgc3dpdGNoQnV0dG9uKGFuY2hvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy/QstC90YPRgtGA0Lgg0LHQu9C+0LrQsFxyXG4gIGVsc2UgaWYgKGV2ZW50ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgYW5jaG9yLmlkID0gZ2V0TGlua0hyZWYoZXZlbnQpO1xyXG4gICAgc3dpdGNoQmxvY2tzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKChnZXRMaW5rSHJlZihldmVudCkgKyAnRGF0YScpKSk7XHJcbiAgICBzd2l0Y2hCdXR0b24oZXZlbnQpO1xyXG4gIH1cclxuICBlbHNlIHJldHVybjtcclxufVxyXG5cclxuLy8g0L7Qv9GA0LXQtNC10LvRj9C10YIg0YLQtdC60YPRidC10LUg0L/QvtC70L7QttC10L3QuNC1INGB0LrRgNC+0LvQsFxyXG5mdW5jdGlvbiBjdXJyZW50WVBvc2l0aW9uKCkge1xyXG4gIC8vIEZpcmVmb3gsIENocm9tZSwgT3BlcmEsIFNhZmFyaVxyXG4gIGlmIChzZWxmLnBhZ2VZT2Zmc2V0KSByZXR1cm4gc2VsZi5wYWdlWU9mZnNldDtcclxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2IC0gc3RhbmRhcmRzIG1vZGVcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2LCA3IGFuZCA4XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8vINC+0L/RgNC10LTQtdC70Y/QtdGCINC/0L7Qu9C+0LbQtdC90LjQtSDRjdC70LXQvNC10L3RgtCwXHJcbmZ1bmN0aW9uIGVsbVlQb3NpdGlvbihlSUQpIHtcclxuICBsZXQgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcclxuICBsZXQgeSA9IGVsbS5vZmZzZXRUb3A7XHJcbiAgbGV0IG5vZGUgPSBlbG07XHJcbiAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcclxuICAgIG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcclxuICAgIHkgKz0gbm9kZS5vZmZzZXRUb3A7XHJcbiAgfSByZXR1cm4geTtcclxufVxyXG5cclxuLy8g0YHQutGA0L7Qu9C7INC6INGP0LrQvtGA0Y5cclxuZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVJRCkge1xyXG4gIGxldCBzdGFydFkgPSBjdXJyZW50WVBvc2l0aW9uKCk7XHJcbiAgbGV0IHN0b3BZID0gZWxtWVBvc2l0aW9uKGVJRCk7XHJcbiAgbGV0IGRpc3RhbmNlID0gc3RvcFkgPiBzdGFydFkgPyBzdG9wWSAtIHN0YXJ0WSA6IHN0YXJ0WSAtIHN0b3BZO1xyXG4gIGlmIChkaXN0YW5jZSA8IDEwMCkge1xyXG4gICAgc2Nyb2xsVG8oMCwgc3RvcFkpOyByZXR1cm47XHJcbiAgfVxyXG4gIGxldCBzcGVlZCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAxMDApO1xyXG4gIGlmIChzcGVlZCA+PSAyMCkgc3BlZWQgPSAyMDtcclxuICBsZXQgc3RlcCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAyNSk7XHJcbiAgbGV0IGxlYXBZID0gc3RvcFkgPiBzdGFydFkgPyBzdGFydFkgKyBzdGVwIDogc3RhcnRZIC0gc3RlcDtcclxuICBsZXQgdGltZXIgPSAwO1xyXG4gIGlmIChzdG9wWSA+IHN0YXJ0WSkge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0WTsgaSA8IHN0b3BZOyBpICs9IHN0ZXApIHtcclxuICAgICAgc2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIiArIGxlYXBZICsgXCIpXCIsIHRpbWVyICogc3BlZWQpO1xyXG4gICAgICBsZWFwWSArPSBzdGVwOyBpZiAobGVhcFkgPiBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcclxuICAgIH0gcmV0dXJuO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gc3RhcnRZOyBpID4gc3RvcFk7IGkgLT0gc3RlcCkge1xyXG4gICAgc2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIiArIGxlYXBZICsgXCIpXCIsIHRpbWVyICogc3BlZWQpO1xyXG4gICAgbGVhcFkgLT0gc3RlcDsgaWYgKGxlYXBZIDwgc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XHJcbiAgfVxyXG59XHJcblxyXG4vL9C/0LXRgNC10LfQsNC/0LjRgdGMIHRlbXAgSWQg0LTQu9GPINCx0LvQvtC60LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuZnVuY3Rpb24gcmV3cml0aW5nRGVmYXVsdEFyY2hvcklkKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb25fX2xpbmtfYWN0aXZlJyk7XHJcbiAgdGVtcC5pZCA9IGdldExpbmtIcmVmKGN1cnJlbnRCbG9jayk7XHJcbiAgcmV0dXJuIHRlbXAuaWQ7XHJcbn1cclxuXHJcbi8vINC+0YLQutGA0YvRgtC40LUg0LHQu9C+0LrQsCDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINGB0YHRi9C70LrRg1xyXG5mb3IgKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGJsb2NrSUQgPSBnZXRMaW5rSHJlZihhbmNob3IpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBibG9ja0lEO1xyXG4gICAgb3BlblNlbGVjdGVkQmxvY2tzKGV2ZW50LnRhcmdldCk7XHJcbiAgfSlcclxufVxyXG5cclxuLy8g0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQuCDRgdC60YDRi9GC0LjQtSDQutC90L7Qv9C60Lgg0L/RgNC4INGB0LrRgNC+0LvQtSBcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgaWYgKGN1cnJlbnRZUG9zaXRpb24oKSA+IDIwMDApIHtcclxuICAgIHNjcm9sbFVwLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC11cF92aXNpYmxlJylcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBzY3JvbGxVcC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtdXBfdmlzaWJsZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyDRgdC60YDQvtC70Lsg0Log0Y/QutC+0YDQvdC+0Lkg0YHRgdGL0LvQutC1INC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDXHJcbnNjcm9sbFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgaWYgKGdldFVybElkKCkgIT0gbnVsbCkge1xyXG4gICAgc21vb3RoU2Nyb2xsKGdldFVybElkKCkpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHNtb290aFNjcm9sbChyZXdyaXRpbmdEZWZhdWx0QXJjaG9ySWQoKSk7XHJcbiAgfVxyXG59KVxyXG5cclxucmV3cml0aW5nRGVmYXVsdEFyY2hvcklkKCk7XHJcbm9wZW5TZWxlY3RlZEJsb2NrcygpO1xyXG5cclxuaGVhZGVyLnNldEV2ZW50TGlzdGVuZXIoKTtcclxubWFwLnNldEV2ZW50TGlzdGVuZXIoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbmV3cy5jc3M/MzY1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n")}]);