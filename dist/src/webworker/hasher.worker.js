const forge = require('node-forge');
onmessage = function (e) {
    const email = e.data[0];
    const pw = e.data[1];
    const hash = forge.pkcs5.pbkdf2(pw, email, 25000, 512);
    postMessage(forge.util.encode64(hash));
};
//# sourceMappingURL=hasher.worker.js.map