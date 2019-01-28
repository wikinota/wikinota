/**
 * GitHub: https://github.com/wikinota/wikinota
 * License: GNU Affero General Public License v3.0
 */
import { cStyle } from "logic/CustomStyleIO";
import headerCom from "components/header";
import Dashboard from "components/Dashboard";
import DB from "logic/DB";
new DB;


var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(cStyle.general));
document.getElementsByTagName('head')[0].appendChild(style);

customElements.define('header-com', headerCom);
customElements.define('dashboard-com', Dashboard);

console.debug("XXXXX FIRST RENDER FINISHED XXXXX");