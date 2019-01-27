declare var __webpack_public_path__: string;
declare var pouchdDBSession: PouchDB.Database;


interface CustomStyle {
    isSet: boolean
    general: string // on any shadow dom
    header: string
    login: string
}

interface Window {
    customStyle: CustomStyle
}