import React from 'react'
import { Link } from 'react-router-dom'
import classes from './spray.module.scss'

const Base = () => {
  return (
    <>
      <p className={classes.keyMessage}>ключевое сообщение</p>
      <p className={classes.brend}>
        brend<strong>xy</strong>
      </p>
      <div className={classes.firstLetter}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={classes.secondLetter}>
        <p>Lorem, ipsum dolor sit amet</p>
      </div>
      <button className={classes.more}>
        <Link to='/benefits/1'>Подробнее</Link>
      </button>
    </>
  )
}

export default Base
