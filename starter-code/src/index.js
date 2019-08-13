import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter >
      <Route path='/' component={App}/>
      {/* <App/> */}
  </BrowserRouter>
, document.getElementById('root'));


serviceWorker.unregister();
