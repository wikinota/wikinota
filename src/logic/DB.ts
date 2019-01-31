import PouchDB from "pouchdb";
import Search from "logic/Search";
PouchDB.plugin(require('transform-pouch'));

class DB {
    constructor() {
        this.initiDatabaseIfNotExist();
    }

    initiDatabaseIfNotExist() {
        if (pouchdDBSession == undefined) {
            console.info("creating new PouchDB Session")
            pouchdDBSession = new PouchDB('documentStore');

            pouchdDBSession.info().then((info) => {
                console.info("DB INFO:", info);
                this.initIndexer();
            })
        }
    }

    initIndexer() {
        console.log("INDEX");
        // index all
        new Search();

        // index future changes
        pouchdDBSession.changes({
            since: "now",
            live: true,
            include_docs: true
        }).on('change', change => {
            // if change happen, rebuild the index.
            new Search();
        });
    }
}
export default DB;