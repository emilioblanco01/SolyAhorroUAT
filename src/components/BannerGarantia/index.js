import React from "react";

import "./BannerGarantia.css";

import Img from '../../assets/images/img_warranty.png';

const BannerGarantia = () => (
    <div className='WrapperGara'>
        <div className='ContainerGara1'>
            <img className='ImageGara' src={Img} alt='warranty'/>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="0"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='TextGara1'>
                ¡Nuestros proyectos están garantizados!
            </div>
        </div>
        <div className='ContainerGara2'>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="0"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='TextGara2'>
                Estamos comprometidos contigo para entregarte sistemas funcionales que eficienten tu consumo de energía.
            </div>
        </div>
    </div>
);

export default BannerGarantia;