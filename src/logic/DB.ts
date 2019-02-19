import PouchDB from "pouchdb";
import Search from "logic/Search";
import userData from "./userData";
import CryptoPouch from 'crypto-pouch';

class DB {
    constructor() {
        this.initiDatabaseIfNotExist();
    }

    initiDatabaseIfNotExist() {
        if (pouchdDBSession == undefined) {
            console.info("creating new PouchDB Session");
            pouchdDBSession = new PouchDB('documentStore');

            PouchDB.plugin(CryptoPouch);
            (pouchdDBSession as any).crypto(userData.pwdHash);

            pouchdDBSessionSync = PouchDB.sync('documentStore', 'http://wikinota.org:5984/xxx', ({
                auth: {
                    username: 'xxx',
                    password: 'xxx'
                },
                live: true,
                retry: true
            } as any)).on('change', function (info: any) {
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