import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as auth } from "../store/session/auth";
import { tasks } from "../store/tasks/reducers";
import { editTask } from "../store/tasks/reducers";
import undoable, { includeAction } from 'redux-undo'

export default combineReducers({
    routing: routerReducer,
    auth,
    tasks,
    editTask: undoable(editTask, {
        ignoreInitialState: true,
        filter: includeAction('CHANGE_TASK_EDIT_FORM'),
        syncFilter: true,
    })
})