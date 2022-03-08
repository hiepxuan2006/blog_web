import * as Types from '../type'
const initialState = {
    isAuthentication: false,
    userInfo: {},
    authLoading: true,
    users: ''

}
const useReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.SET_AUTH:

            return {
                ...state,
                isAuthentication: true,
                userInfo: payload
            }
        case Types.SET_ADMIN:

            return {
                ...state,
                isAuthentication: true,
                userInfo: payload
            }

        case Types.PROCESS_LOGOUT:
            return {
                ...state,
                isAuthentication: false,
                userInfo: payload
            }
        case Types.GET_ALL_USER:
            return {
                ...state,
                users: payload
            }
        default:
            return state
    }
}
export default useReducer