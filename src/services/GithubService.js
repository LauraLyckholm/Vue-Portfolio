import axios from "axios";

const API = "https://api.github.com/users/LauraLyckholm";

const apiClient = axios.create({
    baseURL: API,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})

export default {
    getProjects() {
        return apiClient.get("/repos")
    }
}