import React, { useState } from "react";
import './FormContact.css';
import { GeneracionPdf } from "../../../../apis/peticiones";
import { ModelAlert } from "../../../ModelAlert";


const FormContact = ({ level, setLevel, dispatch, state, Change }) => {

    const [modal, setModal] = useState(false);

    const [Alert, setAlert] = useState(false);

    const handleSubmit = async () => {
        let Next = true;
        if (!(state.Nombre && state.Apellido && state.Correo && state.Telefono)) {
            setAlert(true);
            Next = false;
        }
        if (Next) {
            setModal(true);
            await GeneracionPdf({ Data: state, setLevel: setLevel, level: level, nombre: state.Nombre, apellido: state.Apellido });
            setModal(false);
            /*
            
            
            */
        }
    }

    //ChangeData
    const ChangeData = ({ target }) => {
        setAlert(false);
        Change({ target });
    }

    return (
        <div className='WrapperFormContact'>
            <ModelAlert modal={modal} />
            <label className='SubtitleFCoti'>Datos del cliente</label>
            <label className='LabelFRegisto'>Nombre</label>
            <input className='InputFRegisto' placeholder='Nombre' type="text" id="" name="NOMBRE" onChange={ChangeData} maxLength={15}/>
            <label className='LabelFRegisto'>Apellido</label>
            <input className='InputFRegisto' placeholder='Apellido' type="text" id="" name="APELLIDO" onChange={ChangeData} maxLength={15}/>
            <label className='LabelFRegisto'>Correo Electronico</label>
            <input className='InputFRegisto' placeholder='ejemplo@gmail.com' type="email" id="" name="CORREO" onChange={ChangeData} />
            <label className='LabelFRegisto'>Telefono</label>
            <input className='InputFRegisto' placeholder='333-333-333' type="phone" id="" name="TELEFONO" onChange={ChangeData} />
            {Alert ? (<label className='LabelAlert'>Se requieren todos los campos para continuar</label>) : undefined}
            <button className='ButtonFCotiza' onClick={() => setLevel(level - 1)}>Anterior</button>
            <button className='ButtonFCotiza' onClick={handleSubmit}>Enviar</button>
        </div>
    );
}

export default FormContact;