interface RoutingMap {
    [key: string]: string
}

export default class Router {
    constructor() {
        this.urlChanged();
        this.createRouterSession();
    }

    routingMap: RoutingMap = {
        "#dashboard": "dashboard-com"
    }

    createRouterSession() {
        console.debug("Router: createRouterSession");

        window.onhashchange = () => {
            this.urlChanged();
        }
    }

    urlChanged() {
        const hash = window.location.hash;
        console.debug("Router: url changed:", hash);

        // if no hash query is there go to desktop
        // TODO check if login
        if (hash.indexOf("#") == -1) window.location.hash = "#dashboard";

        const desiredComponment = this.getDesiredComponentFromHash(hash);
        console.log("desiredComponment", desiredComponment);
        this.giveRouterDivComponent(desiredComponment);
    }

    getDesiredComponentFromHash(hash: string): string {
        const selectedCom = this.routingMap["#dashboard"];

        try {
            if (this.routingMap[hash] != undefined) {
                return this.routingMap[hash];
            } else {
                window.location.hash = "#dashboard";
                return "NONE";
            }
        } catch (error) {
            console.error("Router: unvalide route");
            window.location.hash = "#dashboard";
            return "NONE";
        }


        return "NONE";
    }

    giveRouterDivComponent(component: string) {
        const routerDiv = document.getElementById("routerDiv");
        routerDiv.innerHTML = `<${component}></${component}>`;
    }
}