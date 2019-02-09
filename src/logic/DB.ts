import PouchDB from "pouchdb";
import Search from "logic/Search";
import userData from "./userData";
import forge from "node-forge";
PouchDB.plugin(require('transform-pouch'));

class DB {
    constructor() {
        this.initiDatabaseIfNotExist();
    }

    initiDatabaseIfNotExist() {
        if (pouchdDBSession == undefined) {
            console.info("creating new PouchDB Session")
            pouchdDBSession = new PouchDB('documentStore');

            (pouchdDBSession as any).transform({
                incoming: function (doc: any) {

                    // decrypt some bytes using GCM mode
                    console.log("userData.pwdHash", userData.pwdHash, "--", forge.random.getBytesSync(16));
                    const decipher = forge.cipher.createDecipher('AES-GCM', forge.util.createBuffer(userData.pwdHash));
                    console.log("decipher", decipher);

                    decipher.start({
                        iv: doc.cryptIv,
                        tagLength: 128, // optional, defaults to 128 bits
                        tag: doc.cryptTag // authentication tag from encryption
                    });
                    decipher.update(forge.util.createBuffer(doc.cryptData));
                    const pass = decipher.finish();
                    // pass is false if there was a failure (eg: authentication tag didn't match)
                    if (pass) {
                        // outputs decrypted hex
                        console.log(decipher.output.toHex());
                    }

                    return JSON.parse(decipher.output.toHex());
                },
                outgoing: function (doc: any) {
                    const iv = forge.random.getBytesSync(128);

                    // encrypt some bytes using GCM mode
                    var cipher = forge.cipher.createCipher('AES-GCM', forge.util.createBuffer(userData.pwdHash));
                    cipher.start({
                        iv: iv, // should be a 12-byte binary-encoded string or byte buffer
                        tagLength: 128 // optional, defaults to 128 bits
                    });
                    cipher.update(forge.util.createBuffer(JSON.stringify(doc)));
                    cipher.finish();
                    var encrypted = cipher.output;
                    var tag = cipher.mode.tag;

                    // hash the id
                    var md = forge.md.sha512.create();
                    md.update(userData.username + doc._id);

                    const encryptedDoc = {
                        _id: md.digest().toHex(),
                        _rev: doc._rev,
                        cryptIv: iv.toHex(),
                        cryptTag: tag,
                        cryptData: encrypted.toHex()
                    };

                    console.log("encryptedDoc", encryptedDoc);

                    return encryptedDoc;
                }
            });

            pouchdDBSessionSync = PouchDB.sync('documentStore', 'http://wikinota.org:5984/xxx', {
                auth: {
                    username: 'xxx',
                    password: 'xxx'
                },
                live: true,
                retry: true
            }).on('change', function (info: any) {
                // handle change
                console.debug("info", info)
            }).on('paused', function (err: any) {
                // replication paused (e.g. replication up to date, user went offline)
                console.debug("err", err)
            }).on('active', function () {
                console.debug("active")
                // replicate resumed (e.g. new changes replicating, user went back online)
            }).on('denied', function (err: any) {
                console.debug("err", err)
                // a document failed to replicate (e.g. due to permissions)
            }).on('complete', function (info: any) {
                // handle complete
                this.searchSessoin.indexAllFiles();
                console.debug("info", info)
            }).on('error', function (err: any) {
                console.debug("err", err)
                // handle error
            });


            pouchdDBSession.info().then((info) => {
                console.info("DB INFO:", info);
                this.initIndexer();
            })
        }
    }

    initIndexer() {
        console.log("INDEX");
        // index all
        const searchSessoin = new Search();
        searchSessoin.indexAllFiles();

        // index future changes
        // pouchdDBSession.changes({
        //     since: "now",
        //     live: true,
        //     include_docs: true
        // }).on('change', change => {
        //     // if change happen, rebuild the index.
        //     searchSessoin.indexAllFiles();
        // });
    }
}
export default DB;