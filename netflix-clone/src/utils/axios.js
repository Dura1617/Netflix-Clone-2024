import axios from "axios";

const instance = axios.creater({
	baseURL: "https://api.themoviedb.org/3",
});

export default instance;
