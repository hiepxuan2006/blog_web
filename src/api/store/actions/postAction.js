import axios from 'axios'
import { urlBase } from '../../../component/authContext/constant'
import * as Types from '../type'
export const getpost = (data) => async dispatch => {
    try {
        // dispatch({ type: Types.SET_LOADING, payload: true })

        const result = await axios.get(`${urlBase}/post/getpost`)

        dispatch({ type: Types.GET_POST, payload: result.data.post })
        // dispatch({ type: Types.SET_LOADING, payload: false })


    } catch (error) {

    }


}
export const getPostById = (data) => async dispatch => {
    try {
        // dispatch({ type: Types.SET_LOADING, payload: true })

        const result = await axios.get(`${urlBase}/post/get-post-id?_id=${data}`)
        // dispatch({ type: Types.SET_LOADING, payload: false })

        dispatch({ type: Types.GET_POST_BY_ID, payload: result.data.post })

    } catch (error) {

    }


}
export const getPostCategory = (data) => async dispatch => {
    try {
        // dispatch({ type: Types.SET_LOADING, payload: true })

        const result = await axios.get(`${urlBase}/post/get-post-category?category=${data}`)
        // dispatch({ type: Types.SET_LOADING, payload: false })

        dispatch({ type: Types.GET_POST_BY_CNDL, payload: result.data.post })

    } catch (error) {

    }


}
//  get danh sach cacs baif viết liên quan đến đà lạt
export const getPostDalat = (data) => async dispatch => {
    try {
        // dispatch({ type: Types.SET_LOADING, payload: true })

        const result = await axios.get(`${urlBase}/post/get-post-place?place=${data}`)
        // dispatch({ type: Types.SET_LOADING, payload: false })

        dispatch({ type: Types.GET_POST_DA_LAT, payload: result.data.post })

    } catch (error) {

    }


}

export const getPostCNAU = (data) => async dispatch => {
    try {
        // dispatch({ type: Types.SET_LOADING, payload: true })

        const result = await axios.get(`${urlBase}/post/get-post-category?category=${data}`)
        // dispatch({ type: Types.SET_LOADING, payload: false })

        dispatch({ type: Types.GET_POST_BY_CNAU, payload: result.data.post })

    } catch (error) {

    }


}
export const getPostPlace = (data) => async dispatch => {
    try {
        dispatch({ type: Types.SET_LOADING, payload: true })

        const result = await axios.get(`${urlBase}/post/get-place`)
        dispatch({ type: Types.SET_LOADING, payload: false })

        dispatch({ type: Types.GET_POST_PLACE, payload: result.data.postPlace })

    } catch (error) {

    }


}
export const getPostPlaceItem = (data) => async dispatch => {
    try {
        // dispatch({ type: Types.SET_LOADING, payload: true })

        const result = await axios.get(`${urlBase}/post/get-place-item?place=${data}`)
        // dispatch({ type: Types.SET_LOADING, payload: false })

        dispatch({ type: Types.GET_POST_PLACE_ITEM, payload: result.data.post })

    } catch (error) {

    }


}

