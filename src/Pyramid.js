import { useContext, useEffect, useRef, useState} from 'react';
import './App.css';
import pryamid from "./assets/PyramidTrans.png"
import iris from "./assets/iris.png"
import pupil from "./assets/pupil.png"

const Pyramid = () => {
    function angle(cx, cy, ex , ey){
        const dy = ey - cy
        const dx = ex - cx
        const rad = Math.atan2(dy, dx)
        const deg = rad * 180 / Math.PI
        return deg
    }

    const [cursorPosition, setCursorPosition ] = useState({top :0, left :0})
    const [angleDeg , setAngleDeg] = useState(0)
    const base = useRef()
    document.addEventListener('mousemove', (e)=>{
        setCursorPosition({top: e.screenY, left: e.screenX })
        const rect = base.current.getBoundingClientRect()
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height/ 2;
        const degree = angle(cursorPosition.left, cursorPosition.top, anchorX, anchorY)
        setAngleDeg(degree)
    })

    return ( 
    <div class="Pyramid"> 
        <img id="triangle" src= { pryamid } ref={base}/>
        <img id="pupil" src={pupil} />
        <div>
            <img id="iris" src={iris} style={{transform: `rotate(${angleDeg - 70 }deg)`}} />
        </div>
    </div>
    );
}
 
export default Pyramid;