import React from 'react'
import Descricao from '../Descricao/Descricao'
// import Cabelo from "../../assets/cabelo.jpg";
// import Barba from "../../assets/barba.jpg";
// import Pigmentacao from "../../assets/pigmentacao.jpg";
import CardsServico from '../CardsServico/CardsServico';
import './TabelaPreco.scss';

import { useState,useEffect } from 'react';

const url = "http://localhost:3000/servicos";


const TabelaPreco = () => {
  //resgatando dados de db.js
  const [servicos,setServicos] = useState([]);
    
  useEffect(()=>{
    async function getData(){
      const res = await fetch(url);
      const data = await res.json();
      setServicos(data)
      console.log(data)
    }
    getData();
  },[])


  return (
    <div className='container-tabela'>
        <Descricao title="SERVIÇOS" text="Na LP BarberShop, proporcionamos uma gama de serviços premium para elevar sua autoestima. Nossa equipe especializada está preparada para oferecer cortes de cabelo modernos e estilosos, além de cuidados detalhados com a barba. Utilizamos produtos de alta qualidade e técnicas avançadas para garantir resultados excepcionais que irão destacar sua aparência e aumentar sua confiança."/>
        <div className="servicos">
            {/* <CardsServico imagem={Cabelo} text="Corte de Cabelo" info="Corte Normal"/>
            <CardsServico imagem={Barba} text="Barba" info="Barba Completa"/>
            <CardsServico imagem={Pigmentacao} text="Pigmentação" info="Corte com Pigmentação"/> */}
          {servicos.map((servico) =>(
            <CardsServico key={servico.id} imagem={servico.imagem} text={servico.name} info={servico.name} preco={servico.price}/>
          ))}

        </div>
    </div>
  )
}

export default TabelaPreco;
