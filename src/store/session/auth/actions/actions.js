import * as types from './actionTypes'
import { client } from '@/core/api'

export const register = (email, password) => {
    return (dispatch) => {
        client.post('/users', {email, password})
            .then(() => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                    payload: false
                })
            })
            .catch(({status}) => {
                if (status === 422) {

                }
            })
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        client.post('/users/login', {email, password})
            .then(() => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                    payload: false
                })
            })
            .catch(({status}) => {
                if (status === 422) {

                }
            })
    }
}