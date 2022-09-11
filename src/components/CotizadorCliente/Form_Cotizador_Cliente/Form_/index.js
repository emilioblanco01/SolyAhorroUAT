import React from "react";
import { formatNumber } from "../../../../functions/Functions";


const FormPaneles = ({state, dispatch, level, setLevel}) => {
    let CantidadPaneles = state.Resultado.CantidadPaneles;
    let GeneracionEstimada = state.Resultado.GeneracionEstimada;
    return (

        <div className='WrapperFormPreCoti'>
            <label className='LabelFCoti4'>Tu sistema requiere {CantidadPaneles} paneles solares para generar {formatNumber(GeneracionEstimada)} Kilowatts</label>
            <label className='LabelFCoti2' >Cantidad Paneles:</label>
            <div className='InputFCotiWatts'>
                <input className='' placeholder='0' type="number" id="KW" name="" onChange={({ target }) => dispatch({ type: 'SET_CAPACIDAD_INVERSOR', payload: target.value })} />
            </div>
            <label className='LabelFCoti2' >Capacidad Inversor:</label>
            <div className='InputFCotiWatts'>
                <input className='' placeholder='0' type="number" id="KW" name="" onChange={({ target }) => dispatch({ type: 'SET_CAPACIDAD_INVERSOR', payload: target.value })} />
            </div>
            <button className='ButtonFCotiza' onClick={() => setLevel(level + 1)}>Enviar</button>
        </div>
    );
}

export default FormPaneles;