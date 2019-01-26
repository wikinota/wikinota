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
            width: calc(100% - 10px);
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DdXN0b21TdHlsZUlPLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9QYXNzd29yZFN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJ3b3JrZXIvaGFzaGVyLndvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE2QztBQUU5QixNQUFNLFNBQVUsU0FBUSxXQUFXO0lBRzlDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFIWixrQkFBYSxHQUFlLFNBQVM7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T0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9CQUFvQixDQUFDLE9BQU8sR0FBRyxLQUFLO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDM0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztHQUdHO0FBRWdEO0FBQ1g7QUFDRTtBQUMxQyxJQUFJLDJEQUFnQixDQUFDO0FBR3JCLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLHdEQUFRLENBQUMsQ0FBQztBQUM3QyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSx5REFBUyxDQUFDLENBQUM7QUFFL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNkbkQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE9BQU8sSUFBSSxNQUFNLENBQUMscUJBQXVCLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBjU3R5bGUgfSBmcm9tIFwibG9naWMvQ3VzdG9tU3R5bGVJT1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb20gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgc2hhZG93Um9vdERvbTogU2hhZG93Um9vdCA9IHVuZGVmaW5lZFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdERvbSA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB0aGlzLm5ld1JlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBjb21wb3NlZFN0eWxlKCkge1xuICAgICAgICBsZXQgc3R5bGUgPSBgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZhO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzYzBmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgcGFkZGluZzowIDVweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgI3NlYXJjaEJhciBpbnB1dCxcbiAgICAgICAgI3NlYXJjaEJhciAuZmEtdGltZXMge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gLmZhLXNlYXJjaCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgI3NlYXJjaEJhci5vcGVuIC5mYS10aW1lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMCUpO1xuICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlICsgXCJcXG5cIiArIGNTdHlsZS5oZWFkZXI7XG4gICAgfVxuXG4gICAgbmV3UmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5zaGFkb3dSb290RG9tXG5cbiAgICAgICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzdHlsZT4ke3RoaXMuY29tcG9zZWRTdHlsZX08L3N0eWxlPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWVANS42LjMvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTB0L0pWMFZxVlR3eExBaU1ON0luRDJrRitocmVNK3MxRnluRVRBRS9kMjFxR0s3RHVUalpHSitRVEIzQkRDVi9cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxuICAgICAgICA8aGVhZGVyPjxzcGFuIGlkPVwic2VhcmNoQmFyXCI+PGlucHV0PjwvaW5wdXQ+PGkgaWQ9XCJzZWFyY2hCYXJDbG9zZUJ1dHRvblwiIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjxpIGlkPVwic2VhcmNoQmFyQnV0dG9uXCIgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvc3Bhbj48L2hlYWRlcj5cbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpO1xuICAgICAgICBjb25zdCBzZWFyY2hCYXJCdXR0b24gPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyQnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCYXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckNsb3NlQnV0dG9uID0gc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhckNsb3NlQnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCYXJDbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBXb3JrZXJIYXNoIGZyb20gJ3dlYndvcmtlci9oYXNoZXIud29ya2VyLnRzJztcbmltcG9ydCBQYXNzd29yZFN0b3JlIGZyb20gJ2xvZ2ljL1Bhc3N3b3JkU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luQ29tIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGVtYWlsRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdHBhc3N3b3JkOiBIVE1MSW5wdXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRzZW5kOiBIVE1MQnV0dG9uRWxlbWVudCA9IHVuZGVmaW5lZDtcblx0bG9hZGluZ0luZGljYXRvcjogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGhhc2hPdXRwdXQ6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRoYXNoV29ya2VyOiBXb3JrZXI7XG5cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblxuXHRcdGNvbnN0IHN0eWxlcyA9IGBcblx0XHRcdDpob3N0ICB7XG5cdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdH1cbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZhO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNjMGZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdH1cblx0XHRcdCNsb2FkaW5nSW5kaWNhdG9yIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHRcdCNoYXNoT3V0cHV0IHtcblx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0fVxuICAgICAgICBgO1xuXG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3R5bGU+JHtzdHlsZXN9PC9zdHlsZT5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbnB1dCBpZD1cImVtYWlsXCI+PC9pbnB1dD5cblx0XHRcdFx0PGlucHV0IGlkPVwicGFzc3dvcmRcIj48L2lucHV0PlxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwic2VuZFwiPlNlbmQ8L2J1dHRvbj5cblx0XHRcdFx0PGRpdiBpZD1cImxvYWRpbmdJbmRpY2F0b3JcIj5Mb2FkaW5n4oCmPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgaWQ9XCJoYXNoT3V0cHV0XCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdFx0dGhpcy5lbWFpbEZpZWxkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuXHRcdHRoaXMucGFzc3dvcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5cdFx0dGhpcy5zZW5kID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzZW5kJyk7XG5cdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nSW5kaWNhdG9yJyk7XG5cdFx0dGhpcy5oYXNoT3V0cHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNoYXNoT3V0cHV0Jyk7XG5cblx0XHR0aGlzLnNlbmQub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY2FsY3VsYXRlSGFzaCgpO1xuXHRcdH07XG5cdH1cblxuXHRjYWxjdWxhdGVIYXNoKCkge1xuXHRcdGlmICh0aGlzLmhhc2hXb3JrZXIgIT0gdW5kZWZpbmVkKSB0aGlzLmhhc2hXb3JrZXIudGVybWluYXRlKCk7XG5cblx0XHR0aGlzLmhhc2hXb3JrZXIgPSBuZXcgV29ya2VySGFzaCgpO1xuXHRcdHRoaXMuaGFzaFdvcmtlci5wb3N0TWVzc2FnZShbdGhpcy5lbWFpbEZpZWxkLnZhbHVlLCB0aGlzLnBhc3N3b3JkLnZhbHVlXSk7XG5cdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblx0XHR0aGlzLmhhc2hXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcblx0XHRcdGNvbnN0IHB3c3RvcmUgPSBuZXcgUGFzc3dvcmRTdG9yZSgpO1xuXHRcdFx0cHdzdG9yZS51c2VyUHcgPSBlLmRhdGE7XG5cdFx0XHR0aGlzLmhhc2hPdXRwdXQudGV4dENvbnRlbnQgPSBlLmRhdGE7XG5cdFx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH07XG5cdH1cbn0iLCJleHBvcnQgY29uc3QgY1N0eWxlID0gbmV3IFByb3h5KCh7fSBhcyBDdXN0b21TdHlsZSksIHtcbiAgICBnZXQodGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJTyA9IG5ldyBDdXN0b21TdHlsZUlPO1xuICAgICAgICBpZiAoc3R5bGVJTy5jdXN0b21UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkIHx8IChzdHlsZUlPIGFzIGFueSkuY3VzdG9tVGVtcGxhdGVbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzdHlsZUlPIGFzIGFueSkuY3VzdG9tVGVtcGxhdGVbbmFtZV07XG4gICAgfVxufSlcblxuLyoqXG4gKiBzZXRzIHRoZSBjdXN0b20gc3R5bGVzIC0gbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ2xvYmFsIGNvZGUgZXhlY3V0aW9uXG4gKiBcbiAqIEFUVEVOVElPTiBGT1IgVEhFIE5FWFQgREVWIC0gVEhJUyBGVU5DVElPTiBDQU4gQkUgTUlTU1VTRUQgRk9SIFhTUyBBVEFDS1MgSUYgTk9UIFVTRUQgUFJPUEVSTFlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU3R5bGVJTyB7XG4gICAgY3VzdG9tVGVtcGxhdGU6IEN1c3RvbVN0eWxlID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tVGVtcGxhdGUnKTtcbiAgICAgICAgaWYgKGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9IHRoaXMucHJldmVudFhTUyhjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGUgPSBKU09OLnBhcnNlKGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBUZW1wbGF0ZSB3YXMgbm90IHZhbGlkIEpTT04hXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEoXG4gICAgICAgICAgICAgICAgKHRoaXMuY3VzdG9tVGVtcGxhdGUgYXMgYW55KS5pc1NldCA9PSB0cnVlIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuY3VzdG9tVGVtcGxhdGUgYXMgYW55KS5pc1NldCA9PSBmYWxzZVxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gVGVtcGxhdGUgd2FzIG5vdCB2YWxpZCFcIiwgdGhpcy5jdXN0b21UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0aGlzLmN1c3RvbVRlbXBsYXRlIGFzIGFueSkuaXNTZXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiQ3VzdG9tIFRlbXBsYXRlIHdhcyB2YWxpZCBidXQgdGhlIGlzU2V0IHByb3BlcnR5IGlzIG9uIGZhbHNlLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5jdXN0b21TdHlsZSA9IHRoaXMuY3VzdG9tVGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiTm8gQ3VzdG9tVGVtcGxhdGUgd2FzIHNldC5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgY3VzdG9tIHRlbXBsYXRlIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICogYW5kIHdpbGwgcmVsb2FkIHRoZSBwYWdlIVxuICAgICAqIFxuICAgICAqIHRoaXMgdGVtcGxhdGUgd2lsbCBiZSBvcGVuZWQgYnkgbmV4IHJlbG9hZFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGVtcGxhdGVcbiAgICAgKi9cbiAgICBzZXRDdXN0b21UZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXN0b21UZW1wbGF0ZScsIHRoaXMucHJldmVudFhTUyh0ZW1wbGF0ZSkpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcmV2ZW50cyBYU1MgYnkgZGVsZXRpbmcgYWxsIDwgYW5kID5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAgICovXG4gICAgcHJldmVudFhTUyh0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuc3BsaXQoJzwnKS5qb2luKFwiLypFUlJPUiAtPCBpcyBub3QgYWxsb3dlZCBpbiBjdXN0b20gVGVtcGxhdGVzIS0qL1wiKTtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5zcGxpdCgnPicpLmpvaW4oXCIvKkVSUk9SIC0+IGlzIG5vdCBhbGxvd2VkIGluIGN1c3RvbSBUZW1wbGF0ZXMhLSovXCIpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkU3RvcmUge1xuICAgIGRiUmVxdWVzdDogSURCUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICB1c2VyREI6IElEQkRhdGFiYXNlID0gdW5kZWZpbmVkO1xuICAgIHVzZXJPQlM6IElEQk9iamVjdFN0b3JlID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghd2luZG93LmluZGV4ZWREQikge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBhIHN0YWJsZSB2ZXJzaW9uIG9mIEluZGV4ZWREQi4gU3VjaCBhbmQgc3VjaCBmZWF0dXJlIHdpbGwgbm90IGJlIGF2YWlsYWJsZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYlJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oXCJ1c2VyRGF0YVwiLCAzKTtcbiAgICAgICAgdGhpcy5kYlJlcXVlc3Qub25lcnJvciA9IChldikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SIC0gYnkgb3BlbmluZyB0aGUgVXNlckRhdGFCYXNlIC0+XCIsIGV2KTtcbiAgICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgV3JvbmchIC0gcGxlYXNlIHJlbG9hZCB0aGUgQVBQIC0tLSBFUlJPUlwiICsgXCIgYnkgb3BlbmluZyB0aGUgVXNlckRhdGFCYXNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9IChldjogRXZlbnQgJiB7IHRhcmdldDogeyByZXN1bHQ6IElEQkRhdGFiYXNlIH0gfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyREIgPSBldi50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdGhpcy51c2VyT0JTID0gdGhpcy51c2VyREIuY3JlYXRlT2JqZWN0U3RvcmUoXCJ1c2VyTG9naW5EYXRhXCIsIHsga2V5UGF0aDogXCJzc25cIiB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIHVzZXJQdyBpbnRvIHRoZSBpbmRleERCXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBpbnB1dCAtIHRoZSBoYXNoIG93IHRoZSB1c2VyUFdcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgdXNlclB3KGlucHV0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJZkRiSXNVbmRlZmluZWQoKSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2F2ZWQgdXNlclB3SGFzaC0+XCIsIHsgaW5wdXQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2tzIGlmIHRoZSBwYXJhbWV0ZXIgdGhpcy5pREIgaXMgdW5kZWZpbmVkXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB1bmRlZmluZWQgfCBmYWxzZSBpZiBkZWZpbmVkXG4gICAgICovXG4gICAgY2hlY2tJZkRiSXNVbmRlZmluZWQocmVjaGVjayA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJEQiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgLSBEQiBpcyBub3Qgb3BlbiBpbiBjbGFzcyBQYXNzd29yZFN0b3JlXCIpO1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufSIsIi8qKlxuICogR2l0SHViOiBodHRwczovL2dpdGh1Yi5jb20vd2lraW5vdGEvd2lraW5vdGFcbiAqIExpY2Vuc2U6IEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2My4wXG4gKi9cblxuaW1wb3J0IEN1c3RvbVRlbXBsYXRlSU8gZnJvbSBcImxvZ2ljL0N1c3RvbVN0eWxlSU9cIjtcbmltcG9ydCBsb2dpbkNvbSBmcm9tIFwiY29tcG9uZW50cy9sb2dpblwiO1xuaW1wb3J0IGhlYWRlckNvbSBmcm9tIFwiY29tcG9uZW50cy9oZWFkZXJcIjtcbm5ldyBDdXN0b21UZW1wbGF0ZUlPO1xuXG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbG9naW4tY29tJywgbG9naW5Db20pO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWFkZXItY29tJywgaGVhZGVyQ29tKTtcblxuY29uc29sZS5kZWJ1ZyhcIlhYWFhYIEZJUlNUIFJFTkRFUiBGSU5JU0hFRCBYWFhYWFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWFiY2E4MjM4ZDdjMmNiZTNhN2Uud29ya2VyLmpzXCIpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9