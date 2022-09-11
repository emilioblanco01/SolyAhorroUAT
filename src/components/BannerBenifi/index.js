import React from "react";
import AnimatedNumber from "animated-number-react";

import  './BannerBenifi.css'

import Img1 from '../../assets/images/icons/IconYearsExperience.svg';
import Img2 from '../../assets/images/icons/IconClients.svg';
import Img3 from '../../assets/images/icons/IconInstalledPanels.svg';
import Img4 from '../../assets/images/icons/IconGreenEnergy.svg';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function formatPlus(value) {
    return `+ ${numberWithCommas(value.toFixed(0))}`;
}

function formatKW(value) {
    return `+ ${numberWithCommas(value.toFixed(0))} KW`;
}

const BannerBenifi = () => (
    <div className='WrapperBenifi'>
        <div data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center" 
            className='ContainerBenifi'>
            <div className='ContainerIcon'>
                <img className='Icon' src={Img1} alt='icon'/>
            </div>
            <div className='Message'>
                    <AnimatedNumber
                        className='TextBig'
                        value={5}
                        formatValue={v=>v.toFixed(0)}
                        duration={3000}
                    /> 
                <p className='TextSmall'>AÑOS DE EXPERIENCIA</p>
            </div>
        </div>
        <div data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"  
            className='ContainerBenifi'>
            <div className='ContainerIcon'>
                <img className='Icon' src={Img2} alt='icon'/>
            </div>
            <div className='Message'>
                    <AnimatedNumber
                        className='TextBig'
                        value={1000}
                        formatValue={v=>formatPlus(v)}
                        duration={3000}
                    /> 
                <p className='TextSmall'>CLIENTES SATISFECHO</p>
            </div>
        </div>
        <div data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"  
            className='ContainerBenifi'>
            <div className='ContainerIcon'>
                <img className='Icon' src={Img3} alt='icon'/>
            </div>
            <div className='Message'>
                <p className='TextBig'>
                    <AnimatedNumber
                        className='TextBig'
                        value={40000}
                        formatValue={v=>formatPlus(v)}
                        duration={3000}
                    /> 
                </p>
                <p className='TextSmall'>PANELES INSTALADOS</p>
            </div>
        </div>
        <div data-aos="fade-up"
            data-aos-offset="-400"
            data-aos-delay="50"
            data-aos-duration="200"
            data-aos-easing="linear"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"  
            className='ContainerBenifi'>
            <div className='ContainerIcon'>
                <img className='Icon' src={Img4} alt='icon'/>
            </div>
            <div className='Message'>
                <AnimatedNumber
                        className='TextBig'
                        value={60000}
                        formatValue={v=>formatKW(v)}
                        duration={3000}
                    /> 
                <p className='TextSmall'>AÑOS DE EXPERIENCIA</p>
            </div>
        </div>
    </div>
);

export default BannerBenifi;


