import axios from "axios";

const url = 'http://91.201.233.14/api/v2';

export const carService = {
    getAll: () => axios.get(`${url}/cars`).then(value => value.data),
    updateById: (id, car) => axios.patch(`${url}/cars/${id}`, car).then(value => value.data)
}

