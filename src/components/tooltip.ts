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
                bottom: -40px;
                padding: 5px;
                margin: 10px;
                background: blue;
                left: 0;
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