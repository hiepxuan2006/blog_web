import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import postReducer from "./postReducer";
import userReducer from './userReducer'
const rootReducer = combineReducers({
    userReducer: userReducer,
    postReducer: postReducer,
    adminReducer: adminReducer
})
export default rootReducer;