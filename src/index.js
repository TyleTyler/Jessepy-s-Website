import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Navbar';
import Pyramid from './Pyramid';
import Gallery from './gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <body> 
      <NavBar />
      <Pyramid/>
      <Gallery />
    </body>
);

