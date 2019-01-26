interface UserData {
    username: string,
    pwdHash: string,
}

const userData = new Proxy(({} as UserData), {
    set(target, name, value: string) {
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
        if (styleIO.userData === undefined || (styleIO as any).userData[name] === undefined) {
            return undefined;
        }
        return (styleIO as any).userData[name];
    }
});


class UserDataIOLogic {
    userData: CustomStyle = undefined;
    constructor() {
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