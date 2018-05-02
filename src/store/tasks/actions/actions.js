import * as types from './actionTypes'
import { client } from '@/core/api'

export const fetchTasksAction = () => {
    return (dispatch) => {
        client.get('/tasks')
            .then(({data}) => {
                dispatch({
                    type: types.TASKS_FETCHED,
                    payload: data
                })
            })
            .catch(({response}) => {
                const { status } = response
                if (status === 401) {
                    dispatch({
                        type: types.BAD_CREDENTIALS,
                        payload: false
                    })
                }
            })
    }
}

export const addTaskAction = (taskData) => {
    return (dispatch) => {
        client.post('/tasks', taskData)
            .then(({data}) => {
                dispatch({
                    type: types.TASK_ADDED,
                    payload: data
                })
            })
    }
}

export const deleteTaskAction = (task) => {
    return (dispatch) => {
        client.delete(`/tasks/${task.id}`)
            .then(() => {
                dispatch({
                    type: types.TASK_DELETED,
                    payload: task
                })
            })
    }
}