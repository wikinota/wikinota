import { cStyle } from "logic/CustomStyleIO";

export default class HeaderCom extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
    }

    get composedStyle() {
        return cStyle.general + "\n" + `
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

        `+ "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

        shadowRoot.innerHTML = `
        <style>${this.composedStyle}</style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <header><span id="searchBar"><input></input><i id="searchBarCloseButton" class="fas fa-times"></i><i id="searchBarButton" class="fas fa-search"></i></span></header>
        `;

        const searchBar = shadowRoot.getElementById("searchBar");
        const searchBarButton = shadowRoot.getElementById("searchBarButton");
        searchBarButton.onclick = () => {
            searchBar.classList.add("open");
        }

        const searchBarCloseButton = shadowRoot.getElementById("searchBarCloseButton");
        searchBarCloseButton.onclick = () => {
            searchBar.classList.remove("open");
        }
    }
}