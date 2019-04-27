import { cStyle } from "logic/CustomStyleIO";
export default class Modal extends HTMLElement {
    constructor() {
        super();
        this.shadowRootDom = undefined;
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
        this.addEventListenerForShadowDom();
    }
    get composedStyle() {
        return cStyle.general + "\n" + `
            #modalHost {
                z-index: 5000;
            }
            
            #modalHost,
            .modalBackground {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            .modalBackground {
                background: #2C2C2C99;
            }
            .modalContent {
                position: relative;
                margin: 15% auto;
                min-height: 50px;
                min-width: 50px;
                max-width: 55%;
                background: #002b36;
                padding: 10px;
                border-radius: 10px;
            }
            #closeButton {
                position: absolute;
                top: 5;
                right: 5;
            }

            #modalHost.hide{
                display: none;
            }

        ` + "\n" + cStyle.header;
    }
    newRender() {
        const shadowRoot = this.shadowRootDom;
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <div id="modalHost">
            <div class="modalBackground"></div>
            <button id="closeButton" >X</button>
            <div class="modalContent">
                <slot></slot>
            </div>
        </div>
        `;
        const modalhost = this.shadowRootDom.getElementById("modalHost");
        if (this.hidden == true)
            modalhost.classList.add("hidden");
    }
    addEventListenerForShadowDom() {
        const closeButton = this.shadowRootDom.getElementById("closeButton");
        const modalhost = this.shadowRootDom.getElementById("modalHost");
        closeButton.onclick = () => {
            this.setAttribute("hidden", "");
        };
    }
}
//# sourceMappingURL=modal.js.map