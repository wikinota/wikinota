import { cStyle } from "logic/CustomStyleIO";

export default class textContentView extends HTMLElement {
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
        <div class="itemTextContent">
            <div id="title">Title: ${this.getAttribute("item")}</div>
            <hr>
            <div id="text"></div>
            <hr>
            <div id="tags">Tags:</div>
        </div>
        `;

        this.goToDB(shadowRoot.getElementById("text"), shadowRoot.getElementById("tags"));
    }

    goToDB(textElement: HTMLElement, tagsElement: HTMLElement) {
        console.log("this.getAttribute(item)", this.getAttribute("item"))
        pouchdDBSession.get(this.getAttribute("item")).then((doc: any) => {
            console.debug("from DB:", doc);
            textElement.innerText = doc.textContent;
            tagsElement.innerText = doc.tags;
        }).catch(err => {
            console.error("ERROR:", "textcontent--" + this.getAttribute("text"), " --- ", err);
        });
    }
}