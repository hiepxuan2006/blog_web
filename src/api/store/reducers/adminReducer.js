import * as Types from '../type'
const initialState = {
    isAdminAuthentication: false,
    user: ''
}
const adminReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.SET_ADMIN:

            return {
                ...state,
                isAdminAuthentication: true,
                user: payload
            }

        default:
            return state
    }
}
export default adminReducer