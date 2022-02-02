import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const commentService = {
    getAll:()=>axiosService.get(urls.comments).then(value => value.data)
}