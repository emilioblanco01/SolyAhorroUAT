import React, {useState} from "react";
import { sendEmail } from "../../../../apis/peticiones";
import './FormContact.css'


const FormBombeo = (props) => {

    const [Data, setData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
    })

    const send = async () => {
        const kwConsumidos = props.state.periodo === '1'? props.state.KWconsumidos / 2 : props.state.KWconsumidos;
        const tarifa = props.state.TipoConstruccion === "Negocio"? props.state.Tarifa.replaceAll('rate', '') : props.state.TipoConstruccion;
        await sendEmail(Data, tarifa, props.state.municipio, props.state.estado, kwConsumidos);
        props.setLevel(6);
    }

    const handleChange = ({target}) => setData({...Data, [target.name]: target.value});

    return (
        <div className='WrapperFormContact'>
            <label className='SubtitleFCoti'>Solicita una cotización</label>
            <label className='LabelFRegisto'>Nombre Completo</label>
            <input className='InputFRegisto' placeholder='Nombre/Apellido' type="text" id="" name="nombre" onChange={handleChange} maxLength={15}/>
            <label className='LabelFRegisto' for="">Correo Electronico</label>
            <input className='InputFRegisto' placeholder='ejemplo@gmail.com' type="email" id="" name="correo" onChange={handleChange}/>
            <label className='LabelFRegisto'>Telefono</label>
            <input className='InputFRegisto'placeholder='333-333-333' type="phone" id="" name="telefono" onChange={handleChange}/>
            <label className='LabelFRegisto' >Mensaje</label>
            <input className='InputFRegisto' placeholder='Inserta tu mensaje aquí' type="text" id="" name="mensaje" onChange={handleChange}/>
            <button className='ButtonFCotiza' onClick={() =>props.setLevel(1)}>Regresar</button>
            <button className='ButtonFCotiza' onClick={() => send()}>Enviar</button>
        </div>
    );
}

export default FormBombeo;