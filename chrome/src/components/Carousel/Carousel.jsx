import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import style from './Carousel.module.css'

const Carousel = ({y}) => {

  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);

  useEffect(()=>{
    if ( y <= 150 )
    {
      const top = -10 + ( y / 150 ) * 20;
      const right = 87 + ( y / 150 ) * 13;
      gsap.to(img1.current, { top: `${top}%`, right: `${right}%` });
    }

    if( y <= 150 )
    {
      const top = 90 - ( y / 150 ) * 80;
      gsap.to(img2.current, { top: `${top}%` });
    }

    if(y<=150) {
      const width = 60 - ( y / 150 ) * 10;
      const top = 0 + ( y / 150 ) *10;
      gsap.to(img3.current, { width: `${width}vw` })
      gsap.to(img5.current, { top: `${top}%`, width: `${width}vw` })
    }

    if( y <= 150 )
    {
      const top = -20 + ( y / 150 ) * 30;
      gsap.to(img4.current, { top: `${top}%` })
    }

    if(y >= 160)
    {
      const left = (( y - 160 ) / 300 ) * 100; 
      gsap.to(img1.current, { left: `-${left + 1000}px` });
      gsap.to(img2.current, { left: `-${left}px` });
      gsap.to(img3.current, { left: `${250 - left}px` });
      gsap.to(img4.current, { left: `${300 - left}px` });
      gsap.to(img5.current, { left: `${330 - left}px` });
    }

    const id = setInterval(()=>{
      
    }, 500)

    return () => clearInterval(id);

  },[y]);

  return (
    <div className={style.container}>
        <ul>
            <li><img ref={img1} className={style.img1} src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp' alt='1' /></li>
            <li><img ref={img2} className={style.img2} src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp' alt='2' /></li>
            <li><img ref={img3} className={style.img3} src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp' alt='3' /></li>
            <li><img ref={img4} className={style.img4} src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp' alt='4' /></li>
            <li><img ref={img5} className={style.img5} src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp' alt='5' /></li>
        </ul>
        <h1 className={style.title}>Discover the latest<br/><span className={style.update}>updates</span> from Chrome</h1>
    </div>
  )
}

export default Carousel