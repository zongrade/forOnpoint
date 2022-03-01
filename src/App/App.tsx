import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Description from './Description/Description'
import Hello from './Hello/Hello'
import { checkDevice, defState } from './redux/store'
import Benefits from './Spray/Benefits/Benefits'
import Spray from './Spray/Spray'
import classes from './app.module.scss'
import Base from './Spray/Base'
export interface StandartComponentProps {
  title?: string
  mobile: boolean
}
const App = () => {
  const bgIMG = useRef(null)
  const arrNav = [
    '/home',
    '/description',
    '/spray/base',
    '/spray/benefits/1',
    '/spray/benefits/2',
  ]
  const { pathname } = useLocation()
  const mobile = useSelector((state: defState) => state.mobile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //изменение размера фона
  function rescaleBGImg() {
    const elem = bgIMG.current as unknown as HTMLElement
    elem.style.backgroundSize = `${elem.scrollWidth}px ${elem.scrollHeight}px`
  }
  function changeDevice() {
    rescaleBGImg()
    dispatch(checkDevice())
  }
  useEffect(() => {
    changeDevice()
    window.addEventListener('resize', changeDevice)
    return () => {
      window.removeEventListener('resize', changeDevice)
    }
  }, [])
  let clientx = 0,
    clienty = 0
  //переход на другую страницу
  const checkSwipe = (lastx: number, lasty: number) => {
    const next = () => {
      return (
        arrNav[
          arrNav.findIndex((elem) => {
            return elem === pathname
          }) + 1
        ] || arrNav[0]
      )
    }
    const prev = () => {
      return (
        arrNav[
          arrNav.findIndex((elem) => {
            return elem === pathname
          }) - 1
        ] || arrNav[arrNav.length - 1]
      )
    }
    const prevOrNext = clientx - lastx > 0 ? 'next' : 'prev'
    const canChange =
      Math.sqrt((clientx - lastx) ** 2 + (clienty - lasty) ** 2) >
      Math.ceil(window.innerWidth / 3)
        ? true
        : false
    if (canChange) {
      switch (prevOrNext) {
        case 'prev':
          return navigate(prev())
        case 'next':
          return navigate(next())
      }
    }
  }
  return (
    <div
      ref={bgIMG}
      className={classes.main}
      onTouchStart={(e) => {
        clientx = e.touches[0].clientX
        clienty = e.touches[0].clientY
      }}
      onTouchEnd={(e) =>
        checkSwipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      }
      onMouseDown={(e) => {
        clientx = e.clientX
        clienty = e.clientY
      }}
      onMouseUp={(e) => checkSwipe(e.clientX, e.clientY)}
    >
      <div className={classes.unselectable}>
        <nav>
          <div
            className={classes.nav_home}
            onClick={() => navigate('/home')}
          ></div>
          <div className={classes.nav_project}>
            <p>project</p>
          </div>
        </nav>
        <Routes>
          <Route path='/home' element={<Hello />} />
          <Route path='/description' element={<Description />} />
          <Route path='/spray/*' element={<Spray />}>
            <Route path='base' element={<Base />} />
            <Route path='benefits/1' element={<Benefits />} />
            <Route path='benefits/2' element={<Benefits />} />
          </Route>
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
      <footer>
        <p>onpoint</p>
      </footer>
    </div>
  )
}

export default App
