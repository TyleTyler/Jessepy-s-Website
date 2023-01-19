import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Pyramid from "./Pyramid";
gsap.registerPlugin(ScrollTrigger)


const Gallery = () => {
    const entry = useRef([])
    const galleryTop = useRef(null)
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
    useEffect(()=>{
        const galleryPic = entry.current
        gsap.to(galleryPic, {
            x: 100,
            scrollTrigger:{
                trigger: galleryPic,
                start: "top 70%",
                markers: true,
                scrub : true,
                onEnter: "restart"
            }
        })
    })
 
    return ( <div className="gallery" ref={galleryTop}>

        <div className="entry" onMouseMove={(e)=>{rotateToMouse(e)}} onClick={(e)=>{
            e.target.classList.toggle("galleryClick")
            galleryTop.current.scrollIntoView()
        }} ref={entry}> </div>
    </div> );
}
 
export default Gallery;