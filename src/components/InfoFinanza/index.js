import React from "react";

import  './InfoFinanza.css'

import BlockText1 from "./BlockText1";
import BlockText2 from "./BlockText2";

import Img1 from '../../assets/images/companies/c1.png';
import Img2 from '../../assets/images/companies/c2.png';
import Img3 from '../../assets/images/companies/c3.png';
import Img4 from '../../assets/images/companies/c4.png';
import Img5 from '../../assets/images/companies/c5.png';

const InfoFinanza = () => (
    <div className='WrapperInfoFinanza'>
        <div className='TitleInfoFinanza'>
            <p className='TitleIF1'>Opciones de</p>
            <p className='TitleIF2'>Financiamiento</p>
        </div>
        <div className='WrapperBlocksIF'>
            <BlockText1 title='Pago de contado' paragraph1='Sé dueño de tus paneles desde el día 1.' paragraph2=''/>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="100"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center" 
                className='BlockImgIF' id='BlockImgIF2'/>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="100"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='BlockImgIF' id='BlockImgIF1'/>
            <BlockText1 title='Tarjeta de crédito' paragraph1='Hazte dueño de tus paneles solares pagando con tu tarjeta de crédito preferida.' paragraph2='Consulta nuestras opciones a meses sin intereses.'/>
            <BlockText1 title='Mensualidades' paragraph1='Adquiere tus equipos en hasta 24 pagos fijos.' paragraph2=''/>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="100"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='BlockImgIF' id='BlockImgIF3'/>
            <BlockText2 title='PPA - Venta de energía' paragraph1='Cero inversión para ti, ahorros desde un 20% en el pago de luz.' paragraph2=''/>
            <BlockText2 title='Arrendamiento' paragraph1='Paga una renta mensual por tus equipos y terminado el plazo, ¡quédate con ellos!' paragraph2=''/>
            <BlockText2 title='Crédito simple' paragraph1='Plazos de hasta 60 meses con las tasas más accesibles.' paragraph2=''/>
        </div>
        <div className='BlockImgFunding'>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="200"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src={Img2} alt='funding' className='ImageIF'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="250"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src={Img3} alt='funding' className='ImageIF'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="300"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src={Img4} alt='funding' className='ImageIF'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="350"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src={Img5} alt='funding' className='ImageIF'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="400"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src={Img1} alt='funding' className='ImageIF'/>           
        </div>
    </div>
);

export default InfoFinanza;
