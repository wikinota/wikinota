import WorkerHash from 'webworker/hasher.worker.ts';
import userData from 'logic/userData';
import DB from 'logic/DB';
import { cStyle } from "logic/CustomStyleIO";
export default class LoginCom extends HTMLElement {
    constructor() {
        super();
        this.emailField = undefined;
        this.password = undefined;
        this.send = undefined;
        this.loadingIndicator = undefined;
        this.hashOutput = undefined;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const styles = cStyle.general + "\n" + `
			:host  {
				margin: 10px;
			}
            header {
                top: 0;
                position: sticky;
                font-family: fa;
                width: 100%;
                height: 35px;
                background: #03c0ff;
                color: #000;
                padding:0 5px;
            }
            span {
                height: 100%;
                text-align: center;
                line-height: 35px;
                font-size: 20px;
			}
			#loadingIndicator {
				display: none;
			}
			#hashOutput {
				word-break: break-all;
			}
			.loginmask input{
				display: block;
				margin-bottom: 5px;
			}
        ` + "\n" + cStyle.login;
        shadowRoot.innerHTML = `
            <style>${styles}</style>
			<div class="loginmask">
				<input id="email" type="email" placeholder="Email" value="demo"></input>
				<input id="password" type="password" placeholder="Password" value="omed"></input>
				<button id="send">Calculate Hash and Login</button>
				<div id="loadingIndicator">Loading…</div>
			</div>
			<div id="hashOutput">
			From LocalStorage: <br> ${userData.pwdHash}
			</div>
		`;
        this.emailField = this.shadowRoot.querySelector('#email');
        this.password = this.shadowRoot.querySelector('#password');
        this.send = this.shadowRoot.querySelector('#send');
        this.loadingIndicator = this.shadowRoot.querySelector('#loadingIndicator');
        this.hashOutput = this.shadowRoot.querySelector('#hashOutput');
        this.send.onclick = () => {
            this.calculateHash();
        };
    }
    calculateHash() {
        if (this.hashWorker != undefined)
            this.hashWorker.terminate();
        this.hashWorker = new WorkerHash();
        this.hashWorker.postMessage([this.emailField.value, this.password.value]);
        this.loadingIndicator.style.display = "block";
        userData.username = this.emailField.value;
        this.hashWorker.onmessage = (e) => {
            userData.pwdHash = e.data;
            this.hashOutput.textContent = e.data;
            this.loadingIndicator.style.display = "none";
            const db = new DB();
            db.reloadDataBase();
        };
    }
}
//# sourceMappingURL=login.js.map