import {removeTask, updateTask} from "./helpers";

const initialState = {
    tasksList: [],
    taskToEdit: {
        body: '',
        title: '',
    },
    editTaskModalVisible: false,
}


export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'TASKS_FETCHED':
            return {...state, tasksList: action.payload}
        case 'TASK_ADDED':
            state.tasksList.unshift(action.payload)
            return {...state, tasksList: [].concat(state.tasksList)}
        case 'TASK_DELETED':
            return {...state, tasksList: removeTask(state.tasksList, action.payload)}
        case 'TASK_COMPLETED':
            return {...state, tasksList: updateTask(state.tasksList, action.payload)}
        case 'OPEN_EDIT_TASK_MODAL':
            return {...state, editTaskModalVisible: true, taskToEdit: action.payload}
        case 'CLOSE_EDIT_TASK_MODAL':
            return {...state, editTaskModalVisible: false, taskToEdit: initialState.taskToEdit}
        case 'TASK_UPDATED':
            return {...state, tasksList: updateTask(state.tasksList, action.payload)}
        default:
            return state
    }
}