import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store, history } from './store/index'
import { Root } from './Root'
import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default'

const MOUNT_NODE = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(<Component history={history} store={store} />, MOUNT_NODE)
}
render(Root, MOUNT_NODE)
registerServiceWorker();
