import axios from "axios";

const instance = axios.creater({
    baseURL : "http://api.themoviebd.org/3",
})

export default instance;