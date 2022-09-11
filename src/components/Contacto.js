import React from "react";

//Components

import FormCotizar from "./FormCotizar";
import Sucursal from "./Sucursal";

const sucursales =[
    {
        title:'Matriz',
        direction: 'Capilla de Guadalupe, Jalisco Carr. Tepa-Arandas “Rancho la Paleta” 27-A',
        phones:'(378) 7122636 / (378) 68 8 11 65',
        whatsapp:'378 885 38 50'
    },
    {
        title:'Sucursal Guadalajara',
        direction: 'Av Jesús Reyes Heroles 2790, Villa Guerrero, 44987 Guadalajara, Jal.',
        phones:'333 692 52 59',
        whatsapp:''
    },
    {
        title:'Sucursal Aguascalientes',
        direction: 'Av. Aguascalientes Poniente #2617 Local 7, Colonia la España',
        phones:'449 377 32 14',
        whatsapp:''
    },
    {
        title:'Sucursal León',
        direction: 'Paseo de Los Cóndores 202A, San Isidro, 37685 León, Gto',
        phones:'477 928 60 68 / 477 928 60 69',
        whatsapp:''
    },
    {
        title:'Sucursal Jalostotitlán',
        direction: 'Pbro. Salvador Quezada Limón 179, El Panteón, 47120 Jalostotitlán, Jal.',
        phones:'431 688 0018',
        whatsapp:''
    },
]


const Contacto = () => {
    return (
        <div style={{position:'relative', zIndex:1 }}>
            <FormCotizar/>
            {
                sucursales.map((surcusal)=>{
                    return <Sucursal {...surcusal}/>
                })
            }   

        </div>
    );
}

export default Contacto;