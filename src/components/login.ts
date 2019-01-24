import WorkerHash from 'webworker/hasher.worker.ts';

export default class LoginCom extends HTMLElement {

	emailField: HTMLInputElement = undefined;
	password: HTMLInputElement = undefined;
	send: HTMLButtonElement = undefined;
	loadingIndicator: HTMLDivElement = undefined;
	hashOutput: HTMLDivElement = undefined;
	hashWorker: Worker;


	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });

		const styles = `
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
        `;

		shadowRoot.innerHTML = `
            <style>${styles}</style>
			<div>
				<input id="email"></input>
				<input id="password"></input>
				<button id="send">Send</button>
				<div id="loadingIndicator">Loading…</div>
			</div>
			<div id="hashOutput">
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
		if (this.hashWorker != undefined) this.hashWorker.terminate();

		this.hashWorker = new WorkerHash();
		this.hashWorker.postMessage([this.emailField.value, this.password.value]);
		this.loadingIndicator.style.display = "block";

		this.hashWorker.onmessage = (e) => {
			this.hashOutput.textContent = e.data;
			this.loadingIndicator.style.display = "none";
		};
	}
}