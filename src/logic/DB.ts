import PouchDB from "pouchdb";
import Search from "logic/Search";
import userData from "./userData";
import forge from "node-forge";
import pouchDbFind from "pouchdb-find";
PouchDB.plugin(pouchDbFind);


class DB {
    constructor() {
    }

    reloadDataBase() {
        if (pouchdDBSession == undefined) {
            new PouchDB('documentStore' + userData.username).destroy().then(() => {
                this.initiDatabaseIfNotExist();
            }).catch(function (err) {
                // error occurred
            })
        };

        pouchdDBSession.destroy().then(() => {
            this.initiDatabaseIfNotExist();
        }).catch(function (err) {
            // error occurred
        })
    }

    initiDatabaseIfNotExist() {
        if (pouchdDBSession != undefined) return;
        if (userData.username == undefined) return;
        if (userData.pwdHash == undefined) return;

        console.info("creating new PouchDB Session");
        pouchdDBSession = new PouchDB('documentStore' + userData.username);

        pouchdDBSession.createIndex({
            index: { fields: ["name"] }
        });

        // das könnte eine sicherheuitsläcke sein xss
        pouchdDBSessionSync = PouchDB.sync('documentStore' + userData.username, 'https://db.wikinota.org/wikinota_' + userData.username, ({
            auth: {
                username: userData.username,
                password: userData.pwdHash,
            },
            live: true,
            retry: true
        } as any)).on('change', function (info: any) {
            // handle change
            console.debug("info", info)
        }).on('paused', function (err: any) {
            // replication paused (e.g. replication up to date, user went offline)
            console.debug("paused", err)
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

export function decryptItemData(doc: any) { // TODO type
    if (doc["cipher_text"] == undefined) return doc;
    const myObj = doc;

    var salt = forge.util.decode64(myObj.salt)
    var iv = forge.util.decode64(myObj.iv);
    var key = forge.pkcs5.pbkdf2(userData.pwdHash, salt, 40, 16);
    var decipher = forge.cipher.createDecipher('AES-CBC', key);
    decipher.start({ iv: iv });
    decipher.update(forge.util.createBuffer(forge.util.decode64(myObj.cipher_text)));
    decipher.finish();
    var decipheredText = decipher.output.toString();

    myObj["cryptData"] = JSON.parse(decipheredText);

    delete myObj["cipher_text"];
    delete myObj["salt"];
    delete myObj["iv"];

    return myObj;
}

export function encryptItemData(doc: any) { // TODO type
    if (doc["cryptData"] == undefined) return doc;
    const myObj = doc;
    var salt = forge.random.getBytesSync(128);
    var key = forge.pkcs5.pbkdf2(userData.pwdHash, salt, 40, 16);
    var iv = forge.random.getBytesSync(16);


    var cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(JSON.stringify(doc.cryptData)));
    cipher.finish();
    var cipherText = forge.util.encode64(cipher.output.getBytes());

    myObj["cipher_text"] = cipherText;
    myObj["salt"] = forge.util.encode64(salt);
    myObj["iv"] = forge.util.encode64(iv);

    delete myObj["cryptData"];

    return myObj;
}