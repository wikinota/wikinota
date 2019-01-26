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
        return logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__["cStyle"].general + "\n" + `
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

        ` + "\n" + logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__["cStyle"].header;
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
/* harmony import */ var logic_userData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! logic/userData */ "./src/logic/userData.ts");
/* harmony import */ var logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! logic/CustomStyleIO */ "./src/logic/CustomStyleIO.ts");



class LoginCom extends HTMLElement {
    constructor() {
        super();
        this.emailField = undefined;
        this.password = undefined;
        this.send = undefined;
        this.loadingIndicator = undefined;
        this.hashOutput = undefined;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const styles = logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_2__["cStyle"].general + "\n" + `
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
        ` + "\n" + logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_2__["cStyle"].login;
        shadowRoot.innerHTML = `
            <style>${styles}</style>
			<div>
				<input id="email"></input>
				<input id="password"></input>
				<button id="send">Send</button>
				<div id="loadingIndicator">Loading…</div>
			</div>
			<div id="hashOutput">
			From LocalStorage: <br> ${logic_userData__WEBPACK_IMPORTED_MODULE_1__["default"].pwdHash}
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
            logic_userData__WEBPACK_IMPORTED_MODULE_1__["default"].pwdHash = e.data;
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

/***/ "./src/logic/userData.ts":
/*!*******************************!*\
  !*** ./src/logic/userData.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const userData = new Proxy({}, {
    set(target, name, value) {
        if (typeof value != "string") {
            console.error("ERROR: userData set musst be a string!");
            console.trace();
            return;
        }
        const styleIO = new UserDataIOLogic;
        const oldData = (styleIO.userData == undefined) ? {} : styleIO.userData;
        const tmp = Object.assign(oldData, { [name]: value });
        localStorage.setItem('userData', JSON.stringify(tmp));
        return true;
    },
    get(target, name) {
        const styleIO = new UserDataIOLogic;
        if (styleIO.userData === undefined || styleIO.userData[name] === undefined) {
            return undefined;
        }
        return styleIO.userData[name];
    }
});
class UserDataIOLogic {
    constructor() {
        this.userData = undefined;
        let userDataFromStore = localStorage.getItem('userData');
        if (userDataFromStore == undefined || userDataFromStore == "") {
            console.debug("No userData was set.");
            return;
        }
        try {
            this.userData = JSON.parse(userDataFromStore);
        }
        catch (e) {
            console.error("userData from Store was no valid JSON!");
            return;
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (userData);


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



var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__["cStyle"].general));
document.getElementsByTagName('head')[0].appendChild(style);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DdXN0b21TdHlsZUlPLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy91c2VyRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBNkM7QUFFOUIsTUFBTSxTQUFVLFNBQVEsV0FBVztJQUc5QztRQUNJLEtBQUssRUFBRSxDQUFDO1FBSFosa0JBQWEsR0FBZSxTQUFTO1FBSWpD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RS9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaEJuRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxxQkFBdUIsR0FBRyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IGNTdHlsZSB9IGZyb20gXCJsb2dpYy9DdXN0b21TdHlsZUlPXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzaGFkb3dSb290RG9tOiBTaGFkb3dSb290ID0gdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290RG9tID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHRoaXMubmV3UmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvc2VkU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBjU3R5bGUuZ2VuZXJhbCArIFwiXFxuXCIgKyBgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZhO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzYzBmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgcGFkZGluZzowIDVweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgI3NlYXJjaEJhciBpbnB1dCxcbiAgICAgICAgI3NlYXJjaEJhciAuZmEtdGltZXMge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gLmZhLXNlYXJjaCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgI3NlYXJjaEJhci5vcGVuIC5mYS10aW1lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYCsgXCJcXG5cIiArIGNTdHlsZS5oZWFkZXI7XG4gICAgfVxuXG4gICAgbmV3UmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5zaGFkb3dSb290RG9tXG5cbiAgICAgICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzdHlsZT4ke3RoaXMuY29tcG9zZWRTdHlsZX08L3N0eWxlPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWVANS42LjMvY3NzL2FsbC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTB0L0pWMFZxVlR3eExBaU1ON0luRDJrRitocmVNK3MxRnluRVRBRS9kMjFxR0s3RHVUalpHSitRVEIzQkRDVi9cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxuICAgICAgICA8aGVhZGVyPjxzcGFuIGlkPVwic2VhcmNoQmFyXCI+PGlucHV0PjwvaW5wdXQ+PGkgaWQ9XCJzZWFyY2hCYXJDbG9zZUJ1dHRvblwiIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjxpIGlkPVwic2VhcmNoQmFyQnV0dG9uXCIgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvc3Bhbj48L2hlYWRlcj5cbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpO1xuICAgICAgICBjb25zdCBzZWFyY2hCYXJCdXR0b24gPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyQnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCYXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckNsb3NlQnV0dG9uID0gc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhckNsb3NlQnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCYXJDbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBXb3JrZXJIYXNoIGZyb20gJ3dlYndvcmtlci9oYXNoZXIud29ya2VyLnRzJztcbmltcG9ydCB1c2VyRGF0YSBmcm9tICdsb2dpYy91c2VyRGF0YSc7XG5pbXBvcnQgeyBjU3R5bGUgfSBmcm9tIFwibG9naWMvQ3VzdG9tU3R5bGVJT1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luQ29tIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGVtYWlsRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdHBhc3N3b3JkOiBIVE1MSW5wdXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRzZW5kOiBIVE1MQnV0dG9uRWxlbWVudCA9IHVuZGVmaW5lZDtcblx0bG9hZGluZ0luZGljYXRvcjogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGhhc2hPdXRwdXQ6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRoYXNoV29ya2VyOiBXb3JrZXI7XG5cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblxuXHRcdGNvbnN0IHN0eWxlcyA9IGNTdHlsZS5nZW5lcmFsICsgXCJcXG5cIiArIGBcblx0XHRcdDpob3N0ICB7XG5cdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdH1cbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZhO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNjMGZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdH1cblx0XHRcdCNsb2FkaW5nSW5kaWNhdG9yIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHRcdCNoYXNoT3V0cHV0IHtcblx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0fVxuICAgICAgICBgKyBcIlxcblwiICsgY1N0eWxlLmxvZ2luO1xuXG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3R5bGU+JHtzdHlsZXN9PC9zdHlsZT5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbnB1dCBpZD1cImVtYWlsXCI+PC9pbnB1dD5cblx0XHRcdFx0PGlucHV0IGlkPVwicGFzc3dvcmRcIj48L2lucHV0PlxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwic2VuZFwiPlNlbmQ8L2J1dHRvbj5cblx0XHRcdFx0PGRpdiBpZD1cImxvYWRpbmdJbmRpY2F0b3JcIj5Mb2FkaW5n4oCmPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgaWQ9XCJoYXNoT3V0cHV0XCI+XG5cdFx0XHRGcm9tIExvY2FsU3RvcmFnZTogPGJyPiAke3VzZXJEYXRhLnB3ZEhhc2h9XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdFx0dGhpcy5lbWFpbEZpZWxkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuXHRcdHRoaXMucGFzc3dvcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5cdFx0dGhpcy5zZW5kID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzZW5kJyk7XG5cdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nSW5kaWNhdG9yJyk7XG5cdFx0dGhpcy5oYXNoT3V0cHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNoYXNoT3V0cHV0Jyk7XG5cblx0XHR0aGlzLnNlbmQub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY2FsY3VsYXRlSGFzaCgpO1xuXHRcdH07XG5cdH1cblxuXHRjYWxjdWxhdGVIYXNoKCkge1xuXHRcdGlmICh0aGlzLmhhc2hXb3JrZXIgIT0gdW5kZWZpbmVkKSB0aGlzLmhhc2hXb3JrZXIudGVybWluYXRlKCk7XG5cblx0XHR0aGlzLmhhc2hXb3JrZXIgPSBuZXcgV29ya2VySGFzaCgpO1xuXHRcdHRoaXMuaGFzaFdvcmtlci5wb3N0TWVzc2FnZShbdGhpcy5lbWFpbEZpZWxkLnZhbHVlLCB0aGlzLnBhc3N3b3JkLnZhbHVlXSk7XG5cdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblx0XHR0aGlzLmhhc2hXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcblx0XHRcdHVzZXJEYXRhLnB3ZEhhc2ggPSBlLmRhdGE7XG5cdFx0XHR0aGlzLmhhc2hPdXRwdXQudGV4dENvbnRlbnQgPSBlLmRhdGE7XG5cdFx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH07XG5cdH1cbn0iLCJleHBvcnQgY29uc3QgY1N0eWxlID0gbmV3IFByb3h5KCh7fSBhcyBDdXN0b21TdHlsZSksIHtcbiAgICBnZXQodGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJTyA9IG5ldyBDdXN0b21TdHlsZUlPO1xuICAgICAgICBpZiAoc3R5bGVJTy5jdXN0b21UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkIHx8IChzdHlsZUlPIGFzIGFueSkuY3VzdG9tVGVtcGxhdGVbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzdHlsZUlPIGFzIGFueSkuY3VzdG9tVGVtcGxhdGVbbmFtZV07XG4gICAgfVxufSlcblxuLyoqXG4gKiBzZXRzIHRoZSBjdXN0b20gc3R5bGVzIC0gbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ2xvYmFsIGNvZGUgZXhlY3V0aW9uXG4gKiBcbiAqIEFUVEVOVElPTiBGT1IgVEhFIE5FWFQgREVWIC0gVEhJUyBGVU5DVElPTiBDQU4gQkUgTUlTU1VTRUQgRk9SIFhTUyBBVEFDS1MgSUYgTk9UIFVTRUQgUFJPUEVSTFlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU3R5bGVJTyB7XG4gICAgY3VzdG9tVGVtcGxhdGU6IEN1c3RvbVN0eWxlID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tVGVtcGxhdGUnKTtcbiAgICAgICAgaWYgKGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlID09IHVuZGVmaW5lZCB8fCBjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiTm8gQ3VzdG9tVGVtcGxhdGUgd2FzIHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9IHRoaXMucHJldmVudFhTUyhjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlID0gSlNPTi5wYXJzZShjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gVGVtcGxhdGUgd2FzIG5vdCB2YWxpZCBKU09OIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKFxuICAgICAgICAgICAgKHRoaXMuY3VzdG9tVGVtcGxhdGUgYXMgYW55KS5pc1NldCA9PSB0cnVlIHx8XG4gICAgICAgICAgICAodGhpcy5jdXN0b21UZW1wbGF0ZSBhcyBhbnkpLmlzU2V0ID09IGZhbHNlXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gVGVtcGxhdGUgd2FzIG5vdCB2YWxpZCFcIiwgdGhpcy5jdXN0b21UZW1wbGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0aGlzLmN1c3RvbVRlbXBsYXRlIGFzIGFueSkuaXNTZXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJDdXN0b20gVGVtcGxhdGUgd2FzIHZhbGlkIGJ1dCB0aGUgaXNTZXQgcHJvcGVydHkgaXMgb24gZmFsc2UuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIGN1c3RvbSB0ZW1wbGF0ZSB0byB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAqIGFuZCB3aWxsIHJlbG9hZCB0aGUgcGFnZSFcbiAgICAgKiBcbiAgICAgKiB0aGlzIHRlbXBsYXRlIHdpbGwgYmUgb3BlbmVkIGJ5IG5leCByZWxvYWRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAgICovXG4gICAgc2V0Q3VzdG9tVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VzdG9tVGVtcGxhdGUnLCB0aGlzLnByZXZlbnRYU1ModGVtcGxhdGUpKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJldmVudHMgWFNTIGJ5IGRlbGV0aW5nIGFsbCA8IGFuZCA+XG4gICAgICogXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIHByZXZlbnRYU1ModGVtcGxhdGU6IHN0cmluZykge1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnNwbGl0KCc8Jykuam9pbihcIi8qRVJST1IgLTwgaXMgbm90IGFsbG93ZWQgaW4gY3VzdG9tIFRlbXBsYXRlcyEtKi9cIik7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuc3BsaXQoJz4nKS5qb2luKFwiLypFUlJPUiAtPiBpcyBub3QgYWxsb3dlZCBpbiBjdXN0b20gVGVtcGxhdGVzIS0qL1wiKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn0iLCJpbnRlcmZhY2UgVXNlckRhdGEge1xuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcHdkSGFzaDogc3RyaW5nLFxufVxuXG5jb25zdCB1c2VyRGF0YSA9IG5ldyBQcm94eSgoe30gYXMgVXNlckRhdGEpLCB7XG4gICAgc2V0KHRhcmdldCwgbmFtZSwgdmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjogdXNlckRhdGEgc2V0IG11c3N0IGJlIGEgc3RyaW5nIVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlSU8gPSBuZXcgVXNlckRhdGFJT0xvZ2ljO1xuICAgICAgICBjb25zdCBvbGREYXRhID0gKHN0eWxlSU8udXNlckRhdGEgPT0gdW5kZWZpbmVkKSA/IHt9IDogc3R5bGVJTy51c2VyRGF0YTtcbiAgICAgICAgY29uc3QgdG1wID0gT2JqZWN0LmFzc2lnbihvbGREYXRhLCB7IFtuYW1lXTogdmFsdWUgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHRtcCkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJTyA9IG5ldyBVc2VyRGF0YUlPTG9naWM7XG4gICAgICAgIGlmIChzdHlsZUlPLnVzZXJEYXRhID09PSB1bmRlZmluZWQgfHwgKHN0eWxlSU8gYXMgYW55KS51c2VyRGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoc3R5bGVJTyBhcyBhbnkpLnVzZXJEYXRhW25hbWVdO1xuICAgIH1cbn0pO1xuXG5cbmNsYXNzIFVzZXJEYXRhSU9Mb2dpYyB7XG4gICAgdXNlckRhdGE6IEN1c3RvbVN0eWxlID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgdXNlckRhdGFGcm9tU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKTtcbiAgICAgICAgaWYgKHVzZXJEYXRhRnJvbVN0b3JlID09IHVuZGVmaW5lZCB8fCB1c2VyRGF0YUZyb21TdG9yZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiTm8gdXNlckRhdGEgd2FzIHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy51c2VyRGF0YSA9IEpTT04ucGFyc2UodXNlckRhdGFGcm9tU3RvcmUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidXNlckRhdGEgZnJvbSBTdG9yZSB3YXMgbm8gdmFsaWQgSlNPTiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJEYXRhOyIsIi8qKlxuICogR2l0SHViOiBodHRwczovL2dpdGh1Yi5jb20vd2lraW5vdGEvd2lraW5vdGFcbiAqIExpY2Vuc2U6IEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2My4wXG4gKi9cbmltcG9ydCB7IGNTdHlsZSB9IGZyb20gXCJsb2dpYy9DdXN0b21TdHlsZUlPXCI7XG5pbXBvcnQgbG9naW5Db20gZnJvbSBcImNvbXBvbmVudHMvbG9naW5cIjtcbmltcG9ydCBoZWFkZXJDb20gZnJvbSBcImNvbXBvbmVudHMvaGVhZGVyXCI7XG5cbnZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbnN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNTdHlsZS5nZW5lcmFsKSk7XG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2dpbi1jb20nLCBsb2dpbkNvbSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hlYWRlci1jb20nLCBoZWFkZXJDb20pO1xuXG5jb25zb2xlLmRlYnVnKFwiWFhYWFggRklSU1QgUkVOREVSIEZJTklTSEVEIFhYWFhYXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YWJjYTgyMzhkN2MyY2JlM2E3ZS53b3JrZXIuanNcIik7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=