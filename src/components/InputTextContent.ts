import { cStyle } from "logic/CustomStyleIO";

export default class InputTextContent extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
        this.initEventListener();
    }

    get composedStyle() {
        return cStyle.general + "\n" + `
        input, textarea {
            display: block;
        }

        #error.active {
            border: 2px solid #f00;
        }
        ` + "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <div id="inputHost">
            <input id="name"></input>
            <textarea id="textContent"></textarea>
            <input id="tags"></input>
            <button id="saveButton">Save Page</button>
            <div id="error"></div>
        </div>
        `;
    }

    initEventListener() {
        const name = <HTMLInputElement>this.shadowRoot.getElementById("name");
        const textContent = <HTMLTextAreaElement>this.shadowRoot.getElementById("textContent");
        const tags = <HTMLInputElement>this.shadowRoot.getElementById("tags");
        const saveButton = <HTMLButtonElement>this.shadowRoot.getElementById("saveButton");
        const error = <HTMLDivElement>this.shadowRoot.getElementById("error");

        saveButton.onclick = () => {
            error.innerHTML = " ";
            error.classList.remove("active");

            pouchdDBSession.put({
                _id: "TextContent--" + name.value,
                type: "text",
                name: name.value,
                textContent: textContent.value,
                tags: tags.value
            }).then((val) => {
                console.debug("PUT Text-Content into Store:", val)
            }).catch(err => {
                console.error("PUT TO DB HAS AN ERROR:", err);
                error.innerText = err.message;
                error.classList.add("active");
            });
        }
    }
}