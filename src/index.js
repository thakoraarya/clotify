import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataLayer from './DataLayer'
import {initialState, reducer} from './Reducer'

// require('dotenv').config()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>,
document.getElementById("root")
);

reportWebVitals();