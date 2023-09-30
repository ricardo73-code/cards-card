import React from 'react'
//import PropTypes from 'prop-types'

export default function Card({id, title, image, instructor}) {
  return (

  <div className='card text-center bg-black'>
    <div className='card-body text-light'>
        <img src={image} alt="" className='card-img-top'></img>
        <h1 className='card-title'>{title}</h1>
        <p className='card-text text-secondary'>
            instructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary'>
            Ir al sitio web
        </a>
    </div>
  </div>
  )
  }
