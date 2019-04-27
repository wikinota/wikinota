import { cStyle } from "logic/CustomStyleIO";
export default class Last100Docs extends HTMLElement {
    constructor() {
        super();
        this.shadowRootDom = undefined;
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
    }
    get composedStyle() {
        return cStyle.general + "\n" + `
        a {
            color: #cb4b16;
            text-decoration: none;
        }
        ` + "\n" + cStyle.header;
    }
    newRender() {
        const shadowRoot = this.shadowRootDom;
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <div>Last 100 Doc changes:</div>
        <div id="last100Table">
        NONE
        </div>
        `;
        this.getLast100Docs();
    }
    getLast100Docs() {
        pouchdDBSession.info().then((info) => {
            const curentDocs = info.doc_count;
            if (curentDocs > 100)
                curentDocs == 100;
            const last100Table = this.shadowRoot.getElementById("last100Table");
            last100Table.innerHTML = "";
            pouchdDBSession.changes({
                since: curentDocs - 100,
                include_docs: false
            }).then((changes) => {
                changes.results.reverse().forEach(doc => {
                    last100Table.innerHTML += `<div><a href="#item?${doc.id}">${doc.id}</a></div>`;
                });
            });
        });
    }
}
//# sourceMappingURL=last100Docs.js.map