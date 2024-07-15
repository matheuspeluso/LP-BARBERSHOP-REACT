import React from 'react'
import "./Descricao.scss";

const Descricao = ({title,text}) => {
  return (
    <div className='container-descricao'>
        <h2 className='title'>{title}</h2>
        <p className='text'>{text}</p>
    </div>
  )
}

export default Descricao