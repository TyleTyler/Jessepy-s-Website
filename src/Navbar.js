
import { useContext, useEffect } from 'react';
import './App.css';



function NavBar() {
  return (
    <div className="NavBar">
        <div id="JesepyName" className='navEl'> Jessepy</div>
        <div id="AboutMe" className='navEl'>About Me</div>
        <div className='midPyramid'> 
          <div id="Gallery" className='navEl'> Gallery</div>
          <div id="Murals" className='navEl'> Murals</div>
        </div>
    </div>
  );
}

export default NavBar;
