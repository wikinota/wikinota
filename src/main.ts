/**
 * GitHub: https://github.com/wikinota/wikinota
 * License: GNU Affero General Public License v3.0
 */
import Router from "logic/Router";
import { cStyle } from "logic/CustomStyleIO";
import headerCom from "components/header";
import Dashboard from "components/Dashboard";
import loginCom from "components/login";
import InputTextContent from "components/InputTextContent";
import textContentView from "components/textContentView";
import DBHistory from "components/DBHistory";
import Modal from "components/modal";
import last100Docs from "components/last100Docs";
import DB from "logic/DB";
const db = new DB;
db.initiDatabaseIfNotExist();

const routersession = new Router;
routersession.createRouterSession();

var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(cStyle.general));
document.getElementsByTagName('head')[0].appendChild(style);

customElements.define('header-com', headerCom);
customElements.define('dashboard-com', Dashboard);
customElements.define('login-com', loginCom);
customElements.define('inputtextcontent-com', InputTextContent);
customElements.define('dbhistory-com', DBHistory);
customElements.define('modal-com', Modal);
customElements.define('textcontent-com', textContentView);
customElements.define('last100docs-com', last100Docs);

console.debug("XXXXX FIRST RENDER FINISHED XXXXX");