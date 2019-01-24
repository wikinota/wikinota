/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderCom; });
class HeaderCom extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const styles = `
            header {
                top: 0;
                position: sticky;
                font-family: fa;
                width: 100%;
                height: 35px;
                background: #03c0ff;
                color: #000;
                padding:0 5px;
            }
            span {
                height: 100%;
                text-align: center;
                line-height: 35px;
                font-size: 20px;
            }
        `;
        shadowRoot.innerHTML = `
            <style>${styles}</style>
            <header><span>🔍</span></header>
        `;
    }
}


/***/ }),

/***/ "./src/components/login.ts":
/*!*********************************!*\
  !*** ./src/components/login.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginCom; });
/* harmony import */ var webworker_hasher_worker_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webworker/hasher.worker.ts */ "./src/webworker/hasher.worker.ts");
/* harmony import */ var webworker_hasher_worker_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webworker_hasher_worker_ts__WEBPACK_IMPORTED_MODULE_0__);

class LoginCom extends HTMLElement {
    constructor() {
        super();
        this.emailField = undefined;
        this.password = undefined;
        this.send = undefined;
        this.loadingIndicator = undefined;
        this.hashOutput = undefined;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const styles = `
			:host  {
				margin: 10px;
			}
            header {
                top: 0;
                position: sticky;
                font-family: fa;
                width: 100%;
                height: 35px;
                background: #03c0ff;
                color: #000;
                padding:0 5px;
            }
            span {
                height: 100%;
                text-align: center;
                line-height: 35px;
                font-size: 20px;
			}
			#loadingIndicator {
				display: none;
			}
			#hashOutput {
				word-break: break-all;
			}
        `;
        shadowRoot.innerHTML = `
            <style>${styles}</style>
			<div>
				<input id="email"></input>
				<input id="password"></input>
				<button id="send">Send</button>
				<div id="loadingIndicator">Loading…</div>
			</div>
			<div id="hashOutput">
			</div>
		`;
        this.emailField = this.shadowRoot.querySelector('#email');
        this.password = this.shadowRoot.querySelector('#password');
        this.send = this.shadowRoot.querySelector('#send');
        this.loadingIndicator = this.shadowRoot.querySelector('#loadingIndicator');
        this.hashOutput = this.shadowRoot.querySelector('#hashOutput');
        this.send.onclick = () => {
            this.calculateHash();
        };
    }
    calculateHash() {
        if (this.hashWorker != undefined)
            this.hashWorker.terminate();
        this.hashWorker = new webworker_hasher_worker_ts__WEBPACK_IMPORTED_MODULE_0___default.a();
        this.hashWorker.postMessage([this.emailField.value, this.password.value]);
        this.loadingIndicator.style.display = "block";
        this.hashWorker.onmessage = (e) => {
            this.hashOutput.textContent = e.data;
            this.loadingIndicator.style.display = "none";
        };
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/login */ "./src/components/login.ts");
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/header */ "./src/components/header.ts");
/**
 * GitHub: https://github.com/wikinota/wikinota
 * License: GNU Affero General Public License v3.0
 */


