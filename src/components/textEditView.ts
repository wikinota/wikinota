import { cStyle } from "logic/CustomStyleIO";
import marked from "marked";
import { decryptItemData, encryptItemData } from "logic/DB";


export default class textEditView extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
    }

    get composedStyle() {
        return cStyle.general + "\n" + `
            
            #text {
                max-width: 99%;
                margin: 0 auto;
            }

            #saveButton {
                background: red;
                padding: 10px;
                text-align: center;
                width: 90%;
                margin: 30px auto;
            }

            textarea {
                width: 90%;
                min-height: 45vh;
                background: black;
                color: #fff;
            }
    
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
                <textarea id="text"></textarea>
                <hr>
                <div id="tagsHost">Tags:<input id="tags" type="tags" /></div>
                <div id="saveButton">SAVE</div>
            </div>
            `;

        this.goToDB(
            <HTMLTextAreaElement>shadowRoot.getElementById("text"),
            <HTMLInputElement>shadowRoot.getElementById("tags")
        );

        shadowRoot.getElementById("saveButton").onclick = () => this.saveChanges(
            <HTMLTextAreaElement>shadowRoot.getElementById("text"),
            <HTMLInputElement>shadowRoot.getElementById("tags")
        );
    }

    goToDB(textElement: HTMLTextAreaElement, tagsElement: HTMLInputElement) {
        console.log("this.getAttribute(item)", this.getAttribute("item"))
        pouchdDBSession.get(this.getAttribute("item")).then((doc: any) => {

            const rawDoc = decryptItemData(doc);
            console.debug("from DB:", rawDoc);

            if (rawDoc.cryptData != undefined && rawDoc.cryptData.textContent != undefined) {
                textElement.innerHTML = rawDoc.cryptData.textContent;
            } else if (rawDoc.textContent != undefined) {
                textElement.innerHTML = "!!!This data is not Crypted!!!  \n\n" + rawDoc.textContent;
            } else {
                textElement.innerHTML = "no data";
            }


            if (rawDoc.cryptData != undefined && rawDoc.cryptData.tags != undefined) {
                tagsElement.value = rawDoc.cryptData.tags;
            } else if (rawDoc.tags != undefined) {
                tagsElement.value = "!!!This data is not Crypted!!! >> " + rawDoc.tags;
            } else {
                tagsElement.value = "no data";
            }


        }).catch(err => {
            console.error("ERROR:", "textcontent--" + this.getAttribute("text"), " --- ", err);
        });
    }

    async saveChanges(textElement: HTMLTextAreaElement, tagsElement: HTMLInputElement) {
        const itemId = this.getAttribute("item");
        const doc = await pouchdDBSession.get(itemId).then((doc) => {
            const rawDoc = decryptItemData(doc);

            rawDoc.cryptData.textContent = textElement.value;
            rawDoc.cryptData.tags = tagsElement.value;

            return encryptItemData(rawDoc); // <-- no need to include rev as the second argument
        });

        await pouchdDBSession.put(doc);

        window.location.href = "#item?" + itemId;
    }
}