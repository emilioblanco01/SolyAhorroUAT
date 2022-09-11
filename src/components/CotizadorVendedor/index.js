import React, {useState, useEffect} from 'react';
import BannerCotizador from '../BannerCotizador/index';
import Form_Cotizador_Vendedor from './Form_Cotizador_Vendedor';
import { useHistory } from "react-router-dom";


const CotizadorVendedor = () => {

    const history = useHistory();

    if(localStorage.getItem("Perfil") === "false"){ history.push("/login")}

    window.onbeforeunload = function() {
        localStorage.setItem("Perfil", false);
    }

    return (
        <div className='Cotizador'>
                <BannerCotizador />
                <Form_Cotizador_Vendedor />
        </div>
    )
}

export default CotizadorVendedor
