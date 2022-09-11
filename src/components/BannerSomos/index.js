import React from "react";

import "./BannerSomos.css";

const BannerSomos = () => (
    <div className='WrapperSomos'>
        <p  data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="0"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className='TitleSomos'>
            Somos
        </p>
        <p  data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="0"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className='DescriptionSomos'>
            Empresa joven 100% mexicana nacida en Los Altos de Jalisco, comprometida con la sustentabilidad energética, por ello nos especializamos en la instalación y mantenimiento de sistemas de energías renovables, diseñando proyectos de inversión rentables a la medida para cada uno de nuestros clientes.
        </p>
    </div>
);

export default BannerSomos;