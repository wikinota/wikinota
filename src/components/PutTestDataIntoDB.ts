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
        <button id="testData100">Emmit 100 Test Data</button>
        <button id="testData1000">Emmit 1000 Test Data</button>
        <button id="testData10000">Emmit 10000 Test Data</button>
        `;
    }

    addEventListenerForElement() {
        const button = this.shadowRoot.getElementById("testData");
        const button100 = this.shadowRoot.getElementById("testData100");
        const button1000 = this.shadowRoot.getElementById("testData1000");
        const button10000 = this.shadowRoot.getElementById("testData10000");
        button.onclick = () => {
            console.debug("Try to Add Something To the DB");
            this.crateNewDBInput();
        }
        button100.onclick = () => {
            console.debug("Try to Add Something To the DB");
            for (let i = 0; i < 100; i++) {
                this.crateNewDBInput();
            }
        }
        button1000.onclick = () => {
            console.debug("Try to Add Something To the DB");
            for (let i = 0; i < 1000; i++) {
                this.crateNewDBInput();
            }
        }
        button10000.onclick = () => {
            console.debug("Try to Add Something To the DB");
            for (let i = 0; i < 10000; i++) {
                this.crateNewDBInput();
            }
        }
    }

    crateNewDBInput() {
        pouchdDBSession.put({
            _id: this.randomID(),
            name: this.randomID(),
            textContent: this.randomFakeText()
        }).then((val) => {
            console.log("OKAY PUT IT THERE:", val)
        });
    }

    randomID() {
        let rId = "";

        for (let i = 0; i < 5; i++) {
            rId += Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + "-";
        }
        rId += Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        return rId;
    }

    randomFakeText() {
        let rId = "";

        for (let i = 0; i < 1000; i++) {
            rId += Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + " ";
        }
        rId += Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        return rId;
    }
}