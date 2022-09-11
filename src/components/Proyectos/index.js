import React from "react";

import './Proyectos.css'


import BlockImg from "./BlockImg";

const projects= [
    {
        title: 'Comercio',
        description: 'Tarifa: PDBT - GDMTO',
        image: 'comercio'
    },
    {
        title: 'Residencial',
        description: 'Tarifa: Tarifa 1 - DAC',
        image: 'residencial'
    },
    {
        title: 'Bombeo Solar',
        description: '',
        image: 'bombeoS'
    },
    {
        title: 'Industrial',
        description: 'Tarifa: GDMTO - GDMTH',
        image: 'industrial'
    },
]
const Proyectos = () => (
    <div className='WrapperProyectos'>
        <div className='TitleProyectos'>Proyectos</div>
        <div className='ContainerProyectos'>
            {
                projects.map((project,index)=>{
                    return <BlockImg  {...project} key={index}/>
                })
            }
               
        </div>
    </div>
);

export default Proyectos;