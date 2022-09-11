import React, {useState} from "react";
import './FormContact.css';
import { GeneracionPdf } from "../../../../apis/peticiones";
import { ModelAlert } from "../../../ModelAlert";


const FormContact = ({ level, setLevel, dispatch, state }) => {

    const [modal, setModal] = useState(false);

    const [Nombre, setNombre] = useState(false);
    const [Apellido, setApellido] = useState(false);
    const [Correo, setCorreo] = useState(false);
    const [Telefono, setTelefono] = useState(false);
    const [NumServicio, setNumServicio] = useState(false);

    const onSubmit = async () => {
        setModal(true);
        await GeneracionPdf({ Data: state, setLevel: setLevel, level: level, nombre: `${state.Nombre} ${state.Apellido}`, apellido: ``})
        setModal(false);
    }

    const Submit = (e) => {
        let Next = true;
        if(!state.Nombre){
            setNombre(true);
            Next = false;
        }
        if(!state.Apellido){
            setApellido(true);
            Next = false;
        }
        if(!state.Correo){
            setCorreo(true);
            Next = false;
        }
        if(!state.Telefono){
            setTelefono(true);
            Next = false;
        }
        if(!state.numeroServicio){
            setNumServicio(true);
            Next = false;
        }
        if(Next){ onSubmit(); }
    }


    const handleChange = ({ target }) => {
        switch (target.name) {
            case 'Nombre':
                dispatch({ type: 'SET_NOMBRE', payload: target.value });
                setNombre(false);
                break;
            case 'Apellido':
                dispatch({ type: 'SET_APELLIDO', payload: target.value });
                setApellido(false);
                break;
            case 'Correo':
                dispatch({ type: 'SET_CORREO', payload: target.value });
                setCorreo(false);
                break;
            case 'Telefono':
                dispatch({ type: 'SET_TELEFONO', payload: target.value });
                setTelefono(false);
                break;
            default:
                break;
        }
    }

    //NumeroServicio
    const ChangeNumServicio = ({target}) => {
        dispatch({type: 'SET_NUMERO_SERVICIO', payload: target.value});
        setNumServicio(false);
    }


    return (
        <div className='WrapperFormContact'>
            <ModelAlert modal={modal}/>
            <label className='SubtitleFCoti'>Datos del cliente</label>
            <label className='LabelFRegisto'>Nombre</label>
            <input className='InputFRegisto' placeholder='Nombre' type="text" id="" name="Nombre" onChange={handleChange} maxLength={15}/>
            
            <label className='LabelFRegisto'>Apellido</label>
            <input className='InputFRegisto' placeholder='Apellido' type="text" id="" name="Apellido" onChange={handleChange} maxLength={15}/>
            
            <label className='LabelFRegisto'>Correo Electronico / Domicilio</label>
            <input className='InputFRegisto' id="" name="Correo" onChange={handleChange} maxLength={50}/>
            
            <label className='LabelFRegisto'>Telefono</label>
            <input className='InputFRegisto' placeholder='333-333-333' type="number" id="" name="Telefono" onChange={handleChange} />
            
            <label className='LabelFRegisto'>Numero de servicio:</label>
            <input className='InputFRegisto' placeholder='' type="text" id="" name="NumeroServicio" onChange={ChangeNumServicio} />
            {Nombre || Apellido || Correo || Telefono || NumServicio ? (<label className='LabelAlert'>Se requieren todos los campos para continuar</label>) : undefined}
            <button className='ButtonFCotiza' onClick={() =>setLevel(level-1)}>Anterior</button>
            <button className='ButtonFCotiza' onClick={Submit}>Enviar</button>
            
        </div>
    );
}

export default FormContact;