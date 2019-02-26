import { cStyle } from "logic/CustomStyleIO";

export default class underPaths extends HTMLElement {
    shadowRootDom: ShadowRoot = undefined

    name: string = ""

    constructor() {
        super();
        this.name = this.getAttribute("name");
        this.shadowRootDom = this.attachShadow({ mode: 'open' });
        this.newRender();
        this.initElementLoad();
    }

    get composedStyle() {
        return cStyle.general + "\n" + `
            * a,
            * a:active,
            * a:visited {
                color: #268bd2;
            }
            a {
                display: block;
            }
        ` + "\n" + cStyle.header;
    }

    newRender() {
        const shadowRoot = this.shadowRootDom

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.6.3/css/all.min.css" integrity="sha384-0t/JV0VqVTwxLAiMN7InD2kF+hreM+s1FynETAE/d21qGK7DuTjZGJ+QTB3BDCV/" crossorigin="anonymous">
        <style>${this.composedStyle}</style>
        <div id="underPathElementShow">
        Childs:
            <div id="host"></div>
        </div>
        `;
    }

    initElementLoad() {
        const hostElement = <HTMLDivElement>this.shadowRoot.getElementById("host");

        this.getPathFromDB(this.name).then(docs => {
            console.log("UNDERPATH", docs);
            this.createPathLinks(docs, hostElement);
        })
    }

    createPathLinks(docs: PouchDB.Find.FindResponse<{}>, hostElement: HTMLDivElement) {
        const newTmpElment = document.createElement("div");

        docs.docs.forEach(doc => {
            const link = document.createElement("a");
            link.href = "#item?" + doc._id;
            link.innerText = doc._id;
            newTmpElment.appendChild(link);
        });

        hostElement.innerHTML = "";
        hostElement.appendChild(newTmpElment);
    }

    async getPathFromDB(name: string) {
        return await pouchdDBSession.find({
            selector: {
                name: { $regex: name.split("/").join("\\/") + "\/.*" }
            }
        });
    }
}