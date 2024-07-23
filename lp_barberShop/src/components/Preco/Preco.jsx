import React from 'react'
import "./Preco.scss"

const Preco = ({text}) => {
  return (
    <div className='container-preco'>
        <p className='txt-preco'>{text}</p>
    </div>
  )
}

export default Preco