import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as auth} from "../store/session/auth";
import {reducer as tasks} from "../store/tasks/reducers";

export default combineReducers({
    routing: routerReducer,
    auth,
    tasks,
})