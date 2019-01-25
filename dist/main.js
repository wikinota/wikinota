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
                width: auto;
                display: inline-block;
                height: 100%;
                text-align: center;
                line-height: 35px;
                font-size: 20px;
                padding:0;
                margin: 0;
            }
            #searchBar input,
            #searchBar .fa-times {
                display: none;
            }
            #searchBar.open input {
                display: inline-block;
                height: 100%;
                padding: 0;
                margin: 0;
                border: 0;
            }
            #searchBar.open .fa-search {
                display: inline-block;
            }
            #searchBar.open .fa-times {
                display: inline-block;
                transform: translateX(-120%);
            }
        `;
        shadowRoot.innerHTML = `
            <style>${styles}</style>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
            <header><span id="searchBar"><input></input><i id="searchBarCloseButton" class="fas fa-times"></i><i id="searchBarButton" class="fas fa-search"></i></span></header>
        `;
        const searchBar = shadowRoot.getElementById("searchBar");
        const searchBarButton = shadowRoot.getElementById("searchBarButton");
        searchBarButton.onclick = () => {
            searchBar.classList.add("open");
        };
        const searchBarCloseButton = shadowRoot.getElementById("searchBarCloseButton");
        searchBarCloseButton.onclick = () => {
            searchBar.classList.remove("open");
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9pbmRleERCL1Bhc3N3b3JkU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYndvcmtlci9oYXNoZXIud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLE1BQU0sU0FBVSxTQUFRLFdBQVc7SUFFOUM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENB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TUFBTSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFBRSxPQUFPO1FBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztZQUMvRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQzNDRDtBQUFBO0FBQUE7QUFBQTs7O0dBR0c7QUFFcUM7QUFDRTtBQUUxQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx3REFBUSxDQUFDLENBQUM7QUFDN0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUseURBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNUL0MsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE9BQU8sSUFBSSxNQUFNLENBQUMscUJBQXVCLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb20gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGBcbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZhO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNjMGZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNzZWFyY2hCYXIgaW5wdXQsXG4gICAgICAgICAgICAjc2VhcmNoQmFyIC5mYS10aW1lcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNzZWFyY2hCYXIub3BlbiBpbnB1dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjc2VhcmNoQmFyLm9wZW4gLmZhLXNlYXJjaCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI3NlYXJjaEJhci5vcGVuIC5mYS10aW1lcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3R5bGU+JHtzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjYuMy9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1VSFJ0WkxJK3BieHRIQ1dwMXQ3N0JpMUw0WnRpcXJxRDgwS240WjhOVFNSeU1BMkZkMzNuNWRROGxXVUUwMHMvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+PHNwYW4gaWQ9XCJzZWFyY2hCYXJcIj48aW5wdXQ+PC9pbnB1dD48aSBpZD1cInNlYXJjaEJhckNsb3NlQnV0dG9uXCIgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PGkgaWQ9XCJzZWFyY2hCYXJCdXR0b25cIiBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9zcGFuPjwvaGVhZGVyPlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIik7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckJ1dHRvbiA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyQ2xvc2VCdXR0b24gPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyQ2xvc2VCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFdvcmtlckhhc2ggZnJvbSAnd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMnO1xuaW1wb3J0IFBhc3N3b3JkU3RvcmUgZnJvbSAnbG9naWMvaW5kZXhEQi9QYXNzd29yZFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkNvbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRlbWFpbEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRwYXNzd29yZDogSFRNTElucHV0RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0c2VuZDogSFRNTEJ1dHRvbkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGxvYWRpbmdJbmRpY2F0b3I6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRoYXNoT3V0cHV0OiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0aGFzaFdvcmtlcjogV29ya2VyO1xuXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cblx0XHRjb25zdCBzdHlsZXMgPSBgXG5cdFx0XHQ6aG9zdCAge1xuXHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHR9XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmYTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzYzBmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cdFx0XHR9XG5cdFx0XHQjbG9hZGluZ0luZGljYXRvciB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHQjaGFzaE91dHB1dCB7XG5cdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0XHRcdH1cbiAgICAgICAgYDtcblxuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHN0eWxlPiR7c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJlbWFpbFwiPjwvaW5wdXQ+XG5cdFx0XHRcdDxpbnB1dCBpZD1cInBhc3N3b3JkXCI+PC9pbnB1dD5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cInNlbmRcIj5TZW5kPC9idXR0b24+XG5cdFx0XHRcdDxkaXYgaWQ9XCJsb2FkaW5nSW5kaWNhdG9yXCI+TG9hZGluZ+KApjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwiaGFzaE91dHB1dFwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuXHRcdHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcblx0XHR0aGlzLnBhc3N3b3JkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuXHRcdHRoaXMuc2VuZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjc2VuZCcpO1xuXHRcdHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZ0luZGljYXRvcicpO1xuXHRcdHRoaXMuaGFzaE91dHB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjaGFzaE91dHB1dCcpO1xuXG5cdFx0dGhpcy5zZW5kLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZUhhc2goKTtcblx0XHR9O1xuXHR9XG5cblx0Y2FsY3VsYXRlSGFzaCgpIHtcblx0XHRpZiAodGhpcy5oYXNoV29ya2VyICE9IHVuZGVmaW5lZCkgdGhpcy5oYXNoV29ya2VyLnRlcm1pbmF0ZSgpO1xuXG5cdFx0dGhpcy5oYXNoV29ya2VyID0gbmV3IFdvcmtlckhhc2goKTtcblx0XHR0aGlzLmhhc2hXb3JrZXIucG9zdE1lc3NhZ2UoW3RoaXMuZW1haWxGaWVsZC52YWx1ZSwgdGhpcy5wYXNzd29yZC52YWx1ZV0pO1xuXHRcdHRoaXMubG9hZGluZ0luZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cdFx0dGhpcy5oYXNoV29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG5cdFx0XHRjb25zdCBwd3N0b3JlID0gbmV3IFBhc3N3b3JkU3RvcmUoKTtcblx0XHRcdHB3c3RvcmUudXNlclB3ID0gZS5kYXRhO1xuXHRcdFx0dGhpcy5oYXNoT3V0cHV0LnRleHRDb250ZW50ID0gZS5kYXRhO1xuXHRcdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9O1xuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRTdG9yZSB7XG4gICAgZGJSZXF1ZXN0OiBJREJSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgIHVzZXJEQjogSURCRGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgdXNlck9CUzogSURCT2JqZWN0U3RvcmUgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuaW5kZXhlZERCKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGEgc3RhYmxlIHZlcnNpb24gb2YgSW5kZXhlZERCLiBTdWNoIGFuZCBzdWNoIGZlYXR1cmUgd2lsbCBub3QgYmUgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRiUmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3BlbihcInVzZXJEYXRhXCIsIDMpO1xuICAgICAgICB0aGlzLmRiUmVxdWVzdC5vbmVycm9yID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgLSBieSBvcGVuaW5nIHRoZSBVc2VyRGF0YUJhc2UgLT5cIiwgZXYpO1xuICAgICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCBXcm9uZyEgLSBwbGVhc2UgcmVsb2FkIHRoZSBBUFAgLS0tIEVSUk9SXCIgKyBcIiBieSBvcGVuaW5nIHRoZSBVc2VyRGF0YUJhc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYlJlcXVlc3Qub25zdWNjZXNzID0gKGV2OiBFdmVudCAmIHsgdGFyZ2V0OiB7IHJlc3VsdDogSURCRGF0YWJhc2UgfSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEQiA9IGV2LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnVzZXJPQlMgPSB0aGlzLnVzZXJEQi5jcmVhdGVPYmplY3RTdG9yZShcInVzZXJMb2dpbkRhdGFcIiwgeyBrZXlQYXRoOiBcInNzblwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdXNlclB3IGludG8gdGhlIGluZGV4REJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlucHV0IC0gdGhlIGhhc2ggb3cgdGhlIHVzZXJQV1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB1c2VyUHcoaW5wdXQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0lmRGJJc1VuZGVmaW5lZCgpKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTYXZlZCB1c2VyUHdIYXNoLT5cIiwgeyBpbnB1dCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVja3MgaWYgdGhlIHBhcmFtZXRlciB0aGlzLmlEQiBpcyB1bmRlZmluZWRcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHVuZGVmaW5lZCB8IGZhbHNlIGlmIGRlZmluZWRcbiAgICAgKi9cbiAgICBjaGVja0lmRGJJc1VuZGVmaW5lZChyZWNoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckRCID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiAtIERCIGlzIG5vdCBvcGVuIGluIGNsYXNzIFBhc3N3b3JkU3RvcmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59IiwiLyoqXG4gKiBHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbm90YS93aWtpbm90YVxuICogTGljZW5zZTogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjBcbiAqL1xuXG5pbXBvcnQgbG9naW5Db20gZnJvbSBcImNvbXBvbmVudHMvbG9naW5cIjtcbmltcG9ydCBoZWFkZXJDb20gZnJvbSBcImNvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbG9naW4tY29tJywgbG9naW5Db20pO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWFkZXItY29tJywgaGVhZGVyQ29tKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWFiY2E4MjM4ZDdjMmNiZTNhN2Uud29ya2VyLmpzXCIpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9