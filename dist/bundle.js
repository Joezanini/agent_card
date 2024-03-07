/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// card-component.js
const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* Define the card styling */
        .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
            display: inline-block;
        }

        .card img {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }

        .card h3 {
            margin-top: 10px;
        }
    </style>
    <div class="card">
        <img src="" alt="Profile Picture">
        <h3></h3>
    </div>
`;

class CardComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.imgElement = this.shadowRoot.querySelector('img');
        this.nameElement = this.shadowRoot.querySelector('h3');
    }

    static get observedAttributes() {
        return ['name', 'photo'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.nameElement.textContent = newValue;
        } else if (name === 'photo') {
            this.imgElement.src = newValue;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardComponent);
/******/ })()
;