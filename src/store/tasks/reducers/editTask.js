const initialState = {
    taskToEdit: {
        body: '',
        title: '',
    },
    modalVisible: false,
}

export const editTask = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_EDIT_TASK_MODAL':
            return {...state, modalVisible: true, taskToEdit: action.payload}
        case 'CLOSE_EDIT_TASK_MODAL':
            return {...state, modalVisible: false, taskToEdit: initialState.taskToEdit}
        case 'CHANGE_TASK_EDIT_FORM':
            const { name, value } = action.payload
            let changedTask = {...state.taskToEdit, [name] : value }
            return {...state, taskToEdit: changedTask}
        default :
            return state
    }
}