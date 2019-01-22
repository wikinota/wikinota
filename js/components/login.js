import { el, mount, setStyle } from "/js/libs/redom.es.min.js";


export default function (target) {
	const pwField = el("input", { type: "password" });
	const emailField = el("input", { type: "email" });

	let hashWorker;

	const loginForm = el("form",
		emailField, pwField
	);

	const loadingIndicator = el("div", "LOADING……");
	const hashField = el("div", "no Hash");
	setStyle(hashField, { "word-break": "break-all" });

	const hasher = () => {
		if (hashWorker != undefined) hashWorker.terminate();

		hashWorker = new Worker("/js/webworker/hasher.js");
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