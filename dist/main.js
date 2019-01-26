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
/* harmony import */ var logic_userData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! logic/userData */ "./src/logic/userData.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9DdXN0b21TdHlsZUlPLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy91c2VyRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBNkM7QUFFOUIsTUFBTSxTQUFVLFNBQVEsV0FBVztJQUc5QztRQUNJLEtBQUssRUFBRSxDQUFDO1FBSFosa0JBQWEsR0FBZSxTQUFTO1FBSWpD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QyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBR0gsTUFBTSxlQUFlO0lBRWpCO1FBREEsYUFBUSxHQUFnQixTQUFTLENBQUM7UUFFOUIsSUFBSSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQWlCLElBQUksU0FBUyxJQUFJLGlCQUFpQixJQUFJLEVBQUUsRUFBRTtZQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSTtZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxDQUFDLEVBQUU7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDeEQsT0FBTztTQUNWO0lBQ0wsQ0FBQztDQUNKO0FBRWMsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0dBR0c7QUFFZ0Q7QUFDWDtBQUNFO0FBQzFDLElBQUksMkRBQWdCLENBQUM7QUFHckIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsd0RBQVEsQ0FBQyxDQUFDO0FBQzdDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLHlEQUFTLENBQUMsQ0FBQztBQUUvQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2RuRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxxQkFBdUIsR0FBRyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IGNTdHlsZSB9IGZyb20gXCJsb2dpYy9DdXN0b21TdHlsZUlPXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzaGFkb3dSb290RG9tOiBTaGFkb3dSb290ID0gdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290RG9tID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHRoaXMubmV3UmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvc2VkU3R5bGUoKSB7XG4gICAgICAgIGxldCBzdHlsZSA9IGBcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICBmb250LWZhbWlseTogZmE7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNjMGZmO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyIGlucHV0LFxuICAgICAgICAjc2VhcmNoQmFyIC5mYS10aW1lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICNzZWFyY2hCYXIub3BlbiBpbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB9XG4gICAgICAgICNzZWFyY2hCYXIub3BlbiAuZmEtc2VhcmNoIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAjc2VhcmNoQmFyLm9wZW4gLmZhLXRpbWVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7XG4gICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gc3R5bGUgKyBcIlxcblwiICsgY1N0eWxlLmhlYWRlcjtcbiAgICB9XG5cbiAgICBuZXdSZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLnNoYWRvd1Jvb3REb21cblxuICAgICAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN0eWxlPiR7dGhpcy5jb21wb3NlZFN0eWxlfTwvc3R5bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZUA1LjYuMy9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtMHQvSlYwVnFWVHd4TEFpTU43SW5EMmtGK2hyZU0rczFGeW5FVEFFL2QyMXFHSzdEdVRqWkdKK1FUQjNCRENWL1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XG4gICAgICAgIDxoZWFkZXI+PHNwYW4gaWQ9XCJzZWFyY2hCYXJcIj48aW5wdXQ+PC9pbnB1dD48aSBpZD1cInNlYXJjaEJhckNsb3NlQnV0dG9uXCIgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PGkgaWQ9XCJzZWFyY2hCYXJCdXR0b25cIiBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9zcGFuPjwvaGVhZGVyPlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIik7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhckJ1dHRvbiA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyQ2xvc2VCdXR0b24gPSBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyQ2xvc2VCdXR0b25cIik7XG4gICAgICAgIHNlYXJjaEJhckNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFdvcmtlckhhc2ggZnJvbSAnd2Vid29ya2VyL2hhc2hlci53b3JrZXIudHMnO1xuaW1wb3J0IHVzZXJEYXRhIGZyb20gJ2xvZ2ljL3VzZXJEYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkNvbSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuXHRlbWFpbEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRwYXNzd29yZDogSFRNTElucHV0RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0c2VuZDogSFRNTEJ1dHRvbkVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cdGxvYWRpbmdJbmRpY2F0b3I6IEhUTUxEaXZFbGVtZW50ID0gdW5kZWZpbmVkO1xuXHRoYXNoT3V0cHV0OiBIVE1MRGl2RWxlbWVudCA9IHVuZGVmaW5lZDtcblx0aGFzaFdvcmtlcjogV29ya2VyO1xuXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cblx0XHRjb25zdCBzdHlsZXMgPSBgXG5cdFx0XHQ6aG9zdCAge1xuXHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHR9XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmYTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzYzBmZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cdFx0XHR9XG5cdFx0XHQjbG9hZGluZ0luZGljYXRvciB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHQjaGFzaE91dHB1dCB7XG5cdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0XHRcdH1cbiAgICAgICAgYDtcblxuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHN0eWxlPiR7c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJlbWFpbFwiPjwvaW5wdXQ+XG5cdFx0XHRcdDxpbnB1dCBpZD1cInBhc3N3b3JkXCI+PC9pbnB1dD5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cInNlbmRcIj5TZW5kPC9idXR0b24+XG5cdFx0XHRcdDxkaXYgaWQ9XCJsb2FkaW5nSW5kaWNhdG9yXCI+TG9hZGluZ+KApjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwiaGFzaE91dHB1dFwiPlxuXHRcdFx0RnJvbSBMb2NhbFN0b3JhZ2U6IDxicj4gJHt1c2VyRGF0YS5wd2RIYXNofVxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuXHRcdHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcblx0XHR0aGlzLnBhc3N3b3JkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuXHRcdHRoaXMuc2VuZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjc2VuZCcpO1xuXHRcdHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZ0luZGljYXRvcicpO1xuXHRcdHRoaXMuaGFzaE91dHB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjaGFzaE91dHB1dCcpO1xuXG5cdFx0dGhpcy5zZW5kLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZUhhc2goKTtcblx0XHR9O1xuXHR9XG5cblx0Y2FsY3VsYXRlSGFzaCgpIHtcblx0XHRpZiAodGhpcy5oYXNoV29ya2VyICE9IHVuZGVmaW5lZCkgdGhpcy5oYXNoV29ya2VyLnRlcm1pbmF0ZSgpO1xuXG5cdFx0dGhpcy5oYXNoV29ya2VyID0gbmV3IFdvcmtlckhhc2goKTtcblx0XHR0aGlzLmhhc2hXb3JrZXIucG9zdE1lc3NhZ2UoW3RoaXMuZW1haWxGaWVsZC52YWx1ZSwgdGhpcy5wYXNzd29yZC52YWx1ZV0pO1xuXHRcdHRoaXMubG9hZGluZ0luZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cdFx0dGhpcy5oYXNoV29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG5cdFx0XHR1c2VyRGF0YS5wd2RIYXNoID0gZS5kYXRhO1xuXHRcdFx0dGhpcy5oYXNoT3V0cHV0LnRleHRDb250ZW50ID0gZS5kYXRhO1xuXHRcdFx0dGhpcy5sb2FkaW5nSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9O1xuXHR9XG59IiwiZXhwb3J0IGNvbnN0IGNTdHlsZSA9IG5ldyBQcm94eSgoe30gYXMgQ3VzdG9tU3R5bGUpLCB7XG4gICAgZ2V0KHRhcmdldCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlSU8gPSBuZXcgQ3VzdG9tU3R5bGVJTztcbiAgICAgICAgaWYgKHN0eWxlSU8uY3VzdG9tVGVtcGxhdGUgPT09IHVuZGVmaW5lZCB8fCAoc3R5bGVJTyBhcyBhbnkpLmN1c3RvbVRlbXBsYXRlW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoc3R5bGVJTyBhcyBhbnkpLmN1c3RvbVRlbXBsYXRlW25hbWVdO1xuICAgIH1cbn0pXG5cbi8qKlxuICogc2V0cyB0aGUgY3VzdG9tIHN0eWxlcyAtIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGdsb2JhbCBjb2RlIGV4ZWN1dGlvblxuICogXG4gKiBBVFRFTlRJT04gRk9SIFRIRSBORVhUIERFViAtIFRISVMgRlVOQ1RJT04gQ0FOIEJFIE1JU1NVU0VEIEZPUiBYU1MgQVRBQ0tTIElGIE5PVCBVU0VEIFBST1BFUkxZXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVN0eWxlSU8ge1xuICAgIGN1c3RvbVRlbXBsYXRlOiBDdXN0b21TdHlsZSA9IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IGN1c3RvbVRlbXBsYXRlRnJvbVN0b3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbVRlbXBsYXRlJyk7XG4gICAgICAgIGlmIChjdXN0b21UZW1wbGF0ZUZyb21TdG9yZSA9PSB1bmRlZmluZWQgfHwgY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUgPT0gXCJcIikge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIk5vIEN1c3RvbVRlbXBsYXRlIHdhcyBzZXQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUgPSB0aGlzLnByZXZlbnRYU1MoY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdXN0b21UZW1wbGF0ZSA9IEpTT04ucGFyc2UoY3VzdG9tVGVtcGxhdGVGcm9tU3RvcmUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIFRlbXBsYXRlIHdhcyBub3QgdmFsaWQgSlNPTiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIShcbiAgICAgICAgICAgICh0aGlzLmN1c3RvbVRlbXBsYXRlIGFzIGFueSkuaXNTZXQgPT0gdHJ1ZSB8fFxuICAgICAgICAgICAgKHRoaXMuY3VzdG9tVGVtcGxhdGUgYXMgYW55KS5pc1NldCA9PSBmYWxzZVxuICAgICAgICApKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIFRlbXBsYXRlIHdhcyBub3QgdmFsaWQhXCIsIHRoaXMuY3VzdG9tVGVtcGxhdGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5jdXN0b21UZW1wbGF0ZSBhcyBhbnkpLmlzU2V0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiQ3VzdG9tIFRlbXBsYXRlIHdhcyB2YWxpZCBidXQgdGhlIGlzU2V0IHByb3BlcnR5IGlzIG9uIGZhbHNlLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5jdXN0b21TdHlsZSA9IHRoaXMuY3VzdG9tVGVtcGxhdGU7XG5cbiAgICB9XG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgY3VzdG9tIHRlbXBsYXRlIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICogYW5kIHdpbGwgcmVsb2FkIHRoZSBwYWdlIVxuICAgICAqIFxuICAgICAqIHRoaXMgdGVtcGxhdGUgd2lsbCBiZSBvcGVuZWQgYnkgbmV4IHJlbG9hZFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGVtcGxhdGVcbiAgICAgKi9cbiAgICBzZXRDdXN0b21UZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXN0b21UZW1wbGF0ZScsIHRoaXMucHJldmVudFhTUyh0ZW1wbGF0ZSkpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcmV2ZW50cyBYU1MgYnkgZGVsZXRpbmcgYWxsIDwgYW5kID5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAgICovXG4gICAgcHJldmVudFhTUyh0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuc3BsaXQoJzwnKS5qb2luKFwiLypFUlJPUiAtPCBpcyBub3QgYWxsb3dlZCBpbiBjdXN0b20gVGVtcGxhdGVzIS0qL1wiKTtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5zcGxpdCgnPicpLmpvaW4oXCIvKkVSUk9SIC0+IGlzIG5vdCBhbGxvd2VkIGluIGN1c3RvbSBUZW1wbGF0ZXMhLSovXCIpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufSIsImludGVyZmFjZSBVc2VyRGF0YSB7XG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBwd2RIYXNoOiBzdHJpbmcsXG59XG5cbmNvbnN0IHVzZXJEYXRhID0gbmV3IFByb3h5KCh7fSBhcyBVc2VyRGF0YSksIHtcbiAgICBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SOiB1c2VyRGF0YSBzZXQgbXVzc3QgYmUgYSBzdHJpbmchXCIpO1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGVJTyA9IG5ldyBVc2VyRGF0YUlPTG9naWM7XG4gICAgICAgIGNvbnN0IG9sZERhdGEgPSAoc3R5bGVJTy51c2VyRGF0YSA9PSB1bmRlZmluZWQpID8ge30gOiBzdHlsZUlPLnVzZXJEYXRhO1xuICAgICAgICBjb25zdCB0bXAgPSBPYmplY3QuYXNzaWduKG9sZERhdGEsIHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodG1wKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZ2V0KHRhcmdldCwgbmFtZSkge1xuICAgICAgICBjb25zdCBzdHlsZUlPID0gbmV3IFVzZXJEYXRhSU9Mb2dpYztcbiAgICAgICAgaWYgKHN0eWxlSU8udXNlckRhdGEgPT09IHVuZGVmaW5lZCB8fCAoc3R5bGVJTyBhcyBhbnkpLnVzZXJEYXRhW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzdHlsZUlPIGFzIGFueSkudXNlckRhdGFbbmFtZV07XG4gICAgfVxufSk7XG5cblxuY2xhc3MgVXNlckRhdGFJT0xvZ2ljIHtcbiAgICB1c2VyRGF0YTogQ3VzdG9tU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCB1c2VyRGF0YUZyb21TdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpO1xuICAgICAgICBpZiAodXNlckRhdGFGcm9tU3RvcmUgPT0gdW5kZWZpbmVkIHx8IHVzZXJEYXRhRnJvbVN0b3JlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJObyB1c2VyRGF0YSB3YXMgc2V0LlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXRhID0gSlNPTi5wYXJzZSh1c2VyRGF0YUZyb21TdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1c2VyRGF0YSBmcm9tIFN0b3JlIHdhcyBubyB2YWxpZCBKU09OIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlckRhdGE7IiwiLyoqXG4gKiBHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbm90YS93aWtpbm90YVxuICogTGljZW5zZTogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjBcbiAqL1xuXG5pbXBvcnQgQ3VzdG9tVGVtcGxhdGVJTyBmcm9tIFwibG9naWMvQ3VzdG9tU3R5bGVJT1wiO1xuaW1wb3J0IGxvZ2luQ29tIGZyb20gXCJjb21wb25lbnRzL2xvZ2luXCI7XG5pbXBvcnQgaGVhZGVyQ29tIGZyb20gXCJjb21wb25lbnRzL2hlYWRlclwiO1xubmV3IEN1c3RvbVRlbXBsYXRlSU87XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2dpbi1jb20nLCBsb2dpbkNvbSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hlYWRlci1jb20nLCBoZWFkZXJDb20pO1xuXG5jb25zb2xlLmRlYnVnKFwiWFhYWFggRklSU1QgUkVOREVSIEZJTklTSEVEIFhYWFhYXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YWJjYTgyMzhkN2MyY2JlM2E3ZS53b3JrZXIuanNcIik7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=