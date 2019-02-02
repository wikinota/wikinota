interface RoutingMap {
    [key: string]: string
}

export default class Router {
    constructor() {
        this.urlChanged();
        this.createRouterSession();
    }

    routingMap: RoutingMap = {
        "#dashboard": "dashboard-com",
        "#item": "textcontent-com",
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

        const hashParameter = hash.split("?");
        // Get only the component of the url
        const hashComponent = hashParameter[0];

        const desiredComponment = this.getDesiredComponentFromHash(hashComponent);
        console.log("desiredComponment", desiredComponment);
        this.giveRouterDivComponent(desiredComponment, hashParameter);
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

    giveRouterDivComponent(component: string, parameter: string[]) {
        const routerDiv = document.getElementById("routerDiv");
        // HACK makes XSS posible (need to reuse components so the event calle are reuesed)

        if (component == "textcontent-com") {
            routerDiv.innerHTML = `<${"textcontent-com"}  item="${parameter[1]}"></${component}>`;
            return;
        }

        routerDiv.innerHTML = `<${component}  ${parameter.join(" ")}></${component}>`;


        // prameter.forEach(item => {
        //     const itemSplit = item.split("=");

        // })
    }
}