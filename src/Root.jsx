import React from 'react'
// import { Provider } from 'react-redux'
import {Router} from 'react-router-dom'
// import { store } from 'store'
import App from './views/App'

export const Root = ({history}) => (
    <Router history={history}>
        <App/>
    </Router>
)
