import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {BrowserRouter as Route} from 'react-router-dom'
import {RoomProvider} from './Context'

ReactDOM.render(
  <RoomProvider>

    <Route>
       <App/>
    </Route>
  </RoomProvider>

  ,  document.getElementById('root')
);


