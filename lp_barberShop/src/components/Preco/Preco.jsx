import React from 'react'
import "./Preco.scss"

const Preco = ({text}) => {
  return (
    <div className='container-preco'>
        <p>{text}</p>
    </div>
  )
}

export default Preco