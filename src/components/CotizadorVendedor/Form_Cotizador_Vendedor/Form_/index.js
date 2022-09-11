import React, {useState, useEffect} from "react";
import { formatNumber } from "../../../../functions/Functions";
import { peticionPaneles } from "../../../../apis/peticiones";


const FormPaneles = ({state, dispatch, level, setLevel}) => {
    let CantidadPaneles = state.Resultado.cantidadPaneles;
    let GeneracionEstimada = state.Resultado.gastoKwNuevo;
    let Periodo = state.periodo === '0' ? 'Mensuales' : 'Bimestrales';
    const [newGeneration, setnewGeneration] = useState(0);

    useEffect(() => setnewGeneration(0), [level]);

    const Submit = async () => {
        if(newGeneration > 0){
             const result = await peticionPaneles(state);
             dispatch({type: 'Update_Resultado', payload: result});
         }
        setLevel(level + 1);
    };

    const changeData = ({target}) => {
        if(target.name !== "CAPACIDAD_INVERSOR"){
            setnewGeneration(newGeneration + 1);
        }
        dispatch({ type: `SET_${target.name}`, payload: target.value })
    };

    return (

        <div className='WrapperFormPreCoti'>
            <label className='LabelFCoti4'>Tu sistema requiere {CantidadPaneles} paneles solares para generar {formatNumber(GeneracionEstimada)} Kilowatts {Periodo}</label>
            <label className='LabelFCoti2' >Cantidad Paneles:</label>
            <div className='InputFCotiWatts'>
                <input className='' placeholder='0' type="number" id="KW" name="CANTIDAD_PANEL" onChange={changeData} />
            </div>
            <label className='LabelFCoti2' >Capacidad Inversor:</label>
            <div className='InputFCotiWatts'>
                <input className='' placeholder='0' type="number" id="KW" name="CAPACIDAD_INVERSOR" onChange={changeData} />
            </div>
            <button className='ButtonFCotiza' onClick={() => state.Tarifa.indexOf('G') < 0 ? setLevel( level -2): setLevel(level - 1)}>Anterior</button>
            <button className='ButtonFCotiza' onClick={() => Submit()}>Siguiente</button>
        </div>
    );
}

export default FormPaneles;