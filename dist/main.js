/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropDownItem.js":
/*!*****************************!*\
  !*** ./src/dropDownItem.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ DropDownItem
/* harmony export */ });
class DropDownItem {
  constructor(_element, _animation) {
    this.element = _element;
    this.animation = _animation;
    this.hide();
  }

  hide() {
    this.element.style.opacity = "0";
    this.element.classList.remove(this.animation);
  }

  show() {
    this.element.style.opacity = "1";
    this.element.classList.add(this.animation);
  }
}


/***/ }),

/***/ "./src/dropDownMenu.js":
/*!*****************************!*\
  !*** ./src/dropDownMenu.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ DropDownMenu
/* harmony export */ });
class DropDownMenu {
  constructor(_element) {
    this.element = _element;
    this.items = [];
    this.addHoverEvent();
  }

  addHoverEvent() {
    this.element.addEventListener(
      "mouseover",
      function () {
        this.showItems();
      }.bind(this)
    );

    this.element.addEventListener(
      "mouseout",
      function () {
        this.hideItems();
      }.bind(this)
    );
  }

  showItems() {
    this.items.forEach((item) => {
      item.show();
    });
  }

  hideItems() {
    this.items.forEach((item) => {
      item.hide();
    });
  }

  addItem(item) {
    this.items.push(item);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropDownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDownMenu */ "./src/dropDownMenu.js");
/* harmony import */ var _dropDownItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropDownItem */ "./src/dropDownItem.js");
;


let dropDownMenuElement = document.querySelector(".dropDownMenu");
let dropDownMenu = new _dropDownMenu__WEBPACK_IMPORTED_MODULE_0__.default(dropDownMenuElement);

let dropDownItemElements = document.querySelectorAll(".dropDownItem");

dropDownItemElements.forEach((element) => {
  let item = new _dropDownItem__WEBPACK_IMPORTED_MODULE_1__.default(element, "dropDownMenuItemAnimate");
  dropDownMenu.addItem(item);
});

//this is how you reuse it
let anotherdropDownMenuElement = document.querySelector(".anotherdropDownMenu");
let anotherdropDownMenu = new _dropDownMenu__WEBPACK_IMPORTED_MODULE_0__.default(anotherdropDownMenuElement);

let anotherdropDownItemElements = document.querySelectorAll(
  ".anotherdropDownItem"
);

anotherdropDownItemElements.forEach((element) => {
  let item = new _dropDownItem__WEBPACK_IMPORTED_MODULE_1__.default(element, "anotherdropDownMenuItemAnimate");
  anotherdropDownMenu.addItem(item);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZHJvcERvd25JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9kcm9wRG93bk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxDQUEwQztBQUNBOztBQUUxQztBQUNBLHVCQUF1QixrREFBWTs7QUFFbkM7O0FBRUE7QUFDQSxpQkFBaUIsa0RBQVk7QUFDN0I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVk7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrREFBWTtBQUM3QjtBQUNBLENBQUM7Ozs7Ozs7VUN4QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wRG93bkl0ZW0ge1xuICBjb25zdHJ1Y3RvcihfZWxlbWVudCwgX2FuaW1hdGlvbikge1xuICAgIHRoaXMuZWxlbWVudCA9IF9lbGVtZW50O1xuICAgIHRoaXMuYW5pbWF0aW9uID0gX2FuaW1hdGlvbjtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFuaW1hdGlvbik7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hbmltYXRpb24pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wRG93bk1lbnUge1xuICBjb25zdHJ1Y3RvcihfZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IF9lbGVtZW50O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmFkZEhvdmVyRXZlbnQoKTtcbiAgfVxuXG4gIGFkZEhvdmVyRXZlbnQoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIm1vdXNlb3ZlclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNob3dJdGVtcygpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJtb3VzZW91dFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpZGVJdGVtcygpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIHNob3dJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uc2hvdygpO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZUl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gIH1cbn1cbiIsImltcG9ydCBEcm9wRG93bk1lbnUgZnJvbSBcIi4vZHJvcERvd25NZW51XCI7XG5pbXBvcnQgRHJvcERvd25JdGVtIGZyb20gXCIuL2Ryb3BEb3duSXRlbVwiO1xuXG5sZXQgZHJvcERvd25NZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcERvd25NZW51XCIpO1xubGV0IGRyb3BEb3duTWVudSA9IG5ldyBEcm9wRG93bk1lbnUoZHJvcERvd25NZW51RWxlbWVudCk7XG5cbmxldCBkcm9wRG93bkl0ZW1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcERvd25JdGVtXCIpO1xuXG5kcm9wRG93bkl0ZW1FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGxldCBpdGVtID0gbmV3IERyb3BEb3duSXRlbShlbGVtZW50LCBcImRyb3BEb3duTWVudUl0ZW1BbmltYXRlXCIpO1xuICBkcm9wRG93bk1lbnUuYWRkSXRlbShpdGVtKTtcbn0pO1xuXG4vL3RoaXMgaXMgaG93IHlvdSByZXVzZSBpdFxubGV0IGFub3RoZXJkcm9wRG93bk1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbm90aGVyZHJvcERvd25NZW51XCIpO1xubGV0IGFub3RoZXJkcm9wRG93bk1lbnUgPSBuZXcgRHJvcERvd25NZW51KGFub3RoZXJkcm9wRG93bk1lbnVFbGVtZW50KTtcblxubGV0IGFub3RoZXJkcm9wRG93bkl0ZW1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gIFwiLmFub3RoZXJkcm9wRG93bkl0ZW1cIlxuKTtcblxuYW5vdGhlcmRyb3BEb3duSXRlbUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgbGV0IGl0ZW0gPSBuZXcgRHJvcERvd25JdGVtKGVsZW1lbnQsIFwiYW5vdGhlcmRyb3BEb3duTWVudUl0ZW1BbmltYXRlXCIpO1xuICBhbm90aGVyZHJvcERvd25NZW51LmFkZEl0ZW0oaXRlbSk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==