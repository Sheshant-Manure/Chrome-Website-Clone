import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import style from './Menu.module.css'

const Menu = ({y}) => {
  const menu = useRef(null);
  useEffect(() => {
    if( y > 300 )
    {
      gsap.to(menu.current, { position: 'fixed', top: '70px', zIndex: '100', backgroundColor: 'white', duration: 1 });
    }
    else
      gsap.to(menu.current, {position:'static', duration: 1})
  }, [y])
  return (
    <div className={style.alignment}>
        <div ref={menu} className={style.container}>
            <ul>
                <li>Updates</li>
                <li>AI</li>
                <li>Yours</li>
                <li>Safe</li>
                <li>Fast</li>
                <li>ByGoogle</li>
            </ul>
        </div>
        <p>Need the Chrome installer? <a href='https://www.google.com/chrome/'>Download here</a> </p>
    </div>
  )
}

export default Menu