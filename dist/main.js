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
/* harmony import */ var logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! logic/CustomStyleIO */ "./src/logic/CustomStyleIO.ts");

class HeaderCom extends HTMLElement {
    constructor() {
        super();
        this.shadowRootDom = undefined;
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
    }
    get composedStyle() {
        let style = `
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
        return style + "\n" + logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__["cStyle"].header;
    }
    newRender() {
        const shadowRoot = this.shadowRootDom;
        shadowRoot.innerHTML = `
        <style>${this.composedStyle}</style>
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
/* harmony import */ var logic_PasswordStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! logic/PasswordStore */ "./src/logic/PasswordStore.ts");


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
            const pwstore = new logic_PasswordStore__WEBPACK_IMPORTED_MODULE_1__["default"]();
            pwstore.userPw = e.data;
            this.hashOutput.textContent = e.data;
            this.loadingIndicator.style.display = "none";
        };
    }
}


/***/ }),

/***/ "./src/logic/CustomStyleIO.ts":
/*!************************************!*\
  !*** ./src/logic/CustomStyleIO.ts ***!
  \************************************/
/*! exports provided: cStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cStyle", function() { return cStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomStyleIO; });
const cStyle = new Proxy({}, {
    get(target, name) {
        const styleIO = new CustomStyleIO;
        if (styleIO.customTemplate === undefined || styleIO.customTemplate[name] === undefined) {
            return "";
        }
        return styleIO.customTemplate[name];
    }
});
/**
 * sets the custom styles - needs to be executed at the beginning of the global code execution
 *
 * ATTENTION FOR THE NEXT DEV - THIS FUNCTION CAN BE MISSUSED FOR XSS ATACKS IF NOT USED PROPERLY
 */
class CustomStyleIO {
    constructor() {
        this.customTemplate = undefined;
        let customTemplateFromStore = localStorage.getItem('customTemplate');
        if (customTemplateFromStore != undefined) {
            customTemplateFromStore = this.preventXSS(customTemplateFromStore);
            try {
                this.customTemplate = JSON.parse(customTemplateFromStore);
            }
            catch (e) {
                console.error("Custom Template was not valid JSON!");
                return;
            }
            if (!(this.customTemplate.isSet == true ||
                this.customTemplate.isSet == false)) {
                console.error("Custom Template was not valid!", this.customTemplate);
                return;
            }
            if (this.customTemplate.isSet == false) {
                console.debug("Custom Template was valid but the isSet property is on false.");
                return;
            }
            window.customStyle = this.customTemplate;
        }
        else {
            console.debug("No CustomTemplate was set.");
        }
    }
    /**
     * sets the custom template to the local storage
     * and will reload the page!
     *
     * this template will be opened by nex reload
     * @param  {string} template
     */
    setCustomTemplate(template) {
        localStorage.setItem('customTemplate', this.preventXSS(template));
        location.reload();
    }
    /**
     * prevents XSS by deleting all < and >
     *
     * @param  {string} template
     */
    preventXSS(template) {
        template = template.split('<').join("/*ERROR -< is not allowed in custom Templates!-*/");
        template = template.split('>').join("/*ERROR -> is not allowed in custom Templates!-*/");
        return template;
    }
}


/***/ }),

/***/ "./src/logic/PasswordStore.ts":
/*!************************************!*\
  !*** ./src/logic/PasswordStore.ts ***!
  \************************************/
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
/* harmony import */ var logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! logic/CustomStyleIO */ "./src/logic/CustomStyleIO.ts");
/* harmony import */ var components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/login */ "./src/components/login.ts");
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ "./src/components/header.ts");
/**
 * GitHub: https://github.com/wikinota/wikinota
 * License: GNU Affero General Public License v3.0
 */



new logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__["default"];
customElements.define('login-com', components_login__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('header-com', components_header__WEBPACK_IMPORTED_MODULE_2__["default"]);
console.debug("XXXXX FIRST RENDER FINISHED XXXXX");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DdXN0b21TdHlsZUlPLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9QYXNzd29yZFN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJ3b3JrZXIvaGFzaGVyLndvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEyQztBQUU1QixNQUFNLFNBQVUsU0FBUSxXQUFXO0lBRzlDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFIWixrQkFBYSxHQUFlLFNBQVM7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T0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9CQUFvQixDQUFDLE9BQU8sR0FBRyxLQUFLO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDM0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztHQUdHO0FBRWdEO0FBQ1g7QUFDRTtBQUMxQyxJQUFJLDJEQUFnQixDQUFDO0FBR3JCLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLHdEQUFRLENBQUMsQ0FBQztBQUM3QyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSx5REFBUyxDQUFDLENBQUM7QUFFL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNkbkQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE9BQU8sSUFBSSxNQUFNLENBQUMscUJBQXVCLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQge2NTdHlsZX0gZnJvbSBcImxvZ2ljL0N1c3RvbVN0eWxlSU9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQ29tIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHNoYWRvd1Jvb3REb206IFNoYWRvd1Jvb3QgPSB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3REb20gPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgdGhpcy5uZXdSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9zZWRTdHlsZSgpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gYFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmYTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzYzBmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgcGFkZGluZzowIDVweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgI3NlYXJjaEJhciBpbnB1dCxcbiAgICAgICAgI3NlYXJjaEJhciAuZmEtdGltZXMge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gLmZhLXNlYXJjaCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgI3NlYXJjaEJhci5vcGVuIC5mYS10aW1lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMCUpO1xuICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlICsgXCJcXG5cIiArIGNTdHlsZS5oZWFkZXI7XG4gICAgfVxuXG4gICAgbmV3UmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5zaGFkb3dSb290RG9tXG5cbiAgICAgICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzdHlsZT4ke3RoaXMuY29tcG9zZWRTdHlsZX08L3N0eWxlPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS42LjMvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtVUhSdFpMSStwYnh0SENXcDF0NzdCaTFMNFp0aXFycUQ4MEtuNFo4TlRTUnlNQTJGZDMzbjVkUThsV1VFMDBzL1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XG4gICAgICAgIDxoZWFkZXI+PHNwYW4gaWQ9XCJzZWFyY2hCYXJcIj48aW5wdXQ+PC9pbnB1dD48aSBpZD1cInNlYXJjaEJhckNsb3NlQnV0dG9uXCIgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PGkgaWQ9XCJzZWFyY2hCYXJCdXR0b25cIiBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9zcGFuPjwvaGVhZGVyPlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIik7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckJ1dHRvbiA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyQ2xvc2VCdXR0b24gPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyQ2xvc2VCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFdvcmtlckhhc2ggZnJvbSAnd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMnO1xuaW1wb3J0IFBhc3N3b3JkU3RvcmUgZnJvbSAnbG9naWMvUGFzc3dvcmRTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Db20gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblx0ZW1haWxGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0cGFzc3dvcmQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdHNlbmQ6IEhUTUxCdXR0b25FbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRsb2FkaW5nSW5kaWNhdG9yOiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0aGFzaE91dHB1dDogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGhhc2hXb3JrZXI6IFdvcmtlcjtcblxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXG5cdFx0Y29uc3Qgc3R5bGVzID0gYFxuXHRcdFx0Omhvc3QgIHtcblx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0fVxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogZmE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM2MwZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXHRcdFx0fVxuXHRcdFx0I2xvYWRpbmdJbmRpY2F0b3Ige1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdFx0I2hhc2hPdXRwdXQge1xuXHRcdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdFx0XHR9XG4gICAgICAgIGA7XG5cblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdHlsZT4ke3N0eWxlc308L3N0eWxlPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IGlkPVwiZW1haWxcIj48L2lucHV0PlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJzZW5kXCI+U2VuZDwvYnV0dG9uPlxuXHRcdFx0XHQ8ZGl2IGlkPVwibG9hZGluZ0luZGljYXRvclwiPkxvYWRpbmfigKY8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBpZD1cImhhc2hPdXRwdXRcIj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0XHR0aGlzLmVtYWlsRmllbGQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcblx0XHR0aGlzLnNlbmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3NlbmQnKTtcblx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2xvYWRpbmdJbmRpY2F0b3InKTtcblx0XHR0aGlzLmhhc2hPdXRwdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2hhc2hPdXRwdXQnKTtcblxuXHRcdHRoaXMuc2VuZC5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGVIYXNoKCk7XG5cdFx0fTtcblx0fVxuXG5cdGNhbGN1bGF0ZUhhc2goKSB7XG5cdFx0aWYgKHRoaXMuaGFzaFdvcmtlciAhPSB1bmRlZmluZWQpIHRoaXMuaGFzaFdvcmtlci50ZXJtaW5hdGUoKTtcblxuXHRcdHRoaXMuaGFzaFdvcmtlciA9IG5ldyBXb3JrZXJIYXNoKCk7XG5cdFx0dGhpcy5oYXNoV29ya2VyLnBvc3RNZXNzYWdlKFt0aGlzLmVtYWlsRmllbGQudmFsdWUsIHRoaXMucGFzc3dvcmQudmFsdWVdKTtcblx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdHRoaXMuaGFzaFdvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgcHdzdG9yZSA9IG5ldyBQYXNzd29yZFN0b3JlKCk7XG5cdFx0XHRwd3N0b3JlLnVzZXJQdyA9IGUuZGF0YTtcblx0XHRcdHRoaXMuaGFzaE91dHB1dC50ZXh0Q29udGVudCA9IGUuZGF0YTtcblx0XHRcdHRoaXMubG9hZGluZ0luZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fTtcblx0fVxufSIsImV4cG9ydCBjb25zdCBjU3R5bGUgPSBuZXcgUHJveHkoKHt9IGFzIEN1c3RvbVN0eWxlKSwge1xuICAgIGdldCh0YXJnZXQsIG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdHlsZUlPID0gbmV3IEN1c3RvbVN0eWxlSU87XG4gICAgICAgIGlmIChzdHlsZUlPLmN1c3RvbVRlbXBsYXRlID09PSB1bmRlZmluZWQgfHwgKHN0eWxlSU8gYXMgYW55KS5jdXN0b21UZW1wbGF0ZVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHN0eWxlSU8gYXMgYW55KS5jdXN0b21UZW1wbGF0ZVtuYW1lXTtcbiAgICB9XG59KVxuXG4vKipcbiAqIHNldHMgdGhlIGN1c3RvbSBzdHlsZXMgLSBuZWVkcyB0byBiZSBleGVjdXRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBnbG9iYWwgY29kZSBleGVjdXRpb25cbiAqIFxuICogQVRURU5USU9OIEZPUiBUSEUgTkVYVCBERVYgLSBUSElTIEZVTkNUSU9OIENBTiBCRSBNSVNTVVNFRCBGT1IgWFNTIEFUQUNLUyBJRiBOT1QgVVNFRCBQUk9QRVJMWVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TdHlsZUlPIHtcbiAgICBjdXN0b21UZW1wbGF0ZTogQ3VzdG9tU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXN0b21UZW1wbGF0ZScpO1xuICAgICAgICBpZiAoY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUgIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlID0gdGhpcy5wcmV2ZW50WFNTKGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21UZW1wbGF0ZSA9IEpTT04ucGFyc2UoY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIFRlbXBsYXRlIHdhcyBub3QgdmFsaWQgSlNPTiFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShcbiAgICAgICAgICAgICAgICAodGhpcy5jdXN0b21UZW1wbGF0ZSBhcyBhbnkpLmlzU2V0ID09IHRydWUgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5jdXN0b21UZW1wbGF0ZSBhcyBhbnkpLmlzU2V0ID09IGZhbHNlXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBUZW1wbGF0ZSB3YXMgbm90IHZhbGlkIVwiLCB0aGlzLmN1c3RvbVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHRoaXMuY3VzdG9tVGVtcGxhdGUgYXMgYW55KS5pc1NldCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJDdXN0b20gVGVtcGxhdGUgd2FzIHZhbGlkIGJ1dCB0aGUgaXNTZXQgcHJvcGVydHkgaXMgb24gZmFsc2UuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmN1c3RvbVN0eWxlID0gdGhpcy5jdXN0b21UZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJObyBDdXN0b21UZW1wbGF0ZSB3YXMgc2V0LlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBzZXRzIHRoZSBjdXN0b20gdGVtcGxhdGUgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiBhbmQgd2lsbCByZWxvYWQgdGhlIHBhZ2UhXG4gICAgICogXG4gICAgICogdGhpcyB0ZW1wbGF0ZSB3aWxsIGJlIG9wZW5lZCBieSBuZXggcmVsb2FkXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIHNldEN1c3RvbVRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1c3RvbVRlbXBsYXRlJywgdGhpcy5wcmV2ZW50WFNTKHRlbXBsYXRlKSk7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXZlbnRzIFhTUyBieSBkZWxldGluZyBhbGwgPCBhbmQgPlxuICAgICAqIFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGVtcGxhdGVcbiAgICAgKi9cbiAgICBwcmV2ZW50WFNTKHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5zcGxpdCgnPCcpLmpvaW4oXCIvKkVSUk9SIC08IGlzIG5vdCBhbGxvd2VkIGluIGN1c3RvbSBUZW1wbGF0ZXMhLSovXCIpO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnNwbGl0KCc+Jykuam9pbihcIi8qRVJST1IgLT4gaXMgbm90IGFsbG93ZWQgaW4gY3VzdG9tIFRlbXBsYXRlcyEtKi9cIik7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRTdG9yZSB7XG4gICAgZGJSZXF1ZXN0OiBJREJSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgIHVzZXJEQjogSURCRGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgdXNlck9CUzogSURCT2JqZWN0U3RvcmUgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuaW5kZXhlZERCKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGEgc3RhYmxlIHZlcnNpb24gb2YgSW5kZXhlZERCLiBTdWNoIGFuZCBzdWNoIGZlYXR1cmUgd2lsbCBub3QgYmUgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRiUmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3BlbihcInVzZXJEYXRhXCIsIDMpO1xuICAgICAgICB0aGlzLmRiUmVxdWVzdC5vbmVycm9yID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgLSBieSBvcGVuaW5nIHRoZSBVc2VyRGF0YUJhc2UgLT5cIiwgZXYpO1xuICAgICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCBXcm9uZyEgLSBwbGVhc2UgcmVsb2FkIHRoZSBBUFAgLS0tIEVSUk9SXCIgKyBcIiBieSBvcGVuaW5nIHRoZSBVc2VyRGF0YUJhc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYlJlcXVlc3Qub25zdWNjZXNzID0gKGV2OiBFdmVudCAmIHsgdGFyZ2V0OiB7IHJlc3VsdDogSURCRGF0YWJhc2UgfSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEQiA9IGV2LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnVzZXJPQlMgPSB0aGlzLnVzZXJEQi5jcmVhdGVPYmplY3RTdG9yZShcInVzZXJMb2dpbkRhdGFcIiwgeyBrZXlQYXRoOiBcInNzblwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdXNlclB3IGludG8gdGhlIGluZGV4REJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlucHV0IC0gdGhlIGhhc2ggb3cgdGhlIHVzZXJQV1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB1c2VyUHcoaW5wdXQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0lmRGJJc1VuZGVmaW5lZCgpKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTYXZlZCB1c2VyUHdIYXNoLT5cIiwgeyBpbnB1dCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVja3MgaWYgdGhlIHBhcmFtZXRlciB0aGlzLmlEQiBpcyB1bmRlZmluZWRcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHVuZGVmaW5lZCB8IGZhbHNlIGlmIGRlZmluZWRcbiAgICAgKi9cbiAgICBjaGVja0lmRGJJc1VuZGVmaW5lZChyZWNoZWNrID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckRCID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiAtIERCIGlzIG5vdCBvcGVuIGluIGNsYXNzIFBhc3N3b3JkU3RvcmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59IiwiLyoqXG4gKiBHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbm90YS93aWtpbm90YVxuICogTGljZW5zZTogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjBcbiAqL1xuXG5pbXBvcnQgQ3VzdG9tVGVtcGxhdGVJTyBmcm9tIFwibG9naWMvQ3VzdG9tU3R5bGVJT1wiO1xuaW1wb3J0IGxvZ2luQ29tIGZyb20gXCJjb21wb25lbnRzL2xvZ2luXCI7XG5pbXBvcnQgaGVhZGVyQ29tIGZyb20gXCJjb21wb25lbnRzL2hlYWRlclwiO1xubmV3IEN1c3RvbVRlbXBsYXRlSU87XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2dpbi1jb20nLCBsb2dpbkNvbSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hlYWRlci1jb20nLCBoZWFkZXJDb20pO1xuXG5jb25zb2xlLmRlYnVnKFwiWFhYWFggRklSU1QgUkVOREVSIEZJTklTSEVEIFhYWFhYXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YWJjYTgyMzhkN2MyY2JlM2E3ZS53b3JrZXIuanNcIik7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=