customElements.define('login-com', components_login__WEBPACK_IMPORTED_MODULE_0__["default"]);
customElements.define('header-com', components_header__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/webworker/hasher.worker.ts":
/*!****************************************!*\
  !*** ./src/webworker/hasher.worker.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
    return new Worker(__webpack_require__.p + "a4d7bfa73eae51fadbdf.worker.js");
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJ3b3JrZXIvaGFzaGVyLndvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZSxNQUFNLFNBQVUsU0FBUSxXQUFXO0lBRTlDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFdkQsTUFBTSxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBaUJkLENBQUM7UUFFRixVQUFVLENBQUMsU0FBUyxHQUFHO3FCQUNWLE1BQU07O1NBRWxCLENBQUM7SUFDTixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM5QkQ7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFFckMsTUFBTSxRQUFTLFNBQVEsV0FBVztJQVVoRDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBVFQsZUFBVSxHQUFxQixTQUFTLENBQUM7UUFDekMsYUFBUSxHQUFxQixTQUFTLENBQUM7UUFDdkMsU0FBSSxHQUFzQixTQUFTLENBQUM7UUFDcEMscUJBQWdCLEdBQW1CLFNBQVMsQ0FBQztRQUM3QyxlQUFVLEdBQW1CLFNBQVMsQ0FBQztRQU10QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFdkQsTUFBTSxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMEJSLENBQUM7UUFFUixVQUFVLENBQUMsU0FBUyxHQUFHO3FCQUNKLE1BQU07Ozs7Ozs7OztHQVN4QixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVM7WUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxpRUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRTlDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDOUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7O0FDL0VEO0FBQUE7QUFBQTtBQUFBOzs7R0FHRztBQUVxQztBQUNFO0FBRTFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLHdEQUFRLENBQUMsQ0FBQztBQUM3QyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSx5REFBUyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ1QvQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxxQkFBdUIsR0FBRyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gYFxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogZmE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM2MwZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgICAgIHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHN0eWxlPiR7c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICA8aGVhZGVyPjxzcGFuPvCflI08L3NwYW4+PC9oZWFkZXI+XG4gICAgICAgIGA7XG4gICAgfVxufSIsImltcG9ydCBXb3JrZXJIYXNoIGZyb20gJ3dlYndvcmtlci9oYXNoZXIud29ya2VyLnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Db20gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblx0ZW1haWxGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0cGFzc3dvcmQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdHNlbmQ6IEhUTUxCdXR0b25FbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRsb2FkaW5nSW5kaWNhdG9yOiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0aGFzaE91dHB1dDogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGhhc2hXb3JrZXI6IFdvcmtlcjtcblxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXG5cdFx0Y29uc3Qgc3R5bGVzID0gYFxuXHRcdFx0Omhvc3QgIHtcblx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0fVxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogZmE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM2MwZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXHRcdFx0fVxuXHRcdFx0I2xvYWRpbmdJbmRpY2F0b3Ige1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdFx0I2hhc2hPdXRwdXQge1xuXHRcdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdFx0XHR9XG4gICAgICAgIGA7XG5cblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdHlsZT4ke3N0eWxlc308L3N0eWxlPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IGlkPVwiZW1haWxcIj48L2lucHV0PlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJzZW5kXCI+U2VuZDwvYnV0dG9uPlxuXHRcdFx0XHQ8ZGl2IGlkPVwibG9hZGluZ0luZGljYXRvclwiPkxvYWRpbmfigKY8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBpZD1cImhhc2hPdXRwdXRcIj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0XHR0aGlzLmVtYWlsRmllbGQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcblx0XHR0aGlzLnNlbmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3NlbmQnKTtcblx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2xvYWRpbmdJbmRpY2F0b3InKTtcblx0XHR0aGlzLmhhc2hPdXRwdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2hhc2hPdXRwdXQnKTtcblxuXHRcdHRoaXMuc2VuZC5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGVIYXNoKCk7XG5cdFx0fTtcblx0fVxuXG5cdGNhbGN1bGF0ZUhhc2goKSB7XG5cdFx0aWYgKHRoaXMuaGFzaFdvcmtlciAhPSB1bmRlZmluZWQpIHRoaXMuaGFzaFdvcmtlci50ZXJtaW5hdGUoKTtcblxuXHRcdHRoaXMuaGFzaFdvcmtlciA9IG5ldyBXb3JrZXJIYXNoKCk7XG5cdFx0dGhpcy5oYXNoV29ya2VyLnBvc3RNZXNzYWdlKFt0aGlzLmVtYWlsRmllbGQudmFsdWUsIHRoaXMucGFzc3dvcmQudmFsdWVdKTtcblx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdHRoaXMuaGFzaFdvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5oYXNoT3V0cHV0LnRleHRDb250ZW50ID0gZS5kYXRhO1xuXHRcdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9O1xuXHR9XG59IiwiLyoqXG4gKiBHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbm90YS93aWtpbm90YVxuICogTGljZW5zZTogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjBcbiAqL1xuXG5pbXBvcnQgbG9naW5Db20gZnJvbSBcImNvbXBvbmVudHMvbG9naW5cIjtcbmltcG9ydCBoZWFkZXJDb20gZnJvbSBcImNvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbG9naW4tY29tJywgbG9naW5Db20pO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWFkZXItY29tJywgaGVhZGVyQ29tKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTRkN2JmYTczZWFlNTFmYWRiZGYud29ya2VyLmpzXCIpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9