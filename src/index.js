import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Root } from './Root'
import { history } from './core/browser'
import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default'

const MOUNT_NODE = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(<Component history={history} />, MOUNT_NODE)
}

render(Root)
registerServiceWorker();
