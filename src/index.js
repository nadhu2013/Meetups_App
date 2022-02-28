import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {FavorateContactProvider} from './Store/favorates-context';


ReactDOM.render(
  <FavorateContactProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavorateContactProvider> ,
  document.getElementById('root')
);


