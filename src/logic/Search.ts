import lunr from "lunr";

export default class Search {
    constructor() {
        this.indexAllFiles();
    }

    indexAllFiles() {
        pouchdDBSession.allDocs({
            include_docs: true,
            attachments: true,
            startkey: 'bar',
            endkey: 'quux'
        }).then(function (result) {
            console.debug("Indexing starting");
            lunrFullTextIndex = lunr((lunrBuilder) => {
                lunrBuilder.ref('id')
                lunrBuilder.field('DocId')
                lunrBuilder.field('name')
                lunrBuilder.field('textContent')
                lunrBuilder.field('tags')

                //TODO search subarrays if list is to long for main array

                for (const row of result.rows) {
                    lunrBuilder.add(
                        {
                            id: row.key,
                            DocId: row.id,
                            name: (row as any).name,
                            textContent: (row as any).textContent,
                            // tags: (row as any).tags
                        })
                }

                console.debug("Indexing finished");
            })
        }).catch(function (err) {
            console.error("ERROR BY INDEXING: ", err);
        });
    }
} 