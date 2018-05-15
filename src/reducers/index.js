import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as auth } from "../store/session/auth";
import { tasks } from "../store/tasks/reducers";
import undoable from 'redux-undo'

export default combineReducers({
    routing: routerReducer,
    auth,
    tasks : undoable(tasks, {
        limit: 20,
        filter: (action, currentState, previousHistory) => {
            let actionsToUndo = [
                'TASK_ADDED',
                'TASK_DELETED',
                'TASK_COMPLETED',
                'TASK_UPDATED'
            ]
            return actionsToUndo.includes(action.type)
        }
    }),
})