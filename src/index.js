import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './Background';
// import { BrowserRouter, Route } from 'react-router-dom';


const root = document.getElementById('root');
ReactDOM.render(
//  <BrowserRouter>
//     <Route path='/' component={App}/>
//  </BrowserRouter>, 
<Background/>,
 root
);
