import React from "react";

import {Link} from 'react-router-dom'
import "./BannerFinan.css";

const BannerFinan = () => (
    <div className='WrapperBFinan'>
        <div className='ContainerBFinan1'>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="0"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='TextBFinan1'>
                Conoce nuestros atractivos planes de financiamiento.
            </div>
            <Link to='/financiamiento' 
                    data-aos="fade-up"
                    data-aos-offset="-200"
                    data-aos-delay="100"
                    data-aos-duration="200"
                    data-aos-easing="linear"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"
                    className='ButtonBFinan'>
                Financiamiento <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
        </div>
        <div className='ContainerBFinan2'>

        </div>
    </div>
);

export default BannerFinan;