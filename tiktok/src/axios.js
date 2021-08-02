import axios from "axios";

const instance=axios.create({
    baseURL:"https://mern-tiktok-backends.herokuapp.com/",
});

export default instance;