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
        if (customTemplateFromStore == undefined || customTemplateFromStore == "") {
            console.debug("No CustomTemplate was set.");
            return;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DdXN0b21TdHlsZUlPLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9QYXNzd29yZFN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJ3b3JrZXIvaGFzaGVyLndvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE2QztBQUU5QixNQUFNLFNBQVUsU0FBUSxXQUFXO0lBRzlDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFIWixrQkFBYSxHQUFlLFNBQVM7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QUUsT0FBTztRQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0JBQW9CLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0dBR0c7QUFFZ0Q7QUFDWDtBQUNFO0FBQzFDLElBQUksMkRBQWdCLENBQUM7QUFHckIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsd0RBQVEsQ0FBQyxDQUFDO0FBQzdDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLHlEQUFTLENBQUMsQ0FBQztBQUUvQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2RuRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxxQkFBdUIsR0FBRyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IGNTdHlsZSB9IGZyb20gXCJsb2dpYy9DdXN0b21TdHlsZUlPXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzaGFkb3dSb290RG9tOiBTaGFkb3dSb290ID0gdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290RG9tID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHRoaXMubmV3UmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvc2VkU3R5bGUoKSB7XG4gICAgICAgIGxldCBzdHlsZSA9IGBcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICBmb250LWZhbWlseTogZmE7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNjMGZmO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyIGlucHV0LFxuICAgICAgICAjc2VhcmNoQmFyIC5mYS10aW1lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICNzZWFyY2hCYXIub3BlbiBpbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB9XG4gICAgICAgICNzZWFyY2hCYXIub3BlbiAuZmEtc2VhcmNoIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gLmZhLXRpbWVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7XG4gICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gc3R5bGUgKyBcIlxcblwiICsgY1N0eWxlLmhlYWRlcjtcbiAgICB9XG5cbiAgICBuZXdSZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLnNoYWRvd1Jvb3REb21cblxuICAgICAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN0eWxlPiR7dGhpcy5jb21wb3NlZFN0eWxlfTwvc3R5bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZUA1LjYuMy9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtMHQvSlYwVnFWVHd4TEFpTU43SW5EMmtGK2hyZU0rczFGeW5FVEFFL2QyMXFHSzdEdVRqWkdKK1FUQjNCRENWL1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XG4gICAgICAgIDxoZWFkZXI+PHNwYW4gaWQ9XCJzZWFyY2hCYXJcIj48aW5wdXQ+PC9pbnB1dD48aSBpZD1cInNlYXJjaEJhckNsb3NlQnV0dG9uXCIgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PGkgaWQ9XCJzZWFyY2hCYXJCdXR0b25cIiBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9zcGFuPjwvaGVhZGVyPlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIik7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckJ1dHRvbiA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyQ2xvc2VCdXR0b24gPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyQ2xvc2VCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFdvcmtlckhhc2ggZnJvbSAnd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMnO1xuaW1wb3J0IFBhc3N3b3JkU3RvcmUgZnJvbSAnbG9naWMvUGFzc3dvcmRTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Db20gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cblx0ZW1haWxGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0cGFzc3dvcmQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdHNlbmQ6IEhUTUxCdXR0b25FbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRsb2FkaW5nSW5kaWNhdG9yOiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0aGFzaE91dHB1dDogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGhhc2hXb3JrZXI6IFdvcmtlcjtcblxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXG5cdFx0Y29uc3Qgc3R5bGVzID0gYFxuXHRcdFx0Omhvc3QgIHtcblx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0fVxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogZmE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM2MwZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXHRcdFx0fVxuXHRcdFx0I2xvYWRpbmdJbmRpY2F0b3Ige1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdFx0I2hhc2hPdXRwdXQge1xuXHRcdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdFx0XHR9XG4gICAgICAgIGA7XG5cblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdHlsZT4ke3N0eWxlc308L3N0eWxlPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IGlkPVwiZW1haWxcIj48L2lucHV0PlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJzZW5kXCI+U2VuZDwvYnV0dG9uPlxuXHRcdFx0XHQ8ZGl2IGlkPVwibG9hZGluZ0luZGljYXRvclwiPkxvYWRpbmfigKY8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBpZD1cImhhc2hPdXRwdXRcIj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0XHR0aGlzLmVtYWlsRmllbGQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcblx0XHR0aGlzLnNlbmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3NlbmQnKTtcblx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2xvYWRpbmdJbmRpY2F0b3InKTtcblx0XHR0aGlzLmhhc2hPdXRwdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2hhc2hPdXRwdXQnKTtcblxuXHRcdHRoaXMuc2VuZC5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGVIYXNoKCk7XG5cdFx0fTtcblx0fVxuXG5cdGNhbGN1bGF0ZUhhc2goKSB7XG5cdFx0aWYgKHRoaXMuaGFzaFdvcmtlciAhPSB1bmRlZmluZWQpIHRoaXMuaGFzaFdvcmtlci50ZXJtaW5hdGUoKTtcblxuXHRcdHRoaXMuaGFzaFdvcmtlciA9IG5ldyBXb3JrZXJIYXNoKCk7XG5cdFx0dGhpcy5oYXNoV29ya2VyLnBvc3RNZXNzYWdlKFt0aGlzLmVtYWlsRmllbGQudmFsdWUsIHRoaXMucGFzc3dvcmQudmFsdWVdKTtcblx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdHRoaXMuaGFzaFdvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgcHdzdG9yZSA9IG5ldyBQYXNzd29yZFN0b3JlKCk7XG5cdFx0XHRwd3N0b3JlLnVzZXJQdyA9IGUuZGF0YTtcblx0XHRcdHRoaXMuaGFzaE91dHB1dC50ZXh0Q29udGVudCA9IGUuZGF0YTtcblx0XHRcdHRoaXMubG9hZGluZ0luZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fTtcblx0fVxufSIsImV4cG9ydCBjb25zdCBjU3R5bGUgPSBuZXcgUHJveHkoKHt9IGFzIEN1c3RvbVN0eWxlKSwge1xuICAgIGdldCh0YXJnZXQsIG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdHlsZUlPID0gbmV3IEN1c3RvbVN0eWxlSU87XG4gICAgICAgIGlmIChzdHlsZUlPLmN1c3RvbVRlbXBsYXRlID09PSB1bmRlZmluZWQgfHwgKHN0eWxlSU8gYXMgYW55KS5jdXN0b21UZW1wbGF0ZVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHN0eWxlSU8gYXMgYW55KS5jdXN0b21UZW1wbGF0ZVtuYW1lXTtcbiAgICB9XG59KVxuXG4vKipcbiAqIHNldHMgdGhlIGN1c3RvbSBzdHlsZXMgLSBuZWVkcyB0byBiZSBleGVjdXRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBnbG9iYWwgY29kZSBleGVjdXRpb25cbiAqIFxuICogQVRURU5USU9OIEZPUiBUSEUgTkVYVCBERVYgLSBUSElTIEZVTkNUSU9OIENBTiBCRSBNSVNTVVNFRCBGT1IgWFNTIEFUQUNLUyBJRiBOT1QgVVNFRCBQUk9QRVJMWVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TdHlsZUlPIHtcbiAgICBjdXN0b21UZW1wbGF0ZTogQ3VzdG9tU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXN0b21UZW1wbGF0ZScpO1xuICAgICAgICBpZiAoY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUgPT0gdW5kZWZpbmVkIHx8IGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJObyBDdXN0b21UZW1wbGF0ZSB3YXMgc2V0LlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlID0gdGhpcy5wcmV2ZW50WFNTKGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGUgPSBKU09OLnBhcnNlKGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBUZW1wbGF0ZSB3YXMgbm90IHZhbGlkIEpTT04hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEoXG4gICAgICAgICAgICAodGhpcy5jdXN0b21UZW1wbGF0ZSBhcyBhbnkpLmlzU2V0ID09IHRydWUgfHxcbiAgICAgICAgICAgICh0aGlzLmN1c3RvbVRlbXBsYXRlIGFzIGFueSkuaXNTZXQgPT0gZmFsc2VcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBUZW1wbGF0ZSB3YXMgbm90IHZhbGlkIVwiLCB0aGlzLmN1c3RvbVRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuY3VzdG9tVGVtcGxhdGUgYXMgYW55KS5pc1NldCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkN1c3RvbSBUZW1wbGF0ZSB3YXMgdmFsaWQgYnV0IHRoZSBpc1NldCBwcm9wZXJ0eSBpcyBvbiBmYWxzZS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuY3VzdG9tU3R5bGUgPSB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIGN1c3RvbSB0ZW1wbGF0ZSB0byB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAqIGFuZCB3aWxsIHJlbG9hZCB0aGUgcGFnZSFcbiAgICAgKiBcbiAgICAgKiB0aGlzIHRlbXBsYXRlIHdpbGwgYmUgb3BlbmVkIGJ5IG5leCByZWxvYWRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAgICovXG4gICAgc2V0Q3VzdG9tVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VzdG9tVGVtcGxhdGUnLCB0aGlzLnByZXZlbnRYU1ModGVtcGxhdGUpKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJldmVudHMgWFNTIGJ5IGRlbGV0aW5nIGFsbCA8IGFuZCA+XG4gICAgICogXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIHByZXZlbnRYU1ModGVtcGxhdGU6IHN0cmluZykge1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnNwbGl0KCc8Jykuam9pbihcIi8qRVJST1IgLTwgaXMgbm90IGFsbG93ZWQgaW4gY3VzdG9tIFRlbXBsYXRlcyEtKi9cIik7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuc3BsaXQoJz4nKS5qb2luKFwiLypFUlJPUiAtPiBpcyBub3QgYWxsb3dlZCBpbiBjdXN0b20gVGVtcGxhdGVzIS0qL1wiKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZFN0b3JlIHtcbiAgICBkYlJlcXVlc3Q6IElEQlJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgdXNlckRCOiBJREJEYXRhYmFzZSA9IHVuZGVmaW5lZDtcbiAgICB1c2VyT0JTOiBJREJPYmplY3RTdG9yZSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5pbmRleGVkREIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYSBzdGFibGUgdmVyc2lvbiBvZiBJbmRleGVkREIuIFN1Y2ggYW5kIHN1Y2ggZmVhdHVyZSB3aWxsIG5vdCBiZSBhdmFpbGFibGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGJSZXF1ZXN0ID0gd2luZG93LmluZGV4ZWREQi5vcGVuKFwidXNlckRhdGFcIiwgMyk7XG4gICAgICAgIHRoaXMuZGJSZXF1ZXN0Lm9uZXJyb3IgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiAtIGJ5IG9wZW5pbmcgdGhlIFVzZXJEYXRhQmFzZSAtPlwiLCBldik7XG4gICAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IFdyb25nISAtIHBsZWFzZSByZWxvYWQgdGhlIEFQUCAtLS0gRVJST1JcIiArIFwiIGJ5IG9wZW5pbmcgdGhlIFVzZXJEYXRhQmFzZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRiUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXY6IEV2ZW50ICYgeyB0YXJnZXQ6IHsgcmVzdWx0OiBJREJEYXRhYmFzZSB9IH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckRCID0gZXYudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMudXNlck9CUyA9IHRoaXMudXNlckRCLmNyZWF0ZU9iamVjdFN0b3JlKFwidXNlckxvZ2luRGF0YVwiLCB7IGtleVBhdGg6IFwic3NuXCIgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZXRzIHRoZSB1c2VyUHcgaW50byB0aGUgaW5kZXhEQlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gaW5wdXQgLSB0aGUgaGFzaCBvdyB0aGUgdXNlclBXXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHVzZXJQdyhpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrSWZEYklzVW5kZWZpbmVkKCkpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNhdmVkIHVzZXJQd0hhc2gtPlwiLCB7IGlucHV0IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0aGUgcGFyYW1ldGVyIHRoaXMuaURCIGlzIHVuZGVmaW5lZFxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdW5kZWZpbmVkIHwgZmFsc2UgaWYgZGVmaW5lZFxuICAgICAqL1xuICAgIGNoZWNrSWZEYklzVW5kZWZpbmVkKHJlY2hlY2sgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy51c2VyREIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SIC0gREIgaXMgbm90IG9wZW4gaW4gY2xhc3MgUGFzc3dvcmRTdG9yZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn0iLCIvKipcbiAqIEdpdEh1YjogaHR0cHM6Ly9naXRodWIuY29tL3dpa2lub3RhL3dpa2lub3RhXG4gKiBMaWNlbnNlOiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMFxuICovXG5cbmltcG9ydCBDdXN0b21UZW1wbGF0ZUlPIGZyb20gXCJsb2dpYy9DdXN0b21TdHlsZUlPXCI7XG5pbXBvcnQgbG9naW5Db20gZnJvbSBcImNvbXBvbmVudHMvbG9naW5cIjtcbmltcG9ydCBoZWFkZXJDb20gZnJvbSBcImNvbXBvbmVudHMvaGVhZGVyXCI7XG5uZXcgQ3VzdG9tVGVtcGxhdGVJTztcblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xvZ2luLWNvbScsIGxvZ2luQ29tKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGVhZGVyLWNvbScsIGhlYWRlckNvbSk7XG5cbmNvbnNvbGUuZGVidWcoXCJYWFhYWCBGSVJTVCBSRU5ERVIgRklOSVNIRUQgWFhYWFhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjlhYmNhODIzOGQ3YzJjYmUzYTdlLndvcmtlci5qc1wiKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==