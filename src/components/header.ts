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

        `+ "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

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
        }

        const searchBarCloseButton = shadowRoot.getElementById("searchBarCloseButton");
        searchBarCloseButton.onclick = () => {
            searchBar.classList.remove("open");
        }
    }
}