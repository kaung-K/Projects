import axios from 'axios';

export const api_key = 'f81d14e639acb2640c0d22c5a2953e3d';

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})