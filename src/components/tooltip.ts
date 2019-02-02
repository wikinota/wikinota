import { cStyle } from "logic/CustomStyleIO";

export default class tooltip extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined
    visibleClass: string = (this.hidden) ? "visible" : "";

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
    }

    get composedStyle() {
        return cStyle.general + "\n" + `
            .tooltip {
                position: absolute;
                top: 30px;
                background: #002b36;
                left: 0;
                border: 2px solid #cb4b16;
                max-height: 50vh;
                overflow-x: auto;
            }
        ` + "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <div class="tooltip ${this.visibleClass}">
            <slot>
            </slot>
        </div>
        `;
    }
}