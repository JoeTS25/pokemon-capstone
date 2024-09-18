import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000";

class PokeApi {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.log("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${PokeApi.token}`};
        const params = (method === 'get') ? data : {};
        let testThis;
        try {
          testThis = await axios({ url, method, data, params, headers });
    
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
        console.log(testThis.data);
        return testThis.data
    }

    //Individual API routes
    /* Auth Routes */

    /* Login token */
    static async login(data) {
        let res = await this.request(`auth/token`, data, 'post');
        return res.token;
    }

    /* Sign Up */
    static async signup(data) {
        let res = await this.request('auth/register', data, "post");
        return res.token;
    }

    /* Save user profile page */
    static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }

    /* User Routes */

    /* Get the current user */
    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }
}

export default PokeApi;