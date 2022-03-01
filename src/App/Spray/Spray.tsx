import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { StandartComponentProps } from '../App'
import classes from './spray.module.scss'
const Spray = () => {
  const isBenefits = ['1', '2'].includes(
    window.location.pathname[window.location.pathname.length - 1]
  )
    ? true
    : false
  return (
    <div className={isBenefits ? classes.benefit : classes.mainFrame}>
      <div className={classes.firstBlueBubble}></div>
      <div className={classes.secondBlueBubble}></div>
      <div className={classes.thirdBlueBubble}></div>
      <div className={classes.fourthBlueBubble}></div>
      <div className={classes.fiveBlueBubble}></div>
      <div className={classes.firstPinkBubble}></div>
      <div className={classes.secondPinkBubble}></div>
      <div className={classes.thirdPinkBubble}></div>
      <div className={classes.bottle}></div>
      <Outlet></Outlet>
    </div>
  )
}

export default Spray
