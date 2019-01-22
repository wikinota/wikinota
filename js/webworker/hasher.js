/*global importScripts*/
/*global forge*/
importScripts("/js/libs/forge.min.js");   


onmessage = function (e) {
	const email = e.data[0];
	const pw = e.data[1];
	const hash = forge.pkcs5.pbkdf2(pw, email, 1000, 512);
	postMessage(forge.util.encode64(hash));
};