import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Navbar';
import Pyramid from './Pyramid';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <body> 
    <NavBar />
    <Pyramid/>
  </body>
);

