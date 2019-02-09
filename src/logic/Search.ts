import elasticlunr from "elasticlunr";

/** 
 * TODO push indexing in service or webworker
 */
export default class Search {
    constructor() {
        this.indexAllFiles();
    }

    indexAllFiles() {
        pouchdDBSession.allDocs({
            include_docs: true,
            attachments: true,
        }).then(result => {
            searchFullTextIndex = elasticlunr(function () {
                this.setRef('id')
                this.addField('name')
                this.addField('textContent')
                this.addField('tags')
                this.addField('type')
            });


            // search subarrays if list is to long for main array
            for (const row of result.rows) {
                if (Array.isArray(row)) {
                    for (const subrow of row) {
                        searchFullTextIndex.addDoc(subrow.doc)
                    }
                } else {
                    searchFullTextIndex.addDoc(row.doc)
                }
            }

            console.debug("Indexing finished");
        }).catch(function (err) {
            console.error("ERROR BY INDEXING: ", err);
        });
    }
}

export function searchForFirst100Results(searchInput: string) {
    if (searchInput.length <= 2) return [{ ref: "min search length is 3", score: 5, matchData: undefined }]
    try {
        const searchResults = searchFullTextIndex.search(
            searchInput, {
                fields: {
                    name: { boost: 5 },
                    tags: { boost: 4 },
                    textContent: { boost: 2 }
                },
                boolean: "OR",
                expand: true
            }
        );
        console.log("searchResults", searchResults);
        return searchResults.splice(0, 100);

    } catch (error) {
        return [{ ref: error.message, score: 5, matchData: undefined }];
    }
}