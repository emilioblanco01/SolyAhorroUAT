import React, {Component} from 'react';
//import { ReactComponent as Img1 } from '../../assets/images/icons/IconServicesCfe.svg';
import ImgS1 from '../../assets/images/services/instalacion-llave-en-mano.png';
import ImgS2 from '../../assets/images/services/tramites-cfe.png';
import ImgS3 from '../../assets/images/services/monitoreo.png';
import ImgS4 from '../../assets/images/services/mantenimiento.png';

import Icon1 from '../../assets/images/icons/IconServicesCfe.svg';
import Icon2 from '../../assets/images/icons/IconServicesKey.svg';
import Icon3 from '../../assets/images/icons/IconServicesMonitoring24.svg';
import Icon4 from '../../assets/images/icons/IconServicesProgram.svg';
import "./BannerOptions.css";

const options = [
    {
        title: 'Instalación llave en mano',
        paragrahps: [
            'Nos encargamos de instalar tu sistema y dejarlo funcionando para que solo te preocupes por ahorrar.',
            'Nuestro equipo de instaladores profesionales cuida todos los detalles durante la instalación de tu sistema fotovoltaico o de bombeo asegurando un proyecto funcional y eficiente.'
        ],
        icon: Icon1,
        image: ImgS1

        
    },
    {
        title: 'Trámites en CFE',
        paragrahps: [
            'Gestionamos todos los trámites ante CFE sin costo adicional.',
            'Contamos con un equipo especializado, que se hará cargo de gestionar ante Comisión Federal de Electricidad la interconexión de tu nuevo sistema fotovoltaico.'
        ],
        icon: Icon2,
        image: ImgS2
    },
    {
        title: 'Monitoreo 24/7',
        paragrahps: [
            'Nos encargamos de instalar tu sistema y dejarlo funcionando para que solo te preocupes por ahorrar.',
            'Nuestro equipo de instaladores profesionales cuida todos los detalles durante la instalación de tu sistema fotovoltaico o de bombeo asegurando un proyecto funcional y eficiente.'
        ],
        icon: Icon3,
        image: ImgS3
    },
    {
        title: 'Mantenimientos programados',
        paragrahps: [
            'De forma anual, revisamos el estado de tu sistema y sus componentes.',
            'El objetivo de estas revisiones es prevenir cualquier desgaste o fallo de tu sistema.'
        ],
        icon: Icon4,
        image: ImgS4
    }
]

class BannerOptions extends Component{
    
    constructor(){
        super()
        this.state={
            selection : 0,
        }

    }

    changeSelection (option){
        this.setState({selection: option})
    }

    render(){
        return(
            <div className='Wrapper1' >
                <p  data-aos="fade-up"
                    data-aos-offset="-200"
                    data-aos-delay="0"
                    data-aos-duration="200"
                    data-aos-easing="linear"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"
                    className='Title'>
                    Servicios
                </p>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="0"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='Wrapper2'>
                <div className='Container'>
                    
                    {
                        options.map((option,index)=>{
                            return <div  
                            className={`Option-${ index === this.state.selection ? 'selected' : 'normal'}`}
                            onClick={()=> this.changeSelection(index)} key={option.title}> 

                            <img src={option.icon} alt='icon' style={{margin:'0.8rem'}} />

                            {option.title}  
                            
                            </div>
                        })
                    }   
                </div>
                <div data-aos="fade-up"
                    data-aos-offset="-200"
                    data-aos-delay="0"
                    data-aos-duration="200"
                    data-aos-easing="linear"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"
                    className='Description'>
                    <p className='Destitle'>{options[this.state.selection].title}</p>
                        {
                            options[this.state.selection].paragrahps.map((paragrahp, index)=>{
                                return  <p className='DesParagraph' key={index} >{paragrahp}</p>
                            })
                        }
                    <div className='Wrapper3'>
                        <img className='Image' src={options[this.state.selection].image} alt='logo' style={{width:'30%'}}/>
                    </div>
                </div>
            </div>        
        </div>
        );
    }
}

export default BannerOptions;