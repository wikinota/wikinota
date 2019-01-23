import { el, mount, setStyle } from "redom";
// import hashWorkerModule from "webworker/hasher";
import WorkerHash from 'webworker/hasher.worker.ts';

export default function (target: HTMLElement) {
	const pwField = el("input", { type: "password" }) as HTMLInputElement;
	const emailField = el("input", { type: "email" }) as HTMLInputElement;

	let hashWorker: Worker;

	const loginForm = el("form",
		emailField, pwField
	);

	const loadingIndicator = el("div", "LOADING……");
	const hashField = el("div", "no Hash");
	setStyle(hashField, { "word-break": "break-all" });

	const hasher = () => {
		if (hashWorker != undefined) hashWorker.terminate();

		hashWorker = new WorkerHash();
		hashWorker.postMessage([emailField.value, pwField.value]);
		loadingIndicator.style.display = "block";

		hashWorker.onmessage = function (e) {
			hashField.textContent = e.data;
			loadingIndicator.style.display = "none";
		};
	};

	emailField.oninput = hasher;
	pwField.oninput = hasher;

	mount(target, loginForm);
	mount(target, loadingIndicator);
	mount(target, hashField);
}