import { cStyle } from "logic/CustomStyleIO";
import Tooltip from "components/tooltip";
import { searchForFirst100Results } from "logic/Search";

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
            z-index: 5000;
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
            background: #eee;
            box-sizing: border-box;
            padding: 2px;
        }

        #searchTooltip {
            margin-left: 10px;
        }
        #searchTooltip a{
            padding: 1px;
            padding-left: 3px;
            height: auto;
            width: auto;
            display: block;
            font-size: 14px;
            margin: 0;
            margin-bottom: 5px;
            vertical-align: left;
            border-bottom: 1px solid black;
        }
        #searchTooltip a:nth-child(odd){
            background: #657b83;
        }

        .searchTime {
            background: black;
            border-top: 3px solid #eee;
            padding-top: 12px;
            font-size: 16px;
        }

        #outOfFocus {
            position: absolute;
            top: 35px;
            left: 0;
            right: 0;
            bottom: 0;
        }
        #outOfFocus.close{
            display: none;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        
        `+ "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <header>
        <a href="#dashboard">
            <i class="fas fa-home"></i>
        </a>
        <span id="searchBar">
            <input id="searchInput"></input>
            <span id="searchBarCloseButton" ><i class="fas fa-times"></i></span>
            <span id="searchBarButton" ><i class="fas fa-search"></i></span>
        </span>
        <tooltip-com id="searchTooltip" hidden>
            Hellow World!
        </tooltip-com>
        </header>
        <div id="outOfFocus" class="close"></div>
        `;

        customElements.define('tooltip-com', Tooltip);

        const searchBar = shadowRoot.getElementById("searchBar");
        const searchBarButton = shadowRoot.getElementById("searchBarButton");
        const searchTooltip = shadowRoot.getElementById("searchTooltip");
        const outOfFocus = shadowRoot.getElementById("outOfFocus");

        outOfFocus.onclick = () => {
            searchBar.classList.remove("open");
            outOfFocus.classList.add("close");
            searchTooltip.setAttribute("hidden", "");
        }

        searchBarButton.onclick = () => {
            outOfFocus.classList.remove("close");
            searchBar.classList.add("open");
            searchTooltip.removeAttribute("hidden");
        }

        const searchBarCloseButton = shadowRoot.getElementById("searchBarCloseButton");
        searchBarCloseButton.onclick = () => {
            outOfFocus.classList.add("close");
            searchBar.classList.remove("open");
            searchTooltip.setAttribute("hidden", "");
        }


        const searchInput = <HTMLInputElement>shadowRoot.getElementById("searchInput");
        searchInput.oninput = () => {
            const start = new Date().getTime();

            const input = searchInput.value;

            const resulte = searchForFirst100Results(input);
            console.debug(resulte);

            const resultElement = document.createElement("div");

            resulte.forEach((item: any) => {
                const resultRow = document.createElement("a");
                resultRow.innerText = item.ref.split(".")[0];
                resultRow.href = "/#item?" + item.ref;
                resultElement.appendChild(resultRow);
            });

            searchTooltip.innerHTML = "";
            searchTooltip.appendChild(resultElement);

            const end = new Date().getTime();
            const pastTime = end - start;
            const pastTimeElement = document.createElement("span");
            pastTimeElement.classList.add("searchTime");
            pastTimeElement.innerText = "Search took: " + pastTime + "ms";
            searchTooltip.appendChild(pastTimeElement);
        }
    }
}