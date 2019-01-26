/**
 * GitHub: https://github.com/wikinota/wikinota
 * License: GNU Affero General Public License v3.0
 */

import CustomTemplateIO from "logic/CustomStyleIO";
import loginCom from "components/login";
import headerCom from "components/header";
new CustomTemplateIO;


customElements.define('login-com', loginCom);
customElements.define('header-com', headerCom);

console.debug("XXXXX FIRST RENDER FINISHED XXXXX");