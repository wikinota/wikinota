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
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
            <header><span><i class="fas fa-search"></i></span></header>
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
/* harmony import */ var logic_indexDB_PasswordStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! logic/indexDB/PasswordStore */ "./src/logic/indexDB/PasswordStore.ts");


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
            const pwstore = new logic_indexDB_PasswordStore__WEBPACK_IMPORTED_MODULE_1__["default"]();
            pwstore.userPw = e.data;
            this.hashOutput.textContent = e.data;
            this.loadingIndicator.style.display = "none";
        };
    }
}


/***/ }),

/***/ "./src/logic/indexDB/PasswordStore.ts":
/*!********************************************!*\
  !*** ./src/logic/indexDB/PasswordStore.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordStore; });
class PasswordStore {
    constructor() {
        this.dbRequest = undefined;
        this.userDB = undefined;
        this.userOBS = undefined;
        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
        }
        this.dbRequest = window.indexedDB.open("userData", 3);
        this.dbRequest.onerror = (ev) => {
            console.error("ERROR - by opening the UserDataBase ->", ev);
            alert("Something went Wrong! - please reload the APP --- ERROR" + " by opening the UserDataBase");
        };
        this.dbRequest.onsuccess = (ev) => {
            this.userDB = ev.target.result;
            this.userOBS = this.userDB.createObjectStore("userLoginData", { keyPath: "ssn" });
        };
    }
    /**
     * sets the userPw into the indexDB
     * @param  {string} input - the hash ow the userPW
     * @returns {void}
     */
    set userPw(input) {
        if (this.checkIfDbIsUndefined())
            return;
        console.debug("Saved userPwHash->", { input });
    }
    /**
     * checks if the parameter this.iDB is undefined
     * @returns true if undefined | false if defined
     */
    checkIfDbIsUndefined(recheck = false) {
        if (this.userDB === undefined) {
            console.error("ERROR - DB is not open in class PasswordStore");
            console.trace();
            return true;
        }
        return false;
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
    return new Worker(__webpack_require__.p + "9abca8238d7c2cbe3a7e.worker.js");
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9pbmRleERCL1Bhc3N3b3JkU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYndvcmtlci9oYXNoZXIud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLE1BQU0sU0FBVSxTQUFRLFdBQVc7SUFFOUM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENB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O0FBRXFDO0FBQ0U7QUFFMUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsd0RBQVEsQ0FBQyxDQUFDO0FBQzdDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLHlEQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVC9DLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixPQUFPLElBQUksTUFBTSxDQUFDLHFCQUF1QixHQUFHLGdDQUFnQyxDQUFDLENBQUM7QUFDaEYsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQ29tIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblxuICAgICAgICBjb25zdCBzdHlsZXMgPSBgXG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmYTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzYzBmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3R5bGU+JHtzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjYuMy9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1VSFJ0WkxJK3BieHRIQ1dwMXQ3N0JpMUw0WnRpcXJxRDgwS240WjhOVFNSeU1BMkZkMzNuNWRROGxXVUUwMHMvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+PHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvc3Bhbj48L2hlYWRlcj5cbiAgICAgICAgYDtcbiAgICB9XG59IiwiaW1wb3J0IFdvcmtlckhhc2ggZnJvbSAnd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMnO1xuaW1wb3J0IFBhc3N3b3JkU3RvcmUgZnJvbSAnbG9naWMvaW5kZXhEQi9QYXNzd29yZFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkNvbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRlbWFpbEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRwYXNzd29yZDogSFRNTElucHV0RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0c2VuZDogSFRNTEJ1dHRvbkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGxvYWRpbmdJbmRpY2F0b3I6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRoYXNoT3V0cHV0OiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0aGFzaFdvcmtlcjogV29ya2VyO1xuXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cblx0XHRjb25zdCBzdHlsZXMgPSBgXG5cdFx0XHQ6aG9zdCAge1xuXHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHR9XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmYTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzYzBmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cdFx0XHR9XG5cdFx0XHQjbG9hZGluZ0luZGljYXRvciB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHQjaGFzaE91dHB1dCB7XG5cdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0XHRcdH1cbiAgICAgICAgYDtcblxuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHN0eWxlPiR7c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJlbWFpbFwiPjwvaW5wdXQ+XG5cdFx0XHRcdDxpbnB1dCBpZD1cInBhc3N3b3JkXCI+PC9pbnB1dD5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cInNlbmRcIj5TZW5kPC9idXR0b24+XG5cdFx0XHRcdDxkaXYgaWQ9XCJsb2FkaW5nSW5kaWNhdG9yXCI+TG9hZGluZ+KApjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwiaGFzaE91dHB1dFwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuXHRcdHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcblx0XHR0aGlzLnBhc3N3b3JkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuXHRcdHRoaXMuc2VuZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjc2VuZCcpO1xuXHRcdHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZ0luZGljYXRvcicpO1xuXHRcdHRoaXMuaGFzaE91dHB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjaGFzaE91dHB1dCcpO1xuXG5cdFx0dGhpcy5zZW5kLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZUhhc2goKTtcblx0XHR9O1xuXHR9XG5cblx0Y2FsY3VsYXRlSGFzaCgpIHtcblx0XHRpZiAodGhpcy5oYXNoV29ya2VyICE9IHVuZGVmaW5lZCkgdGhpcy5oYXNoV29ya2VyLnRlcm1pbmF0ZSgpO1xuXG5cdFx0dGhpcy5oYXNoV29ya2VyID0gbmV3IFdvcmtlckhhc2goKTtcblx0XHR0aGlzLmhhc2hXb3JrZXIucG9zdE1lc3NhZ2UoW3RoaXMuZW1haWxGaWVsZC52YWx1ZSwgdGhpcy5wYXNzd29yZC52YWx1ZV0pO1xuXHRcdHRoaXMubG9hZGluZ0luZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cdFx0dGhpcy5oYXNoV29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG5cdFx0XHRjb25zdCBwd3N0b3JlID0gbmV3IFBhc3N3b3JkU3RvcmUoKTtcblx0XHRcdHB3c3RvcmUudXNlclB3ID0gZS5kYXRhO1xuXHRcdFx0dGhpcy5oYXNoT3V0cHV0LnRleHRDb250ZW50ID0gZS5kYXRhO1xuXHRcdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9O1xuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRTdG9yZSB7XG4gICAgZGJSZXF1ZXN0OiBJREJSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgIHVzZXJEQjogSURCRGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgdXNlck9CUzogSURCT2JqZWN0U3RvcmUgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuaW5kZXhlZERCKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGEgc3RhYmxlIHZlcnNpb24gb2YgSW5kZXhlZERCLiBTdWNoIGFuZCBzdWNoIGZlYXR1cmUgd2lsbCBub3QgYmUgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRiUmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3BlbihcInVzZXJEYXRhXCIsIDMpO1xuICAgICAgICB0aGlzLmRiUmVxdWVzdC5vbmVycm9yID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgLSBieSBvcGVuaW5nIHRoZSBVc2VyRGF0YUJhc2UgLT5cIiwgZXYpO1xuICAgICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCBXcm9uZyEgLSBwbGVhc2UgcmVsb2FkIHRoZSBBUFAgLS0tIEVSUk9SXCIgKyBcIiBieSBvcGVuaW5nIHRoZSBVc2VyRGF0YUJhc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYlJlcXVlc3Qub25zdWNjZXNzID0gKGV2OiBFdmVudCAmIHsgdGFyZ2V0OiB7IHJlc3VsdDogSURCRGF0YWJhc2UgfSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEQiA9IGV2LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnVzZXJPQlMgPSB0aGlzLnVzZXJEQi5jcmVhdGVPYmplY3RTdG9yZShcInVzZXJMb2dpbkRhdGFcIiwgeyBrZXlQYXRoOiBcInNzblwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdXNlclB3IGludG8gdGhlIGluZGV4REJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlucHV0IC0gdGhlIGhhc2ggb3cgdGhlIHVzZXJQV1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB1c2VyUHcoaW5wdXQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0lmRGJJc1VuZGVmaW5lZCgpKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTYXZlZCB1c2VyUHdIYXNoLT5cIiwgeyBpbnB1dCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVja3MgaWYgdGhlIHBhcmFtZXRlciB0aGlzLmlEQiBpcyB1bmRlZmluZWRcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHVuZGVmaW5lZCB8IGZhbHNlIGlmIGRlZmluZWRcbiAgICAgKi9cbiAgICBjaGVja0lmRGJJc1VuZGVmaW5lZChyZWNoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckRCID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiAtIERCIGlzIG5vdCBvcGVuIGluIGNsYXNzIFBhc3N3b3JkU3RvcmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59IiwiLyoqXG4gKiBHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbm90YS93aWtpbm90YVxuICogTGljZW5zZTogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjBcbiAqL1xuXG5pbXBvcnQgbG9naW5Db20gZnJvbSBcImNvbXBvbmVudHMvbG9naW5cIjtcbmltcG9ydCBoZWFkZXJDb20gZnJvbSBcImNvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbG9naW4tY29tJywgbG9naW5Db20pO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWFkZXItY29tJywgaGVhZGVyQ29tKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWFiY2E4MjM4ZDdjMmNiZTNhN2Uud29ya2VyLmpzXCIpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9