export default class Router {
    constructor() {
        this.urlChanged();
    }

    createRouterSession() {
        console.debug("Router: createRouterSession");

        window.onhashchange = (evt) => {
            console.debug("Router: url changed:", window.location.pathname);
        }
    }

    urlChanged() {
        const hash = window.location.hash;
        if (hash.indexOf("#") == -1) window.location.hash = "#desktop";
    }
}