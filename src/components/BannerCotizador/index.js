import React from 'react';
import './BannerCotizador.css';
import ImgRegister from '../../assets/images/image_register.jpg';

const BannerCotizador = () => {
    return (
        <div className='WrapperBCoti'>
        <img  className="ImgBCoti" src={ImgRegister} alt="imagen" />
        <div className='InfoBCoti'>
            <p className='TitleBCoti TextColorYellow'>Un sistema para ti</p>
            <p className='TextBCoti1'>Responde las siguientes preguntas para poderte diseñar un sistema y un financiamiento para ti</p>
            <div className='ContactoBCoti'>
                <p className='TextBCoti2'>¿Quieres atencion personalizada Llamanos al:</p>
                <p className='TextBCoti3'><i className="fab fa-whatsapp"></i>378 885 3850</p>
            </div>
        </div>
    </div>
    )
}

export default BannerCotizador
