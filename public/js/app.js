/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// const apikey = 'b9497b73-0109-42fa-ba82-3503a193df3b'
//
// const scr = document.createElement('script')
// scr.src = `https://api-maps.yandex.ru/2.1/?apikey=${apikey}&lang=ru_RU`
// document.head.appendChild(scr)
var routeCalcButton = document.querySelector('.route-calculation');
var addSuggestButton = document.querySelector('.add-route');
var fuelConsumption = document.querySelector('[data-fuel-consumption]');
var fuelPrice = document.querySelector('[data-fuel-price]');
var allInputsWrap = document.querySelector('[data-parent-input]');
var result = document.querySelector('.result');

function clearTheMap(myMap) {
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('typeSelector');
}

function init() {
  var suggest1 = document.querySelector('[data-point_1]');
  var suggest2 = document.querySelector('[data-point_2]');
  var suggest3 = document.querySelector('[data-point_3]');
  var suggestView1 = new ymaps.SuggestView('point_1');
  var suggestView2 = new ymaps.SuggestView('point_2');
  var suggestView3 = new ymaps.SuggestView('point_3');
  var allSuggestInputs = [suggest1, suggest2, suggest3];
  var allSuggest = [suggestView1, suggestView2, suggestView3];
  var myMap = new ymaps.Map('map', {
    center: [55.750625, 37.626],
    zoom: 5
  });
  var points = [];

  function setPoints() {
    allSuggest.forEach(function (elem) {
      elem.events.add('select', function (e) {
        points.push(e.get('item').value);
      });
    });
  }

  function createSuggest() {
    var label = document.createElement('label');
    label.classList.add('label-for-new-suggest');
    label.innerHTML = "\n        <input type=\"text\" class=\"form-control new-suggest mb-3\" data-point_".concat(allSuggest.length + 1, " id=\"point_").concat(allSuggest.length + 1, "\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\"/>\n        <i class=\"fa fa-trash-o mb-3 pl-1\" data-point_").concat(allSuggest.length + 1, " data-delete=\"delete\"></i>\n        ");
    allInputsWrap.append(label);
    allSuggest.push(new ymaps.SuggestView("point_".concat(allSuggest.length + 1)));
    allSuggestInputs.push(document.querySelector("[data-point_".concat(allSuggestInputs.length + 1, "]")));
    removeSuggest();
    setPoints();
  }

  function removeSuggest() {
    var allSuggestCreatedInputs = document.querySelectorAll('.label-for-new-suggest');
    console.log(allSuggestCreatedInputs.length);
    allSuggestCreatedInputs.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        if (e.target.dataset["delete"] === "delete") elem.parentNode.removeChild(elem);
      });
    });
  }

  function addRoute() {
    var newPoints = new Set(points);
    ymaps.route(_toConsumableArray(newPoints)).then(function (router) {
      var length = Math.trunc(Math.round(router.getLength()) / 1000);
      var time = Math.trunc(router.getJamsTime());
      var hours = Math.trunc(time / 3600);
      var minutes = Math.trunc((time - hours * 3600) / 60);
      var fuelOnRoute = Math.trunc(Math.round(Number(fuelConsumption.value / 100) * Number(length)));
      var price = Math.trunc(fuelOnRoute * fuelPrice.value);
      result.innerHTML = "\n                        <div>\n                            <h5>\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435</h5>\n                            <span>".concat(length, " \u043A\u043C</span>\n                        </div>\n                        <div>\n                            <h5>\u0412\u0440\u0435\u043C\u044F</h5>\n                            <span>").concat(hours, " \u0447 ").concat(minutes, " \u043C\u0438\u043D</span>\n                        </div>\n                        <div>\n                            <h5>\u0420\u0430\u0441\u0445\u043E\u0434 \u0442\u043E\u043F\u043B\u0438\u0432\u0430</h5>\n                            <span>").concat(fuelOnRoute, " \u043B</span>\n                        </div>\n                        <div>\n                            <h5>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u043E\u043F\u043B\u0438\u0432\u0430</h5>\n                            <span>").concat(price, " &#8381;</span>\n                        </div>\n                ");
      allSuggestInputs.forEach(function (elem) {
        elem.value = '';
      });
      points.length = 0;
    });
  }

  function createRoute() {
    var multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: points,
      params: {}
    }, {
      boundsAutoApply: true,
      zoomMargin: 30
    });
    myMap.geoObjects.removeAll(multiRoute);
    myMap.geoObjects.add(multiRoute);
    addRoute();
  }

  addSuggestButton.addEventListener('click', createSuggest);
  routeCalcButton.addEventListener('click', createRoute);
  clearTheMap(myMap);
  setPoints();
}

ymaps.ready(init);

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;