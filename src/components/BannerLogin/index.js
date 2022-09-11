import React from "react";
import './BannerLogin.css'
import Img from '../../assets/images/image_register.jpg';

const BannerLogin = () => (
    <div className='WrapperBRegistro'>
        <img  className="ImgBRegistro" src={Img} alt="imagen" />
        <div className='InfoBRegistro'>
            <p className='TitleBRegistro'>Un Sistema Para Ti</p>
            <p className='TextBRegistro'>Responde las siguientes preguntas y diseñaremos un sistema y un financiamiento para ti</p>
        </div>
    </div>
);

export default BannerLogin;