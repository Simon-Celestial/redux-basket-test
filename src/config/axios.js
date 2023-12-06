import axios from "axios";


export const API = axios.create({
    baseURL: 'https://some-domain.com/api',
    // headers: {
    //     "Authorization": `${localStorage.setItem('token')}`
    // }
});