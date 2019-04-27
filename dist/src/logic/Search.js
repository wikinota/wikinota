import elasticlunr from "elasticlunr";
import userData from "./userData";
import { decryptItemData } from "logic/DB";
/**
 * TODO push indexing in service or webworker
 */
export default class Search {
    constructor() {
        // this.indexAllFiles();
    }
    indexAllFiles() {
        if (pouchdDBSession == undefined
            || userData.username == undefined
            || userData.pwdHash == undefined) {
            console.error("userData.username", userData.username, "userData.pwdHash", userData.pwdHash, "pouchdDBSession", pouchdDBSession);
        }
        ;
        pouchdDBSession.allDocs({
            include_docs: true,
            attachments: true,
        }).then(result => {
            searchFullTextIndex = elasticlunr(function () {
                this.setRef('_id');
                this.addField('name');
                this.addField('textContent');
                this.addField('tags');
                this.addField('type');
            });
            // search subarrays if list is to long for main array
            for (const row of result.rows) {
                if (Array.isArray(row)) {
                    for (const subrow of row) {
                        searchFullTextIndex.addDoc(decryptItemData(subrow.doc));
                    }
                }
                else {
                    searchFullTextIndex.addDoc(this.flattenDecryptData(decryptItemData(row.doc)));
                }
            }
            console.debug("Indexing finished");
        }).catch(function (err) {
            console.error("ERROR BY INDEXING: ", err);
        });
    }
    flattenDecryptData(decryptedItemData) {
        let faltCryptDoc = {};
        if (decryptedItemData.cryptData == undefined) {
            faltCryptDoc = decryptedItemData;
        }
        else {
            faltCryptDoc = Object.assign({}, decryptedItemData, decryptedItemData.cryptData);
            delete faltCryptDoc["cryptData"];
        }
        return faltCryptDoc;
    }
}
export function searchForFirst100Results(searchInput) {
    if (searchInput.length <= 2)
        return [{ ref: "min search length is 3", score: 5, matchData: undefined }];
    try {
        const searchResults = searchFullTextIndex.search(searchInput, {
            fields: {
                name: { boost: 5 },
                tags: { boost: 4 },
                textContent: { boost: 2 }
            },
            boolean: "OR",
            expand: true
        });
        console.log("searchResults", searchResults);
        return searchResults.splice(0, 100);
    }
    catch (error) {
        return [{ ref: error.message, score: 5, matchData: undefined }];
    }
}
//# sourceMappingURL=Search.js.map