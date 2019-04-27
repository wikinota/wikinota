var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { cStyle } from "logic/CustomStyleIO";
export default class underPaths extends HTMLElement {
    constructor() {
        super();
        this.shadowRootDom = undefined;
        this.name = "";
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
        const shadowRoot = this.shadowRootDom;
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
        const hostElement = this.shadowRoot.getElementById("host");
        this.getPathFromDB(this.name).then(docs => {
            console.log("UNDERPATH", docs);
            this.createPathLinks(docs, hostElement);
        });
    }
    createPathLinks(docs, hostElement) {
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
    getPathFromDB(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pouchdDBSession.find({
                selector: {
                    name: { $regex: name.split("/").join("\\/") + "\/.*" }
                }
            });
        });
    }
}
//# sourceMappingURL=underPaths.js.map