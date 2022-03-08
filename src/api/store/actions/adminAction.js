import axios from 'axios'
import { urlBase } from '../../../component/authContext/constant'
import * as Types from '../type'
export const setAdmin = (user) => async dispatch => {
    dispatch({
        type: Types.SET_ADMIN,
        payload: user
    })
}