import { cStyle } from "logic/CustomStyleIO";

export default class DBHistory extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    constructor() {
        super();
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
        this.initChangeEventListener();
        this.setDocCount();
    }

    get composedStyle() {
        return cStyle.general + "\n" + `
        span {
            border: 1px solid #fff;
        }
        ` + "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <div>
        document Count:<span id="docCounter"></span><br>
        New Elements since reload: 
        <div id="itemHost"></div></div>
        `;
    }

    addEventToList(doc: PouchDB.Core.ExistingDocument<{}>) {
        const newElement = document.createElement("div");
        const title = document.createElement("span");
        const value = document.createElement("span");
        title.innerText = doc._id;
        title.classList.add("title");
        value.innerText = ((doc as any)["textContent"] as string).slice(0, 100);
        value.classList.add("value");

        newElement.appendChild(title);
        newElement.appendChild(value);

        const firstEventInItemHost = this.shadowRoot.querySelector("#itemHost div");

        if (firstEventInItemHost == null) {
            this.shadowRoot.getElementById("itemHost").prepend(newElement);

        } else {
            this.shadowRoot.querySelector("#itemHost div").prepend(newElement);
        }

    }

    setDocCount() {
        pouchdDBSession.info().then(info => {
            this.shadowRoot.getElementById("docCounter").innerText = "" + info.doc_count;
        });
    }

    initChangeEventListener() {
        console.debug("create ChangeEventListener");
        pouchdDBSession.changes({
            since: "now",
            live: true,
            include_docs: true
        }).on('change', change => {
            this.setDocCount();
            console.debug("DB changed -> ", change);
            this.addEventToList(change.doc);
        });
    }
}