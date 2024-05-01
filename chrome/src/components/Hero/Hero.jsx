import React from 'react'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.container}>
        <img src='https://www.google.com/chrome/static/images/chrome-logo-m100.svg' width={'50px'} alt='chrome' />
        <h1>The browser<br/>built to be yours</h1>
    </div>
  )
}

export default Hero