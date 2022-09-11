import React, {Component} from 'react';

import Dealer1 from '../../assets/images/dealers/dealer-1.png';
import Dealer2 from '../../assets/images/dealers/dealer-2.png';
import Dealer3 from '../../assets/images/dealers/dealer-3.png';
import Dealer4 from '../../assets/images/dealers/dealer-4.png';
import Dealer5 from '../../assets/images/dealers/dealer-5.png';

import "./BannerDistri.css";

const BannerDistri = () => (
    <div className='ContainerDistri'>
        <div data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="300"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className='TextDistri'>
            Somos distribuidores
        </div>
        <div className='ImgContainerDistri'>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="350"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='BannerDistri' 
                src={Dealer1} alt='logo'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="450"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='BannerDistri' 
                src={Dealer2} alt='logo'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="500"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='BannerDistri' 
                src={Dealer3} alt='logo'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="550"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='BannerDistri' 
                src={Dealer4} alt='logo'/>
            <img data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="600"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='BannerDistri' 
                src={Dealer5} alt='logo'/>
        </div>
    </div>
);

export default BannerDistri;