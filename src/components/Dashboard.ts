import { cStyle } from "logic/CustomStyleIO";

export default class Dashboard extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
        this.addEventListenerForShadowDom();
    }

    get composedStyle() {
        return cStyle.general + "\n" + `

        ` + "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <button id="openModal">OpenModal</button>
        <puttestdataintodb-com></puttestdataintodb-com>
        <login-com></login-com>
        <inputtextcontent-com></inputtextcontent-com>
        <dbhistory-com></dbhistory-com>
        <modal-com id="modal" hidden>
            Hellow!! this is from Slot!
        </modal-com>
        `;


    }

    addEventListenerForShadowDom() {
        const el = this.shadowRoot.getElementById("openModal");
        el.onclick = (ev) => {
            const modal = this.shadowRoot.getElementById("modal");
            modal.removeAttribute("hidden");
        }
    }
}