import axios from "axios";
import { urlBase } from "../component/authContext/constant";
const createNewPost = async (data) => {
    return axios.post(`${urlBase}/post/create`, data)
}
const getAllPost = async (data) => {
    return axios.get(`${urlBase}/post/getpost`)
}
export { createNewPost, getAllPost }