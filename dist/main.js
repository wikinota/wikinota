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
            height: var(--default-dark-header);
            background: #008669;
            color: #fff;
            padding:0 5px;
            display: flex;
            align-items: center;
        }
        span {
            height: var(--default-dark-header);
            width: auto;
            display: inline-block;
            font-size: 20px;
            padding:0;
            margin: 0;
            vertical-align:middle;
            positon: relative;
        }
        span * {
            position: relative;
            top: 50%; 
            transform: translate(0, -50%)
        }
        #searchBar.open input{
            display: inline-block;
            height: var(--default-dark-header);
            padding: 0;
            margin: 0;
            border: 0;
        }
        #searchBar.open .fa-search {
            display: inline-block;
        }
        #searchBar input,
        #searchBar #searchBarCloseButton{
            display: none;
        }
        #searchBar.open #searchBarCloseButton {
            display: inline-block;
            color: #000;
        }

        ` + "\n" + logic_CustomStyleIO__WEBPACK_IMPORTED_MODULE_0__["cStyle"].header;
    }
    newRender() {
        const shadowRoot = this.shadowRootDom;
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <header>
        <span id="searchBar">
            <input></input>
            <span id="searchBarCloseButton" ><i class="fas fa-times"></i></span>
            <span id="searchBarButton" ><i class="fas fa-search"></i></span>
        </span>
        </header>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DdXN0b21TdHlsZUlPLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy91c2VyRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBNkM7QUFFOUIsTUFBTSxTQUFVLFNBQVEsV0FBVztJQUc5QztRQUNJLEtBQUssRUFBRSxDQUFDO1FBSFosa0JBQWEsR0FBZSxTQUFTO1FBSWpD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LENBQUMsQ0FBQztBQUUvQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2hCbkQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE9BQU8sSUFBSSxNQUFNLENBQUMscUJBQXVCLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBjU3R5bGUgfSBmcm9tIFwibG9naWMvQ3VzdG9tU3R5bGVJT1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb20gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgc2hhZG93Um9vdERvbTogU2hhZG93Um9vdCA9IHVuZGVmaW5lZFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdERvbSA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB0aGlzLm5ld1JlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBjb21wb3NlZFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gY1N0eWxlLmdlbmVyYWwgKyBcIlxcblwiICsgYFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmYTtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tZGVmYXVsdC1kYXJrLWhlYWRlcik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4NjY5O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWRlZmF1bHQtZGFyay1oZWFkZXIpO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgICBwb3NpdG9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuICoge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA1MCU7IFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSlcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gaW5wdXR7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWRlZmF1bHQtZGFyay1oZWFkZXIpO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gLmZhLXNlYXJjaCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgI3NlYXJjaEJhciBpbnB1dCxcbiAgICAgICAgI3NlYXJjaEJhciAjc2VhcmNoQmFyQ2xvc2VCdXR0b257XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICNzZWFyY2hCYXIub3BlbiAjc2VhcmNoQmFyQ2xvc2VCdXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBgKyBcIlxcblwiICsgY1N0eWxlLmhlYWRlcjtcbiAgICB9XG5cbiAgICBuZXdSZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLnNoYWRvd1Jvb3REb21cblxuICAgICAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lQDUuNi4zL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC0wdC9KVjBWcVZUd3hMQWlNTjdJbkQya0YraHJlTStzMUZ5bkVUQUUvZDIxcUdLN0R1VGpaR0orUVRCM0JEQ1YvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cbiAgICAgICAgPHN0eWxlPiR7dGhpcy5jb21wb3NlZFN0eWxlfTwvc3R5bGU+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxzcGFuIGlkPVwic2VhcmNoQmFyXCI+XG4gICAgICAgICAgICA8aW5wdXQ+PC9pbnB1dD5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwic2VhcmNoQmFyQ2xvc2VCdXR0b25cIiA+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJzZWFyY2hCYXJCdXR0b25cIiA+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpO1xuICAgICAgICBjb25zdCBzZWFyY2hCYXJCdXR0b24gPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyQnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCYXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckNsb3NlQnV0dG9uID0gc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhckNsb3NlQnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCYXJDbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBXb3JrZXJIYXNoIGZyb20gJ3dlYndvcmtlci9oYXNoZXIud29ya2VyLnRzJztcbmltcG9ydCB1c2VyRGF0YSBmcm9tICdsb2dpYy91c2VyRGF0YSc7XG5pbXBvcnQgeyBjU3R5bGUgfSBmcm9tIFwibG9naWMvQ3VzdG9tU3R5bGVJT1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luQ29tIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdGVtYWlsRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdHBhc3N3b3JkOiBIVE1MSW5wdXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRzZW5kOiBIVE1MQnV0dG9uRWxlbWVudCA9IHVuZGVmaW5lZDtcblx0bG9hZGluZ0luZGljYXRvcjogSFRNTERpdkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGhhc2hPdXRwdXQ6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRoYXNoV29ya2VyOiBXb3JrZXI7XG5cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblxuXHRcdGNvbnN0IHN0eWxlcyA9IGNTdHlsZS5nZW5lcmFsICsgXCJcXG5cIiArIGBcblx0XHRcdDpob3N0ICB7XG5cdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdH1cbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZhO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNjMGZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdH1cblx0XHRcdCNsb2FkaW5nSW5kaWNhdG9yIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHRcdCNoYXNoT3V0cHV0IHtcblx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0fVxuICAgICAgICBgKyBcIlxcblwiICsgY1N0eWxlLmxvZ2luO1xuXG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3R5bGU+JHtzdHlsZXN9PC9zdHlsZT5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbnB1dCBpZD1cImVtYWlsXCI+PC9pbnB1dD5cblx0XHRcdFx0PGlucHV0IGlkPVwicGFzc3dvcmRcIj48L2lucHV0PlxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwic2VuZFwiPlNlbmQ8L2J1dHRvbj5cblx0XHRcdFx0PGRpdiBpZD1cImxvYWRpbmdJbmRpY2F0b3JcIj5Mb2FkaW5n4oCmPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgaWQ9XCJoYXNoT3V0cHV0XCI+XG5cdFx0XHRGcm9tIExvY2FsU3RvcmFnZTogPGJyPiAke3VzZXJEYXRhLnB3ZEhhc2h9XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdFx0dGhpcy5lbWFpbEZpZWxkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuXHRcdHRoaXMucGFzc3dvcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5cdFx0dGhpcy5zZW5kID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzZW5kJyk7XG5cdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nSW5kaWNhdG9yJyk7XG5cdFx0dGhpcy5oYXNoT3V0cHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNoYXNoT3V0cHV0Jyk7XG5cblx0XHR0aGlzLnNlbmQub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY2FsY3VsYXRlSGFzaCgpO1xuXHRcdH07XG5cdH1cblxuXHRjYWxjdWxhdGVIYXNoKCkge1xuXHRcdGlmICh0aGlzLmhhc2hXb3JrZXIgIT0gdW5kZWZpbmVkKSB0aGlzLmhhc2hXb3JrZXIudGVybWluYXRlKCk7XG5cblx0XHR0aGlzLmhhc2hXb3JrZXIgPSBuZXcgV29ya2VySGFzaCgpO1xuXHRcdHRoaXMuaGFzaFdvcmtlci5wb3N0TWVzc2FnZShbdGhpcy5lbWFpbEZpZWxkLnZhbHVlLCB0aGlzLnBhc3N3b3JkLnZhbHVlXSk7XG5cdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblx0XHR0aGlzLmhhc2hXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcblx0XHRcdHVzZXJEYXRhLnB3ZEhhc2ggPSBlLmRhdGE7XG5cdFx0XHR0aGlzLmhhc2hPdXRwdXQudGV4dENvbnRlbnQgPSBlLmRhdGE7XG5cdFx0XHR0aGlzLmxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH07XG5cdH1cbn0iLCJleHBvcnQgY29uc3QgY1N0eWxlID0gbmV3IFByb3h5KCh7fSBhcyBDdXN0b21TdHlsZSksIHtcbiAgICBnZXQodGFyZ2V0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJTyA9IG5ldyBDdXN0b21TdHlsZUlPO1xuICAgICAgICBpZiAoc3R5bGVJTy5jdXN0b21UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkIHx8IChzdHlsZUlPIGFzIGFueSkuY3VzdG9tVGVtcGxhdGVbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzdHlsZUlPIGFzIGFueSkuY3VzdG9tVGVtcGxhdGVbbmFtZV07XG4gICAgfVxufSlcblxuLyoqXG4gKiBzZXRzIHRoZSBjdXN0b20gc3R5bGVzIC0gbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ2xvYmFsIGNvZGUgZXhlY3V0aW9uXG4gKiBcbiAqIEFUVEVOVElPTiBGT1IgVEhFIE5FWFQgREVWIC0gVEhJUyBGVU5DVElPTiBDQU4gQkUgTUlTU1VTRUQgRk9SIFhTUyBBVEFDS1MgSUYgTk9UIFVTRUQgUFJPUEVSTFlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU3R5bGVJTyB7XG4gICAgY3VzdG9tVGVtcGxhdGU6IEN1c3RvbVN0eWxlID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VzdG9tVGVtcGxhdGUnKTtcbiAgICAgICAgaWYgKGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlID09IHVuZGVmaW5lZCB8fCBjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiTm8gQ3VzdG9tVGVtcGxhdGUgd2FzIHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9IHRoaXMucHJldmVudFhTUyhjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlID0gSlNPTi5wYXJzZShjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gVGVtcGxhdGUgd2FzIG5vdCB2YWxpZCBKU09OIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKFxuICAgICAgICAgICAgKHRoaXMuY3VzdG9tVGVtcGxhdGUgYXMgYW55KS5pc1NldCA9PSB0cnVlIHx8XG4gICAgICAgICAgICAodGhpcy5jdXN0b21UZW1wbGF0ZSBhcyBhbnkpLmlzU2V0ID09IGZhbHNlXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gVGVtcGxhdGUgd2FzIG5vdCB2YWxpZCFcIiwgdGhpcy5jdXN0b21UZW1wbGF0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0aGlzLmN1c3RvbVRlbXBsYXRlIGFzIGFueSkuaXNTZXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJDdXN0b20gVGVtcGxhdGUgd2FzIHZhbGlkIGJ1dCB0aGUgaXNTZXQgcHJvcGVydHkgaXMgb24gZmFsc2UuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIGN1c3RvbSB0ZW1wbGF0ZSB0byB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAqIGFuZCB3aWxsIHJlbG9hZCB0aGUgcGFnZSFcbiAgICAgKiBcbiAgICAgKiB0aGlzIHRlbXBsYXRlIHdpbGwgYmUgb3BlbmVkIGJ5IG5leCByZWxvYWRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAgICovXG4gICAgc2V0Q3VzdG9tVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VzdG9tVGVtcGxhdGUnLCB0aGlzLnByZXZlbnRYU1ModGVtcGxhdGUpKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJldmVudHMgWFNTIGJ5IGRlbGV0aW5nIGFsbCA8IGFuZCA+XG4gICAgICogXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIHByZXZlbnRYU1ModGVtcGxhdGU6IHN0cmluZykge1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnNwbGl0KCc8Jykuam9pbihcIi8qRVJST1IgLTwgaXMgbm90IGFsbG93ZWQgaW4gY3VzdG9tIFRlbXBsYXRlcyEtKi9cIik7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuc3BsaXQoJz4nKS5qb2luKFwiLypFUlJPUiAtPiBpcyBub3QgYWxsb3dlZCBpbiBjdXN0b20gVGVtcGxhdGVzIS0qL1wiKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn0iLCJpbnRlcmZhY2UgVXNlckRhdGEge1xuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcHdkSGFzaDogc3RyaW5nLFxufVxuXG5jb25zdCB1c2VyRGF0YSA9IG5ldyBQcm94eSgoe30gYXMgVXNlckRhdGEpLCB7XG4gICAgc2V0KHRhcmdldCwgbmFtZSwgdmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjogdXNlckRhdGEgc2V0IG11c3N0IGJlIGEgc3RyaW5nIVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlSU8gPSBuZXcgVXNlckRhdGFJT0xvZ2ljO1xuICAgICAgICBjb25zdCBvbGREYXRhID0gKHN0eWxlSU8udXNlckRhdGEgPT0gdW5kZWZpbmVkKSA/IHt9IDogc3R5bGVJTy51c2VyRGF0YTtcbiAgICAgICAgY29uc3QgdG1wID0gT2JqZWN0LmFzc2lnbihvbGREYXRhLCB7IFtuYW1lXTogdmFsdWUgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHRtcCkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJTyA9IG5ldyBVc2VyRGF0YUlPTG9naWM7XG4gICAgICAgIGlmIChzdHlsZUlPLnVzZXJEYXRhID09PSB1bmRlZmluZWQgfHwgKHN0eWxlSU8gYXMgYW55KS51c2VyRGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoc3R5bGVJTyBhcyBhbnkpLnVzZXJEYXRhW25hbWVdO1xuICAgIH1cbn0pO1xuXG5cbmNsYXNzIFVzZXJEYXRhSU9Mb2dpYyB7XG4gICAgdXNlckRhdGE6IEN1c3RvbVN0eWxlID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgdXNlckRhdGFGcm9tU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKTtcbiAgICAgICAgaWYgKHVzZXJEYXRhRnJvbVN0b3JlID09IHVuZGVmaW5lZCB8fCB1c2VyRGF0YUZyb21TdG9yZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiTm8gdXNlckRhdGEgd2FzIHNldC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy51c2VyRGF0YSA9IEpTT04ucGFyc2UodXNlckRhdGFGcm9tU3RvcmUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidXNlckRhdGEgZnJvbSBTdG9yZSB3YXMgbm8gdmFsaWQgSlNPTiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJEYXRhOyIsIi8qKlxuICogR2l0SHViOiBodHRwczovL2dpdGh1Yi5jb20vd2lraW5vdGEvd2lraW5vdGFcbiAqIExpY2Vuc2U6IEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2My4wXG4gKi9cbmltcG9ydCB7IGNTdHlsZSB9IGZyb20gXCJsb2dpYy9DdXN0b21TdHlsZUlPXCI7XG5pbXBvcnQgbG9naW5Db20gZnJvbSBcImNvbXBvbmVudHMvbG9naW5cIjtcbmltcG9ydCBoZWFkZXJDb20gZnJvbSBcImNvbXBvbmVudHMvaGVhZGVyXCI7XG5cbnZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbnN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNTdHlsZS5nZW5lcmFsKSk7XG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2dpbi1jb20nLCBsb2dpbkNvbSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hlYWRlci1jb20nLCBoZWFkZXJDb20pO1xuXG5jb25zb2xlLmRlYnVnKFwiWFhYWFggRklSU1QgUkVOREVSIEZJTklTSEVEIFhYWFhYXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YWJjYTgyMzhkN2MyY2JlM2E3ZS53b3JrZXIuanNcIik7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=