import React,{useRef, useEffect} from "react";
import IMGBanner1 from '../../assets/images/sliders/slider-1.png';
import IMGBanner2 from '../../assets/images/sliders/slider-2.png';
import IMGBanner3 from '../../assets/images/sliders/slider-3.png';
import IMGBanner4 from '../../assets/images/sliders/slider-4.png';


import "./MainBanner.css";

const sliders = [
    {
        image: IMGBanner1,
        title: "Eficientiza tu consumo de luz"
    },
    {
        image: IMGBanner2,
        title: "Energía solar para potencializar tu futuro"
    },
    {
        image: IMGBanner3,
        title: "Aprovecha la energía del sol para tu beneficio",
    },
    {
        image: IMGBanner4,
        title: "Mejora tus costos de electricidad"
    }
]

const MainBanner = () => {
    const slidershow = useRef();
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
        }, 5000);

        slidershow.current.addEventListener('mouseenter', ()=>{
            clearInterval(intervaloSlideShow.current );
        });

        slidershow.current.addEventListener('mouseleave', ()=>{
            intervaloSlideShow.current = setInterval(()=>{
                siguiente();
            }, 5000);
        });

        return () => {
            if (intervaloSlideShow.current){
                clearInterval(intervaloSlideShow.current );
            }
        }

    }, []);

    
    return(
        <div className='MainWrapper'>
            <div className='ContainerArrowM' id='CertiArrowLeftMain'>
                <button className='SliderArrowMB' onClick={anterior} ><i className="fas fa-chevron-left"></i></button>
            </div> 
            <div className='ContainerArrowM' id='CertiArrowRightMain'>
                <button className='SliderArrowMB' onClick={siguiente} ><i className="fas fa-chevron-right"></i></button>
            </div> 
            <div className='SliderMain' ref={slidershow}>
                {
                    sliders.map((slider,index)=>{
                        return (
                            <div className='MainContainer' key={index}>
                                <img className='BannerMain' src={slider.image} alt='logo'/>
                                <div className='InfoMain'>
                                    <div className='TextMain'>
                                        <p className='TitleMain'>{slider.title}</p>
                                        <a href='#ProyectosInicio' className='ButtonMain' > Ver proyectos </a>
                                    </div>
                                </div>
                            </div>
                        );                
                    })
                } 
            </div>
        </div>
    );
}

export default MainBanner;