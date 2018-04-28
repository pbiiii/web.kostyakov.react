import {combineReducers} from 'redux'
import {register} from './register'
import {login} from './login'

export const reducer = combineReducers({register, login})

