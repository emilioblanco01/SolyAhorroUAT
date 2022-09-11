import React, { useState} from "react";
import EstadosMunicipios from "../../Functions/EstadosMunicipios";
import './FormPreRe.css';



const FormPreRe = ({ level, setLevel, dispatch, state, Change}) => {
    const estadoChange = async ({target}) => {
        setestatusData(false);
        await EstadosMunicipios({target, dispatch});
    }
    const [estatusData, setestatusData] = useState(false)
    const handleSubmit = () => {
        if(state.TipoConstruccion && state.estado && state.municipio){
            state.TipoConstruccion === 'BombeoSolar'? setLevel(7) : setLevel(level + 1);
        }
        else{
            setestatusData(true);
        }
    }

    const editData = ({target}) => {
        setestatusData(false);
        Change({target});
    }

    return (
        (
            <>
            <div className='WrapperFormPreRe'>
                <label className='LabelFCoti2'>Quiero Cotizar Para:</label>
                <div className='InputFCoti'>
                    <select className='' name="TIPO_CONSTRUCCION" id="" form="" onChange={editData}>
                        <option value="" disabled selected id='no-select' >Tipo de construccion</option>
                        <option value='Casa'>Casa</option>
                        <option value='Negocio'>Negocio</option>
                        <option value='Industria'>Industria</option>
                        <option value='BombeoSolar'>Bombeo Solar</option>
                    </select>
                </div >
                <label className='SubtitleFCoti'>Ubicacion</label>
                <label className='LabelFCoti2' >Estado:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" value={state.estado} onChange={estadoChange}>
                        <option value="" disabled selected>Estado</option>
                        {state.estados.map(estado => (<option value={estado} key={estado}>{estado}</option>))}
                    </select>
                </div>
                <label className='LabelFCoti2' >Municipio:</label>
                <div className='InputFCoti'>
                    <select className='' name="MUNICIPIO" id="" form="" onChange={editData}>
                        <option value="" disabled selected>Municipio</option>
                        {state.municipios.map(municipios => (<option value={municipios} key={municipios}>{municipios}</option>))}
                    </select>
                </div >
                {estatusData ? (<label className='LabelAlert'>Se requieren todos los campos para continuar</label>) : undefined}
                <button className='ButtonFCotiza' onClick={handleSubmit}>Siguiente</button>
            </div>
            </>
        )
    )
}

export default FormPreRe;