import * as types from './actionTypes'
import { client } from '@/core/api'

export const registerAction = (email, password) => {
    return (dispatch) => {
        client.post('/users', {email, password})
            .then(() => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                    payload: false
                })
            })
            .catch(({response}) => {
                const { status } = response
                if (status === 422) {
                    dispatch({
                        type: types.USER_ALREADY_EXISTS,
                        payload: false
                    })
                }
            })
    }
}

export const loginAction = (email, password) => {
    return (dispatch) => {
        client.post('/users/login', {email, password})
            .then(({data}) => {
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    payload: data.id
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

export const logoutAction = () => {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT,
            payload: null
        })
    }
}