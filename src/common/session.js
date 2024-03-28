import axios from "axios";

class Session {
    async initSession() {
        
    }

    async getAccessToken() {
        const me = this;

        let aid = '';

        const res = await axios({
            method: "GET",
            url: `${import.meta.env.VITE_API_TESTING_URL}/api/Auth/get-access-token`,
            headers: {
                'Authorization': `Bearer ${aid}`,
                'Content-Type': 'application/json'
            }
        });
    }
}

export default new Session();