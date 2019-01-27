import { cStyle } from "logic/CustomStyleIO";

export default class PutTestDataIntoDB extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
        this.addEventListenerForElement();
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
        <button id="testData">Emmit Test Data</button>
        `;
    }

    addEventListenerForElement() {
        const button = this.shadowRoot.getElementById("testData");
        button.onclick = () => {
            console.debug("Try to Add Something To the DB");

            pouchdDBSession.put({
                _id: '' + Math.random(),
                name: '' + Math.random(),
                textContent: '' + Math.random()
            }).then((val) => {
                console.log("OKAY PUT IT THERE:", val)
            });
        }
    }
}