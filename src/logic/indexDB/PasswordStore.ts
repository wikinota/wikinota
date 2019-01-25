export default class PasswordStore {
    dbRequest: IDBRequest = undefined;
    userDB: IDBDatabase = undefined;
    userOBS: IDBObjectStore = undefined;

    constructor() {
        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
        }
        this.dbRequest = window.indexedDB.open("userData", 3);
        this.dbRequest.onerror = (ev) => {
            console.error("ERROR - by opening the UserDataBase ->", ev);
            alert("Something went Wrong! - please reload the APP --- ERROR" + " by opening the UserDataBase");
        }
        this.dbRequest.onsuccess = (ev: Event & { target: { result: IDBDatabase } }) => {
            this.userDB = ev.target.result;
            this.userOBS = this.userDB.createObjectStore("userLoginData", { keyPath: "ssn" });
        }
    }

    /**
     * sets the userPw into the indexDB
     * @param  {string} input - the hash ow the userPW
     * @returns {void}
     */
    set userPw(input: string) {
        if (this.checkIfDbIsUndefined()) return;
        console.debug("Saved userPwHash->", { input });
    }

    /**
     * checks if the parameter this.iDB is undefined
     * @returns true if undefined | false if defined
     */
    checkIfDbIsUndefined(recheck = false) {
        if (this.userDB === undefined) {
            console.error("ERROR - DB is not open in class PasswordStore");
            console.trace();
            return true;
        }
        return false;
    }

}