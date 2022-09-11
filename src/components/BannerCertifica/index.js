import React,{useRef, useEffect} from "react";
import Img1 from '../../assets/images/certificates/c1.png';
import Img2 from '../../assets/images/certificates/c2.png';
import Img3 from '../../assets/images/certificates/c3.png';
import Img4 from '../../assets/images/certificates/c4.png';
import Img5 from '../../assets/images/certificates/c5.png';
import Img6 from '../../assets/images/certificates/c6.png';
import Img7 from '../../assets/images/certificates/c7.png';
import Img8 from '../../assets/images/certificates/c8.png';


import "./BannerCertifica.css";




const BannerCertifica = () => {
    const slidershow = useRef(null);
    const intervaloSlideShow = useRef(null);

    const siguiente = ()=>{
        if (slidershow.current.children.length > 0) {
            const primerElemento = slidershow.current.children[0];

            slidershow.current.style.transition= `500ms ease-out all`;
            const tamanoSlide = slidershow.current.children[0].offsetWidth;
            slidershow.current.style.transform = `translateX(-${tamanoSlide}px)`;

            const transicion= () => {
                slidershow.current.style.transition= 'none';
                slidershow.current.style.transform= `translateX(0)`;
                slidershow.current.appendChild(primerElemento);

                slidershow.current.removeEventListener('transitionend', transicion)
            }

            slidershow.current.addEventListener('transitionend', transicion)
        }
    }
    const anterior = ()=>{  
        if (slidershow.current.children.length > 0) {
            const index = slidershow.current.children.length -1;
            const ultimoElemento = slidershow.current.children[index];

            slidershow.current.insertBefore(ultimoElemento, slidershow.current.firstChild);
            
            slidershow.current.style.transition = 'none';

            const tamanoSlide = slidershow.current.children[0].offsetWidth;
            slidershow.current.style.transform = `translateX(-${tamanoSlide}px)`;
            
            setTimeout(()=> {
                slidershow.current.style.transition = '300ms ease-out all';
                slidershow.current.style.transform = `translateX(0)`;
            }, 30)
        }

    }

    useEffect(()=>{
        intervaloSlideShow.current = setInterval(()=>{
            siguiente();
        }, 4000);

        slidershow.current.addEventListener('mouseenter', ()=>{
            clearInterval(intervaloSlideShow.current );
        });

        slidershow.current.addEventListener('mouseleave', ()=>{
            intervaloSlideShow.current = setInterval(()=>{
                siguiente();
            }, 4000);
        });
        
        return () => {
            if (intervaloSlideShow.current){
                clearInterval(intervaloSlideShow.current );
            }
        }
    }, []);
    
    return (
        <div className='WrapperCerti'>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="100"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center" 
                className='TitleInfoCerti'>
                <p className='TitleCerti1'>Nuestras</p>
                <p className='TitleCerti2'>Certificaciones</p>
            </div>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="200"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true" 
                className='WrapperSlider'>
                <div className='ContainerArrowC' id='CertiArrowLeft'>
                    <button className='SliderArrow' onClick={anterior} ><i className="fas fa-chevron-left"></i></button>
                </div>
                
                <div className='WrapperSliderImgs' ref={slidershow}>
                    <img className='SliderImg' src={Img1} alt='certificado'/>
                    <img className='SliderImg' src={Img2} alt='certificado'/>
                    <img className='SliderImg' src={Img3} alt='certificado'/>
                    <img className='SliderImg' src={Img4} alt='certificado'/>
                    <img className='SliderImg' src={Img5} alt='certificado'/>
                    <img className='SliderImg' src={Img6} alt='certificado'/>
                    <img className='SliderImg' src={Img7} alt='certificado'/>
                    <img className='SliderImg' src={Img8} alt='certificado'/>
                </div>   
                <div className='ContainerArrowC' id='CertiArrowRight'>
                    <button className='SliderArrow' onClick={siguiente} ><i className="fas fa-chevron-right"></i></button>
                </div> 
            </div>
        </div>
    );
}


export default BannerCertifica;