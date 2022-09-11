import React from "react";

import  './Sucursal.css'

const Sucursal = (props) => (
    <div className='WrapperSucursal'>
        <p className='SucursalTitle'>{props.title}</p>
        <div className='ContainerSc'>
            <div className='IconContactSC'> <i class="fas fa-map-marker-alt"></i> </div>
            <p className='Text2ContactSC'>{props.direction}</p>
        </div> 
        <div className='ContainerSc'>
            <div className='IconContactSC'> <i className="fas fa-phone"></i> </div>
            <div className='SubContainerContSc'>
                <div className='SucursalContact'>
                    <p className='Text1ContactSC'>Teléfono(s):</p>
                    <p className='Text2ContactSC'>{props.phones}</p>
                </div>
                { props.whatsapp !== '' &&
                    <div className='SucursalContact'>
                        <p className='Text1ContactSC'>Whatsapp:</p>
                        <p className='Text2ContactSC'>{props.whatsapp}</p>
                    </div>
                }
            </div>
        </div>
        <div className='SucursalMap'>

        </div>
    </div>
)



export default Sucursal;