import React from 'react'
import { Link } from 'react-router-dom'

const Spray = () => {
  return (
    <>
      <img className='absolute' src='' alt='' />
      <p>ключевое сообщение</p>
      <p>
        brend<strong>xy</strong>
      </p>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolores
        vitae numquam mollitia?
      </div>
      <Link to='/spray/benefits'>
        <button>Подробнее</button>
      </Link>
    </>
  )
}

export default Spray
