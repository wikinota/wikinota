import lunr from "lunr";

/** 
 * TODO push indexing in service or webworker
 */
export default class Search {
    constructor() {
    }

    indexAllFiles() {
        pouchdDBSession.allDocs({
            include_docs: true,
            attachments: true,
        }).then(result => {
            console.debug("Indexing starting", result);
            lunrFullTextIndex = lunr((lunrBuilder) => {
                lunrBuilder.ref('id')
                lunrBuilder.field('DocId')
                lunrBuilder.field('name')
                lunrBuilder.field('textContent')
                lunrBuilder.field('tags')

                // search subarrays if list is to long for main array
                for (const row of result.rows) {
                    if (Array.isArray(row)) {
                        for (const subrow of row) {
                            this.addToLunrBuilder(lunrBuilder, subrow);
                        }
                    } else {
                        this.addToLunrBuilder(lunrBuilder, row);
                    }
                }

                console.debug("Indexing finished");
            })
        }).catch(function (err) {
            console.error("ERROR BY INDEXING: ", err);
        });
    }

    addToLunrBuilder(lunrBuilder: lunr.Builder, row: any) {
        lunrBuilder.add(
            {
                id: row.key,
                DocId: row.doc.name,
                name: (row as any).doc.name,
                textContent: (row as any).doc.textContent,
                tags: (row as any).doc.tags
            })

    }
}

export function searchForFirst100Results(searchInput: string): lunr.Index.Result[] {
    if (searchInput.length <= 2) return [{ ref: "min search length is 3", score: 5, matchData: undefined }]
    try {
        const searchResults = lunrFullTextIndex.search(searchInput);
        return searchResults.splice(0, 100);

    } catch (error) {
        return [{ ref: error.message, score: 5, matchData: undefined }];
    }
}