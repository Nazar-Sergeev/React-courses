const axios = require("axios");
const baseURL = require("../configs/urls");

const axiosService = axios.create({baseURL});

export default axiosService;