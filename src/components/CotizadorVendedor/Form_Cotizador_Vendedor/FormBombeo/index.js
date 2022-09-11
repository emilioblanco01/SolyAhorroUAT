import React from "react";
import './FormContact.css'


const FormBombeo = (props) => (
    <div className='WrapperFormContact'>
        <label className='SubtitleFCoti' for="">Solicita una cotización</label>
        <label className='LabelFRegisto' for="">Nombre Completo</label>
        <input className='InputFRegisto' placeholder='Nombre/Apellido' type="text" id="" name=""/>
        <label className='LabelFRegisto' for="">Correo Electronico</label>
        <input className='InputFRegisto' placeholder='ejemplo@gmail.com' type="email" id="" name=""/>
        <label className='LabelFRegisto' for="">Telefono</label>
        <input className='InputFRegisto'placeholder='333-333-333' type="phone" id="" name=""/>
        <label className='LabelFRegisto' for="">Mensaje</label>
        <input className='InputFRegisto' placeholder='Inserta tu mensaje aquí' type="text" id="" name=""/>
        <button className='ButtonFCotiza' onClick={() =>props.setLevel(6)}>Enviar</button>
    </div>
);

export default FormBombeo;