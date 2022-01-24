import {axiosService} from "./axios.service";
import baseURL, {urls} from "../configs/urls";

export const getService = {
    getAll:(value) => axiosService.get(urls[`${value}`], { responseType: 'blob' }).then(value => value.data)
}
// axios.get(url, { responseType: 'blob' })

