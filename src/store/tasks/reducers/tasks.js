import {removeTask} from "./helpers";

const initialState = {
    tasks: [],
}

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'TASKS_FETCHED':
            return {...state, tasks: action.payload}
        case 'TASK_ADDED':
            state.tasks.unshift(action.payload)
            return {...state, tasks: [].concat(state.tasks)}
        case 'TASK_DELETED':
            return {...state, tasks: removeTask(state.tasks, action.payload)}
        case 'BAD_CREDENTIALS':
            return {...state, badCredentials: true}
        default:
            return state
    }
}