import React, {Component} from 'react';

import "./BannerSistemas.css";

//import { ReactComponent as Img1 } from '../../assets/images/icons/IconSystemHybrid.svg';
import Img1 from '../../assets/images/icons/IconSystemHybrid.svg';
import Img2 from '../../assets/images/icons/IconSystemInter.svg';
import Img3 from '../../assets/images/icons/IconSystemSolar.svg';

const options = [
    {
        title: 'Sistema interconectado',
        paragrahps: [
            'El sistema interconectado se caracteriza por la conexión a tu línea de CFE, los paneles solares captan la energía del Sol, transformándola en energía eléctrica para poder gozar de energía limpia y económica .',
            'Entre sus beneficios encuentra:',
            '- Reducción de tus gastos de luz hasta un 99%.',
            '- Aumenta la plusvalía de tu negocio y/o propiedad.'
        ],
        image: Img2
    },
    {
        title: 'Bombeo solar',
        paragrahps: [
            'Es un sistema autónomo para proporcionar un suministro de agua basado en la energía del Sol.',
            'Entre sus beneficios encuentra:',
            '- Energía inagotable y no contaminante.',
            '- Alto rendimiento.',
            '- Mantenimiento sencillo.',
            '- No es necesario disponer de red eléctrica.',
        ],
        image: Img3
    },
    {
        title: 'Sistema híbrido',
        paragrahps: [
            'Un sistema híbrido te ofrece la opción de utilizar baterías y al mismo tiempo estar conectado a CFE, mediante la tecnología Net Zero Export y baterías de última generación.',
            'Entre sus beneficios encuentra:',
            '- Nunca te quedarás sin luz.',
            '- No dependerás de CFE.',
            '- Contarás con tecnología de vanguardia que aumenta el valor de tu inmueble.',
            '-  Poco mantenimiento gracias a sus baterías duraderas y confiables.',
            '- Excelente retorno de inversión.',

        ],
        image: Img1
    }
]
class BannerSistemas extends Component{
    
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
        <div className='WrapperS1' >
            <p data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="0"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='TitleS'>
                Tipos de sistema
            </p>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="0"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center" 
                className='WrapperS2'>
                <div className='ContainerS'>
                    {
                        options.map((option,index)=>{
                            return <div  
                            className={`OptionS-${ index === this.state.selection ? 'selected' : 'normal'}`}
                            onClick={()=> this.changeSelection(index)} key={option.title}> 
                            
                            <img src={option.image} alt='icon' style={{margin:'0.8rem', fill: '#8bc540'}}/>

                            {option.title}  
                            
                            </div>
                        })
                    }   
                </div>
                <div className='DescriptionS'>
                    <p className='DestitleS'>{options[this.state.selection].title}</p>
                    {
                        options[this.state.selection].paragrahps.map((paragrahp, index)=>{
                            return  <p className='DesParagraphS' key={index} >{paragrahp}</p>
                        })
                    }
                </div>
            </div>        
        </div>
        );
    }
}

export default BannerSistemas;