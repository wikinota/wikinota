import { cStyle } from "logic/CustomStyleIO";
import { encryptItemData } from "logic/DB";
export default class InputTextContent extends HTMLElement {
    constructor() {
        super();
        this.shadowRootDom = undefined;
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
        const shadowRoot = this.shadowRootDom;
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
        const name = this.shadowRoot.getElementById("name");
        const textContent = this.shadowRoot.getElementById("textContent");
        const tags = this.shadowRoot.getElementById("tags");
        const saveButton = this.shadowRoot.getElementById("saveButton");
        const error = this.shadowRoot.getElementById("error");
        saveButton.onclick = () => {
            error.innerHTML = " ";
            error.classList.remove("active");
            const putObj = {
                _id: name.value + ".text",
                type: "text",
                name: name.value,
                cryptData: {
                    textContent: textContent.value,
                    tags: tags.value
                }
            };
            pouchdDBSession.put(encryptItemData(putObj)).then((val) => {
                console.debug("PUT Text-Content into Store:", val);
            }).catch(err => {
                console.error("PUT TO DB HAS AN ERROR:", err);
                error.innerText = err.message;
                error.classList.add("active");
            });
        };
    }
}
//# sourceMappingURL=InputTextContent.js.map