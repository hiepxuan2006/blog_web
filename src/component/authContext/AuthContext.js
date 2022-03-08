import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "../../api/store/actions/adminAction";
import { logoutUser, userSetAuth } from "../../api/store/actions/usersAction";
import setAuthToken from "../../setAuthToken";
import { TOKEN_NAME, urlBase } from "./constant";

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {

    // const { authState, dispatch } = useReducer(authReducer, {
    //     authLoading: true,
    //     isAuthentication: false,
    //     user: null
    // })

    const dispatch = useDispatch()
    // loadUser
    const isAuthentication = useSelector((state) => state.userReducer.isAuthentication)
    const loadUser = async () => {
        if (localStorage[TOKEN_NAME]) { setAuthToken(localStorage[TOKEN_NAME]) }

        try {
            const response = await axios.get(`${urlBase}/auth/`)
            if (response.data.success) {
                dispatch(userSetAuth(response.data.user))
                console.log(response.data.user.role);
                if (response.data.user.role === 'admin')
                    dispatch(setAdmin(response.data.user))
            }
        } catch (error) {
            localStorage.removeItem(TOKEN_NAME)
            setAuthToken(null)
            dispatch(logoutUser())
        }
    }

    useEffect(() => {
        loadUser()
    }, [])
    const value = { isAuthentication }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContextProvider