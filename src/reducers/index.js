import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as auth} from "../store/session/auth";

export default combineReducers({
    routing: routerReducer,
    auth
})