import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: API_BASE_URL,
        });
    }

    async getUser(id) {
        try {
            const response = await this.api.get(`/user/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching user:", error);
            throw new Error("Failed to fetch user data");
        }
    }

    async getUserActivity(id) {
        try {
            const response = await this.api.get(`/user/${id}/activity`);
            return response.data;
        } catch (error) {
            console.error("Error fetching user activity:", error);
            throw new Error("Failed to fetch user activity data");
        }
    }


}

export default ApiService;
