import React from "react";
import './BannerFinCoti.css'


const BannerFinCoti = ({Content, dispatch, setLevel}) => (
    <div className='WrapperBannerFinCoti'>
        {Content? (
            <p className='TitleBannerFinCoti'>¡Gracias! Tu cotización fue realizada con éxito y la
            hemos enviado al correo que nos proporcionaste. Recuerda que en cualquier momento puedes
            comunicarte con nosotros para recibir atención personalizada</p>
        ):
        (
            <p className='TitleBannerFinCoti'>Tu cotización ha sido realizada con éxito. 
            Tu cotización será descargada como PDF en este momento, te recordamos que puedes consultar 
            todas las cotizaciones que has realizado desde tu perfil. 
            Te deseamos éxito en tus ventas.</p>  
        )}
        <button className='ButtonFCotiza' onClick={() => {
            dispatch({ type: 'Reload'});
            setLevel(1);
        }}>REALIZAR NUEVA COTIZACION</button>
    </div>
);

export default BannerFinCoti;