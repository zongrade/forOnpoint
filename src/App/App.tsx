import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Description from './Description/Description'
import Hello from './Hello/Hello'
import Benefits from './Spray/Benefits/Benefits'
import Spray from './Spray/Spray'

const App = () => {
  return (
    <>
      <div className='bg'>
        <nav>
          <div className='nav_home'></div>
          <div className='nav_project'>project</div>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Hello />} />
            <Route path='/description' element={<Description />} />
            <Route path='/spray' element={<Spray />} />
            <Route path='/spray/:benefits' element={<Benefits />} />
            <Route path='*' element={<Navigate to='/home' />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>onpoint</footer>
    </>
  )
}

export default App
