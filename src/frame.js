import { forwardRef, useEffect, useRef, useState } from "react";

const Frame = forwardRef(({picture}, ref) => {
  
  let entry = useRef([])
  let placeHolder;
  const galleryTop = document.getElementsByClassName("gallery")
  //Hover function for 3d card effect

  const rotateToMouse = (e)=>{
      const bounds = e.target.getBoundingClientRect()
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        }
      const distance = Math.sqrt(center.x**2 + center.y**2);
      e.target.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)* 2}deg
      )
    `;
  } 
  return (   
    <div className="entryHolder">
      <img alt="ArtPiece" className="frame" onMouseMove={(e)=>{rotateToMouse(e)}} src={picture ? picture : placeHolder } onClick={(e)=>{
          e.target.classList.toggle("galleryClick")
          galleryTop[0].scrollIntoView()
         ref.current.forEach(picture => {
            picture.classList.toggle("clicked")
         });
      }} ref={ e=>{
         let index = ref.current.length
         ref.current[index] = e
      }} /> 
    </div>
  );
});
 
export default Frame;