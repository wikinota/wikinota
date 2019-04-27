const userData = new Proxy({}, {
    set(target, name, value) {
        if (typeof value != "string") {
            console.error("ERROR: userData set musst be a string!");
            console.trace();
            return;
        }
        const styleIO = new UserDataIOLogic;
        const oldData = (styleIO.userData == undefined) ? {} : styleIO.userData;
        const tmp = Object.assign(oldData, { [name]: value });
        localStorage.setItem('userData', JSON.stringify(tmp));
        return true;
    },
    get(target, name) {
        const styleIO = new UserDataIOLogic;
        if (styleIO.userData === undefined || styleIO.userData[name] === undefined) {
            return undefined;
        }
        return styleIO.userData[name];
    }
});
class UserDataIOLogic {
    constructor() {
        this.userData = undefined;
        let userDataFromStore = localStorage.getItem('userData');
        if (userDataFromStore == undefined || userDataFromStore == "") {
            console.debug("No userData was set.");
            return;
        }
        try {
            this.userData = JSON.parse(userDataFromStore);
        }
        catch (e) {
            console.error("userData from Store was no valid JSON!");
            return;
        }
    }
}
export default userData;
//# sourceMappingURL=userData.js.map