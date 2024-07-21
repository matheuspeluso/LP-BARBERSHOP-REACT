import React from 'react';
import "./Maps.scss"; // Supondo que você tenha estilos específicos para o seu mapa

const Maps = () => {
  return (
    <div className='maps-container'>
        <>
            <h2 className='title-maps'>Venha nos visitar</h2>
            <iframe className='maps'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.447359029125!2d-43.129175730360565!3d-22.66163806114767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a1cf1dd54cf3%3A0x8fdb992a6c7e61fb!2sAv.%20Isabel%20de%20Paula%2C%20453%20-%20Suru%C3%AD%2C%20Mag%C3%A9%20-%20RJ%2C%2025903-587!5e0!3m2!1spt-BR!2sbr!4v1721599334181!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Barbearia LP-BARBERSHOP"
            ></iframe>
        </>
    </div>
  );
}

export default Maps;
