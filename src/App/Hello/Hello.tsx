import React from 'react'
import { Link } from 'react-router-dom'

const Hello = () => {
  return (
    <div
      className='swipe'
      onMouseDown={(e) => console.log('down ', e)}
      //onMouseMove={(e) => console.log('move ', e)}
      onMouseUp={(e) => alert('heh')}
    >
      <p>привет,</p>
      <div className='mainFrame'>
        <p>
          это <strong>не</strong>
        </p>
        <p>коммерческое</p>
        <p>задание</p>
        <Link to='/Description'>
          <button>Что дальше?</button>
        </Link>
      </div>
    </div>
  )
}

export default Hello
