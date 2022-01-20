import {axiosService} from "./axios.service";

import {urls} from "../config/urls";

export const commentService = {
    getById:(id) => axiosService.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}