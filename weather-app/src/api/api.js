import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
});

export const api_key = "ab8d000392a430b6579fb1bccb7f5c1f"