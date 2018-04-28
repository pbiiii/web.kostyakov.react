import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { register } from "../views/screens/Register/reducers/register";

export default combineReducers({
    routing: routerReducer,
    register,
})