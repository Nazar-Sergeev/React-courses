import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumService = {
    getAll:() => axiosService.get(urls.albums).then(value => value.data),
    getById:(id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}