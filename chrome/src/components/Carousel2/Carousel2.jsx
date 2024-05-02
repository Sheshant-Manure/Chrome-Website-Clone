import React, { useEffect, useRef, useState } from 'react';
import style from './Carousel2.module.css';
import { gsap, Power2 } from 'gsap';
import Item1 from '../../assets/item1.png'
import Item2 from '../../assets/item2.png';
import Item3 from '../../assets/item3.png';

const Carousel2 = ({y}) => {

    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);
    const videRef = useRef(null);
    const containerRef = useRef(null);

    const [pos, setPos] = useState(0)

    console.log(y);
    useEffect(()=>{

        // if(y > 2200 && y <= 3000) {
        //     gsap.to(containerRef.current, { position: 'fixed', top: '0' })
        // } else {
        //     gsap.to(containerRef.current, { position: 'static' })
        // }

        if(y >= 1900 && y <= 1982) {
           const width = 80 - ( y - 1900 ) / 150 * 50 + '%'
           const vWidth = 100 - ( y - 1900 ) / 150 * 50 + '%'
            gsap.to(item1Ref.current, { width: width, marginLeft: '200px' })
            gsap.to(videRef.current,  { width: vWidth })
            gsap.to(item2Ref.current, { width: width })
            gsap.to(item3Ref.current, { width: width })
        }
    },[y])

    const handleNext = () => {
        setPos((prev)=>(prev+1))
        const position = pos * 100;
        gsap.to(item1Ref.current, { transform: `translateX(-${position}%)`, duration: 1, ease: Power2.easeIn })
        gsap.to(item2Ref.current, { transform: `translateX(-${position}%)`, duration: 1, ease: Power2.easeIn })
        gsap.to(item3Ref.current, { transform: `translateX(-${position}%)`, duration: 1, ease: Power2.easeIn })
    }

    const handlePrev = () => {
        setPos((prev)=>(prev-1))
        const position = pos * 100;
        gsap.to(item1Ref.current, { transform: `translateX(-${position}%)`, duration: 1, ease: Power2.easeIn })
        gsap.to(item2Ref.current, { transform: `translateX(-${position}%)`, duration: 1, ease: Power2.easeIn })
        gsap.to(item3Ref.current, { transform: `translateX(-${position}%)`, duration: 1, ease: Power2.easeIn })
    }

  return (<>
    <div ref={containerRef} className={style.container}>
        <div ref={item1Ref} className={style.item1}>
            <img style={{ position: 'absolute', top: '0', zIndex: '-1', borderTopLeftRadius: 'inherit' }} src={Item1} alt='item1' />
            <video ref={videRef} className={style.video} autoPlay loop muted>
                <source src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div ref={item2Ref} className={style.item2}>
            <img src={Item2} alt='item2' />
        </div>
        <div ref={item3Ref} className={style.item3}>
            <img src={Item3} alt='item3' />
        </div>
    </div>
    <div className={style.btns}>
        <div className={style.leftBtn} onClick={handlePrev}>
            <img src='https://cdn-icons-png.flaticon.com/128/271/271220.png' width={'20px'} alt='left' />
        </div>
        <div className={style.rightBtn} onClick={handleNext}>
            <img src='https://cdn-icons-png.flaticon.com/128/271/271228.png' width={'20px'} alt='right' />
        </div>
    </div>
    <div className={style.space}></div>
    </>
  );
};

export default Carousel2;