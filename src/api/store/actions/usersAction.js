import axios from 'axios'
import { urlBase } from '../../../component/authContext/constant'
import * as Types from '../type'
export const userSetAuth = (user) => async dispatch => {
    dispatch({
        type: Types.SET_AUTH,
        payload: user
    })
}
export const logoutUser = () => async dispatch => {
    dispatch({
        type: Types.PROCESS_LOGOUT,
        payload: {}
    })
}
export const getAllUser = () => async dispatch => {
    try {
        const result = await axios.get(`${urlBase}/auth/get-all-user`)
        dispatch({ type: Types.GET_ALL_USER, payload: result.data.users })

    } catch (error) {

    }


}
