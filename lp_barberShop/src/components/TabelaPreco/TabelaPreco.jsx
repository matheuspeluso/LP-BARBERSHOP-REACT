import React from 'react'
import Descricao from '../Descricao/Descricao'
import Cabelo from "../../assets/cabelo.jpg";
import Barba from "../../assets/barba.jpg";
import Pigmentacao from "../../assets/pigmentacao.jpg";
import CardsServico from '../CardsServico/CardsServico';
import './TabelaPreco.scss';

const TabelaPreco = () => {
  return (
    <div className='container-tabela'>
        <Descricao title="SERVIÇOS" text="Na LP BarberShop, proporcionamos uma gama de serviços premium para elevar sua autoestima. Nossa equipe especializada está preparada para oferecer cortes de cabelo modernos e estilosos, além de cuidados detalhados com a barba. Utilizamos produtos de alta qualidade e técnicas avançadas para garantir resultados excepcionais que irão destacar sua aparência e aumentar sua confiança."/>
        <div className="servicos">
            <CardsServico imagem={Cabelo} text="Corte de Cabelo" info="Corte Normal"/>
            <CardsServico imagem={Barba} text="Barba" info="Barba Completa"/>
            <CardsServico imagem={Pigmentacao} text="Pigmentação" info="Corte com Pigmentação"/>
        </div>
    </div>
  )
}

export default TabelaPreco;
