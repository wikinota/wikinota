import { cStyle } from "logic/CustomStyleIO";

import PutTestDataIntoDB from "components/PutTestDataIntoDB";
import loginCom from "components/login";
import InputTextContent from "components/InputTextContent";
import DBHistory from "components/DBHistory";

export default class Dashboard extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
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
        <puttestdataintodb-com></puttestdataintodb-com>
        <login-com></login-com>
        <inputtextcontent-com></inputtextcontent-com>
        <dbhistory-com></dbhistory-com>
        `;

        customElements.define('login-com', loginCom);
        customElements.define('puttestdataintodb-com', PutTestDataIntoDB);
        customElements.define('inputtextcontent-com', InputTextContent);
        customElements.define('dbhistory-com', DBHistory);
    }
}