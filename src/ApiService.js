import axios from "axios";

class ApiService {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL,
        });
    }

    //Infos utilisateur & Complétion objectif
    async getUser(userId) {
        try {
            const response = await this.api.get(`/user/${userId}`);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }

    //Activité quotidienne & Chiffres clés
    async getUserActivity(userId) {
        try {
            const response = await this.api.get(`/user${userId}/activity`);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }

    //Durée sessions
    async getUserSessions(userId) {
        try {
            const response = await this.api.get(`/user${userId}/average-sessions`);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }

    //Types d'activité
    async getUserPerformance(userId) {
        try {
            const response = await this.api.get(`/user${userId}/performance`);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }


}

export default ApiService;
