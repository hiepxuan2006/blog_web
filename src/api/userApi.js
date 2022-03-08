import axios from 'axios'
import { urlBase } from '../component/authContext/constant'
const loginUser = async (data) => {
    return axios.post(`${urlBase}/auth/login`, data)
}
const registerUser = async (data) => {
    return axios.post(`${urlBase}/auth/register`, data)

}
export { loginUser, registerUser }