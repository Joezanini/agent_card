/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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

        this.imgElement = this.getAttribute("photo");
        this.nameElement = this.getAttribute("name");
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

// Define the custom element
customElements.define('card-component', CardComponent);
/******/ })()
;