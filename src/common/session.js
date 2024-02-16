class Session {
    async initSession() {
        const me = this;

        await me.getUserLogin();
    }

    async getUserLogin() {
        let userlogin = sessionStorage.getItem("UserLogin");
        if(userlogin) {

        }
    }
}

export default new Session();