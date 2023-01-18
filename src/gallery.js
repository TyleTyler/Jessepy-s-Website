import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger)


const Gallery = () => {
    const entries = useRef([])
    const galleryTrigger = useRef([])
    useEffect(()=>{
        setTimeout(()=>{
            const entry = entries.current
            gsap.to(entry, {
                x: -300,
                scrollTrigger : { 
                    trigger: entries, 
                    markers : true,
                    start: entries
                }
            })
        }, 1000)
    })
 
    return ( <div className="gallery" ref={galleryTrigger}>
        <div className="entry" ref={entries}> </div>
    </div> );
}
 
export default Gallery;