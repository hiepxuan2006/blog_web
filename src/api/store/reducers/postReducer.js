import * as Types from '../type'
const initialState = {
    post: '',
    postById: '',
    postCNDL: '',
    postCNAU: '',
    postPlace: '',
    postPlaceItem: '',
    postDiadiem: '',
    loading: false,

}
const postReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.GET_POST:

            return {
                ...state,
                post: payload
            }
        case Types.GET_POST_BY_ID:

            return {
                ...state,
                postById: payload
            }
        case Types.GET_POST_BY_CNDL:

            return {
                ...state,
                postCNDL: payload
            }
        case Types.GET_POST_BY_CNAU:

            return {
                ...state,
                postCNAU: payload
            }
        case Types.GET_POST_PLACE:

            return {
                ...state,
                postPlace: payload
            }
        case Types.GET_POST_PLACE_ITEM:

            return {
                ...state,
                postPlaceItem: payload
            }
        case Types.GET_POST_DA_LAT:

            return {
                ...state,
                postDiadiem: payload
            }
        case Types.SET_LOADING:
            return { ...state, loading: payload }
        default:
            return state
    }
}
export default postReducer
