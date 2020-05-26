import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "http://localhost:7777/api",
        headers: {
            Authorization: token
        }
    });
}
