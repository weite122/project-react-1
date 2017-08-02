import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome'

ReactDOM.render(
  <Welcome name = "weite122"/>,
  document.getElementById('root')
)

