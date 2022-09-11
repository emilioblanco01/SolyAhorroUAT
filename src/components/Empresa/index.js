import React, {Component} from 'react';

//Components
import BannerSomos from './../BannerSomos';
import "./Empresa.css";

const conceptos =[
    {
        title: 'Misión',
        description:'Actuar como puente para que cada vez más familias y empresas Mexicanas puedan acceder a fuentes de energía segura, limpia y económica.'
    },
    {
        title: 'Visión',
        description:'Consolidarnos como la empresa líder en el desarrollo de la energía solar en México. Destacándonos por calidad, servicio y profesionalismo.'
    },
    {
        title: 'Valores',
        description:'Responsabilidad, Compromiso, Profesionalismo y Sustentabilidad'
    },
]
class Empresa extends Component{

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
            <div className='ContainerEmpresa1'>
            <div className='ContainerEmpresa2'>
                <BannerSomos/>
            </div>
            <div data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="100"
                data-aos-duration="200"
                data-aos-easing="linear"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className='OptionEmpresa1'>
                <div className='OptionEmpresa2'>
                    {
                        conceptos.map((option,index)=>{
                            return <button className={`ButtonEmpresa${ index === this.state.selection ? 'Selected' : 'Normal'}`}
                            onClick={()=> this.changeSelection(index)} key={option.title}>
                                    {option.title}
                                </button>
                        })
                    }   
                </div>
                <div className='OptionDescription'>
                    <p className='TextDescription'>{conceptos[this.state.selection].description}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Empresa;