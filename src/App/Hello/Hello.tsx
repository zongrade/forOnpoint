import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import classes from './hello.module.scss'

const Hello = () => {
  let clientx = 0,
    clienty = 0
  //переход на другую страницу
  const checkSwipe = useCallback((lastx: number, lasty: number) => {
    return Math.sqrt((clientx - lastx) ** 2 + (clienty - lasty) ** 2) >
      Math.floor(window.innerWidth / 3)
      ? true
      : false
  }, [])
  return (
    <div className='swipe'>
      <div className={classes.blurSperm}></div>
      <div className={classes.topBlur}></div>
      <div className={classes.bottomBlur}></div>
      <div className={classes.bacteriaUnderNav}></div>
      <div className={classes.pinkSperm}></div>
      <div className={classes.rightSmallBacteria}></div>
      <div className={classes.rightBacteria}></div>
      <div className={classes.centerBigBacteria}></div>
      <div className={classes.leftBacteria}></div>
      <div className={classes.mainFrame}>
        <p className={classes.hello}>привет,</p>
        <div className={classes.nonComercial}>
          <p>
            ЭТО <strong>НЕ</strong>
          </p>
          <p>КОММЕРЧЕСКОЕ</p>
          <p>ЗАДАНИЕ</p>
        </div>
        <button className={classes.whatNext}>
          <Link to='/Description'>Что дальше?</Link>
        </button>
      </div>
    </div>
  )
}

export default Hello
