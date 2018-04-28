import * as types from './actionTypes'
import { client } from '@/core/api'

export const register = (email, password) => {
    return async (dispatch) => {
        let status = await client.post('/users',
            JSON.stringify({email, password}),
            {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        )
            .then(response => response.status)
            .catch(error => error.status)
        if(status === 200) {
            dispatch({
                type: types.REGISTER_SUCCESS,
                payload: false
            })
        }
        if(status === 422) {

        }
    }
}