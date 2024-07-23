import React from 'react';
import "./CardsServico.scss"
import Preco from '../Preco/Preco';

const CardsServico = ({imagem, text, info,preco}) => {
  return (
    <div className='container-cardServico'>
        <div className="card">
            <div className="img-container">
                <img className='img-card' src={imagem} alt={text} />
            </div>
            <div className="box-info">
                <p className='p'>{info}</p>
                <Preco text={preco}/>
            </div>
        </div>
    </div>
  )
}

export default CardsServico;