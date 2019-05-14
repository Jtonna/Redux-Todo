import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/reducers/reducers';

const store = createStore(reducer)
ReactDOM.render(
	<provider store={store}>
		<App />
	</provider>,document.getElementById('root')
);
