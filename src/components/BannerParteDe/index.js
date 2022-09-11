import React from "react";

import IMGBanner from '../../assets/images/member-of.png';

import "./BannerParteDe.css";

const BannerParteDe = () => (
    <div className='ContainerParteDe'>
        <div data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="0"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className='TextParteDe'>
            Somos parte de
        </div>
        <img data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="500"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center" 
            className='BannerParteDe' src={IMGBanner} alt='logo'/>
    </div>
);

export default BannerParteDe;