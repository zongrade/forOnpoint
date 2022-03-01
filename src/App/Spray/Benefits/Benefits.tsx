import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StandartComponentProps } from '../../App'
import brand from '../spray.module.scss'
import classes from './benefits.module.scss'
const Benefits = () => {
  const navigate = useNavigate()
  const currentPage =
    +window.location.pathname[window.location.pathname.length - 1]
  return (
    <>
      <p className={classes.keyMessage}>преимущества</p>
      <p className={brand.brend}>
        BREND<strong>XY</strong>
      </p>
      {currentPage == 1 && (
        <div className={classes.text}>
          <p className={classes.first}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className={classes.second}>Corrupti, perspiciatis in.</p>
          <p className={classes.third}>
            Consectetur odio, qui veritatis deserunt ex doloribus rem assumenda
            amet necessitatibus optio corrupti animi molestiae libero sit magnam
            iste.
          </p>
        </div>
      )}
      {currentPage == 2 && (
        <div className={classes.text}>
          <p className={classes.fourth}>Corrupti, perspiciatis in.</p>
          <p className={classes.five}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className={classes.six}>
            Consectetur odio, qui veritatis deserunt ex doloribus rem assumenda
            amet necessitatibus optio corrupti
          </p>
        </div>
      )}
      <div
        className={classes.prev}
        onClick={() => navigate('/spray/benefits/1')}
      ></div>
      <div
        className={
          currentPage == 1
            ? [classes.activePopint, classes.firstPoint].join(' ')
            : classes.firstPoint
        }
      ></div>
      <div
        className={
          currentPage == 2
            ? [classes.activePopint, classes.secondPoint].join(' ')
            : classes.secondPoint
        }
      ></div>
      <div
        className={classes.next}
        onClick={() => navigate('/spray/benefits/2')}
      ></div>
    </>
  )
}

export default Benefits
