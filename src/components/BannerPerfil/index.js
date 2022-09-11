import React, { useEffect, useState } from "react";
import {Link, useHistory} from 'react-router-dom'
import './BannerPerfil.css'
import CambioContra from './../CambioContra';
import Img from '../../assets/images/image_register.jpg';
import { useSelector } from "react-redux";
import { selectNombre, selectApellido, selectCorreo, selectTelefono, selectFechaNacimiento } from "../../App/CounterSlice";


const BannerPerfil = () => {

    const history = useHistory();

    const Nombre = useSelector(selectNombre);
    const Apellido = useSelector(selectApellido);
    const Correo = useSelector(selectCorreo);
    const Telefono = useSelector(selectTelefono);
    const FechaNacimiento = useSelector(selectFechaNacimiento);
    


    const [cambioContra, setCambioContra] = useState(false);

    return(
        <div className='WrapperBPerfil'>
            <img  className="ImgBPerfil" src={Img} alt="imagen" />
            <div className='InfoBPerfil'>
                <div className='GapBPerfil'> </div>
                <div className='ContiBPerfil'> 
                    <p className='TitleBPerfil'>Nombre:</p>
                    <p className='TextBPerfil'>{Nombre}</p>
                    <p className='TitleBPerfil'>Apellido:</p>
                    <p className='TextBPerfil'>{Apellido}</p>
                    <p className='TitleBPerfil'>Correo:</p>
                    <p className='TextBPerfil'>{Correo}</p>
                    <p className='TitleBPerfil'>Fecha de nacimiento:</p>
                    <p className='TextBPerfil'>{FechaNacimiento}</p>
                    <p className='TitleBPerfil'>Telefono:</p>
                    <p className='TextBPerfil'>{Telefono}</p>
                    <div className=''>
                        {/* <Link className='Button2BPerfil' to='/perfil-cambio'>Editar</Link> */}
                        <button className='Button2BPerfil' onClick={()=>setCambioContra(true)}>Cambiar contraseña</button>
                        <button className='Button2BPerfil' style={{width: 150, height: 30}} onClick={() => history.push('/CotizadorVendedor')}>{' Nueva Cotizacion '}</button>
                        <CambioContra handleClose={() => setCambioContra(false)} open={cambioContra}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BannerPerfil;