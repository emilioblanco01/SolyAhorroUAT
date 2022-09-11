import React from 'react';
import BannerCotizador from '../BannerCotizador/index';
import Form_Cotizador_Cliente from './Form_Cotizador_Cliente/index';
import './designCotizador.css';

const CotizadorCliente = () => {
    return (
        <div className='Cotizador'>
                <BannerCotizador />
                <Form_Cotizador_Cliente />
        </div>
    )
}

export default CotizadorCliente
