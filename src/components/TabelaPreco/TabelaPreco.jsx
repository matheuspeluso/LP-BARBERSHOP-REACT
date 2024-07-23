import React, { useState, useEffect } from 'react';
import Descricao from '../Descricao/Descricao';
import CardsServico from '../CardsServico/CardsServico';
import './TabelaPreco.scss';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wrzgulqhogdqomgccoyi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indyemd1bHFob2dkcW9tZ2Njb3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2NzAwNzksImV4cCI6MjAzNzI0NjA3OX0.chLFkwUVYzq_xXsiJKZgK0-gL1xXQtGqbTBgCNSk8NQ";
const supabase = createClient(supabaseUrl, supabaseKey);

const TabelaPreco = () => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    async function getServicos() {
      const { data, error } = await supabase
        .from('Servicos') // Nome correto da tabela
        .select('*');

      if (error) {
        console.error("Erro ao buscar dados:", error);
      } else {
        setServicos(data);
      }
    }

    getServicos();
  }, []);

  return (
    <div className='container-tabela'>
      <Descricao 
        title="SERVIÇOS" 
        text="Na LP BarberShop, proporcionamos uma gama de serviços premium para elevar sua autoestima. Nossa equipe especializada está preparada para oferecer cortes de cabelo modernos e estilosos, além de cuidados detalhados com a barba. Utilizamos produtos de alta qualidade e técnicas avançadas para garantir resultados excepcionais que irão destacar sua aparência e aumentar sua confiança."
      />
      <div className="servicos">
        {servicos.map((servico) => (
          <CardsServico 
            key={servico.id} 
            imagem={servico.imagem} 
            text={servico.name} 
            info={servico.name} 
            preco={servico.price}
          />
        ))}
      </div>
    </div>
  );
}

export default TabelaPreco;
