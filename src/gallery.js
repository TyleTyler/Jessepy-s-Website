import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import greenScenery from "./assets/green.png"
import Pyramid from "./Pyramid";
import Frame from "./frame";
gsap.registerPlugin(ScrollTrigger)


const Gallery = () => {
    const animationRef = useRef(null)
    const list = useRef([])
    const pictureList = list.current
    
    useEffect(()=>{
        const animationAnchor = animationRef.current
        gsap.to(animationAnchor, {
            x: 1000,
            scrollTrigger:{
                start: "20% 70%",
                end: "bottom 30%",
                onEnter : (e)=>{console.log(e)},
                markers: true,
                scrub : 2,
                onEnter: "restart"
            }
        })
    })
 
    return (
    <div className="gallery" id = "galleryTop" ref={animationRef}> 
            <Frame ref={list} picture={greenScenery}/> 
            <Frame ref={list} picture={greenScenery}/> 
    </div> );
}
 
export default Gallery;