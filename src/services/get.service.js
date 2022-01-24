import {axiosService} from './axios.service';
import {urls} from '../configs/urls';

export const getService = {
    getCats:() => axiosService.get(urls.cat, {responseType:'blob'}).then(value => value.data),
    getCars:() => axiosService.get(urls.car, {responseType:'blob'}).then(value => value.data),
    getDogs:() => axiosService.get(urls.dog, {responseType:'blob'}).then(value => value.data),
    getGirl:() => axiosService.get(urls.girl, {responseType:'blob'}).then(value => value.data),
    getNotebook:() => axiosService.get(urls.notebook, {responseType:'blob'}).then(value => value.data)
}

