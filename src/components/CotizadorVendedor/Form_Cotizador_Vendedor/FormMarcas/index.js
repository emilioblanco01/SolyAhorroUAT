import React, {useState, useEffect} from 'react';
import { GetCotizacion } from '../../../../apis/peticiones';
import { useSelector } from 'react-redux';
import { selectPorcentaje } from '../../../../App/CounterSlice';


const FormMarcas = ({ level, setLevel, dispatch, state }) => {

    const porcentaje = useSelector(selectPorcentaje);

    const [CapPanel, setCapPanel] = useState(false);
    const [MarcaPanel, setMarcaPanel] = useState(false);
    const [MarcaInv, setMarcaInv] = useState(false);  

    const onSubmit = async () => {
        if (state.TipoConstruccion === 'BombeoSolar') {
            setLevel(7);
        }
        else {
            let result = {};
            if (state.Tarifa === 'rateGdmto' || state.Tarifa === 'rateGdmth') {
                setLevel(level + 1);
            }
            else {
                result = await GetCotizacion({
                    state,
                    periodo: state.periodo,
                    Consumidos: state.KWconsumidos,
                    TipoTarifa: state.Tarifa,
                    porcentaje: porcentaje,
                    Estado: state.estado,
                    Municipio: state.municipio
                })
                dispatch({ type: 'SET_PRECIO_FINAL', payload: result.costoEquipo });
                dispatch({ type: 'SET_RESULTADO', payload: result })
                setLevel(level + 1);
            }
        }
    }

    const Submit = () => {
        let Next = true;
        if(!state.PanelCap){
            setCapPanel(true);
            Next = false;
        }
        if(!state.MarcaPanel){
            setMarcaPanel(true);
            Next = false;
        }
        if(!state.MarcaInversor){
            setMarcaInv(true);
            Next = false;
        }
        if(Next){ onSubmit()}
    }

    //CapPanel
    const ChangeCapacidadPanel = ({target}) => {
        dispatch({ type: 'SET_PANEL', payload: target.value });
        setCapPanel(false);
    }

    //MarcaInv
    const ChangeMarcaInversor = ({target}) => {
        dispatch({ type: 'SET_MARCA_INVERSOR', payload: target.value });
        setMarcaInv(false);
    }

    //MarcaPanel
    const ChangeMarcaPanel = ({target}) => {
        dispatch({ type: 'SET_MARCA_PANEL', payload: target.value })
        setMarcaPanel(false);
    }

    return (
        (
            <div className='WrapperFormPreRe'>
                <label className='SubtitleFCoti' for="">Datos del sistema :</label>
                <label className='LabelFCoti2'>Capacidad panel:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={ChangeCapacidadPanel} value={state.PanelCap}>
                        <option value="" disabled selected id='no-select' >Capacidad panel</option>
                        {state.ListCapacidades.map(cap => ( <option value={cap}>{cap} W</option> ))}
                    </select>
                </div >
                {CapPanel ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>) : undefined}
                <label className='SubtitleFCoti' >Marcas :</label>
                <label className='LabelFCoti2' >Marca Panel Solar:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={ChangeMarcaPanel} value={state.MarcaPanel}>
                        <option value="" disabled selected id='no-select'>Marca Panel</option>
                        {state.ListMarcas.map((marcas, key) => ( <option value={marcas} key={key}>{marcas.toUpperCase()}</option> ))}
                    </select>
                </div >
                {MarcaPanel ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>) : undefined}
                <label className='LabelFCoti2' >Marca Inversor:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={ChangeMarcaInversor} value={state.MarcaInv}>
                        <option value="" disabled selected id='no-select'>Marca inversor</option>
                        {state.ListInversores.map((inv, key) => ( <option value={inv} key={key}>{inv.toUpperCase()}</option> ))}
                    </select>
                </div >
                {MarcaInv ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>) : undefined}
                <button className='ButtonFCotiza' onClick={() => setLevel(level - 1)}>Anterior</button>
                <button className='ButtonFCotiza' onClick={Submit}>Siguiente</button>
            </div>
        )
    )
}

export default FormMarcas
