import PouchDB from "pouchdb";
import Search from "logic/Search";
import userData from "./userData";
import CryptoPouch from 'crypto-pouch';

class DB {
    constructor() {
    }

    reloadDataBase() {
        if (pouchdDBSession == undefined) {
            new PouchDB('documentStore').destroy().then(() => {
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

    checkIfPasswordWasSuccesfully() {

    }

    initiDatabaseIfNotExist() {
        if (pouchdDBSession != undefined) return;
        if (userData.username == undefined) return;
        if (userData.pwdHash == undefined) return;

        console.info("creating new PouchDB Session");
        PouchDB.plugin(CryptoPouch);
        pouchdDBSession = new PouchDB('documentStore');

        // check if password was succesfully
        this.checkIfPasswordWasSuccesfully();

        (pouchdDBSession as any).crypto(userData.pwdHash);

        pouchdDBSessionSync = PouchDB.sync('documentStore', 'https://db.wikinota.org/wikinota_' + userData.username, ({
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