export default class HeaderCom extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const styles = `
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

        shadowRoot.innerHTML = `
            <style>${styles}</style>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
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