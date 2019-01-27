import PouchDB from "pouchdb";
PouchDB.plugin(require('transform-pouch'));

class DB {
    constructor() {
        this.initiDatabaseIfNotExist();
    }

    initiDatabaseIfNotExist() {
        if (pouchdDBSession == undefined) {
            console.info("creating new PouchDB Session")
            pouchdDBSession = new PouchDB('documentStore');
        }
    }
}
export default DB;