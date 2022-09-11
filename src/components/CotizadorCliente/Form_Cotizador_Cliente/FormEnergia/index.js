import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GetCotizacion } from "../../../../apis/peticiones";
import './FormEnergia.css'
import { selectPorcentaje } from "../../../../App/CounterSlice";
import ModalInfo from '../../ModalInfo/index';

import InfoCotizador1 from '../../../../assets/images/Cotizador/InfoCotizador.jpg';
import InfoCotizador2 from '../../../../assets/images/Cotizador/InfoCotizador2.jpg';
import InfoCotizador3 from '../../../../assets/images/Cotizador/InfoCotizador3.jpg';
import InfoCotizador4 from '../../../../assets/images/Cotizador/InfoCotizador4.jpg';

const FormEnergia = ({ level, setLevel, dispatch, state, Perfil }) => {
    const [InfoPeriodo, setInfoPeriodo] =   useState(false);
    const [InfoTarifa, setInfoTarifa] =     useState(false);
    const [InfoConsumo, setInfoConsumo] =   useState(false);
    const [InfoGasto, setInfoGasto] =       useState(false);
    const [validCant, setvalidCant] =       useState(false);
    const [ValidRecibo, setValidRecibo] = useState(false);
    //Alerts

    const porcentaje = useSelector(selectPorcentaje);
    const [recibo, setRecibo] = useState(true);

    useEffect(() => {
        if( (state.KWconsumidos) && (+state.KWconsumidos > 1000000 || +state.KWconsumidos < 1)){
            dispatch({ type: 'SET_KW', payload: 1 });
            setvalidCant(true);
        }
    }, [state.KWconsumidos]);

    useEffect(() => {
        if( (state.gastos) && (+state.gastos > 100000 || +state.gastos < 1)){
            dispatch({ type: 'SET_GASTOS', payload: 1 });
            setvalidCant(false);
        }
    }, [state.gastos]);
    
    
    const kwConsumidos = ({target}) => {
        setvalidCant(false);
        dispatch({ type: 'SET_KW', payload: target.value });
    }

    const changesGastos = ({target}) => {
        setvalidCant(false);
        dispatch({ type: 'SET_GASTOS', payload: target.value })
    }

    const Submit = async () => {
        let result;
        if(ValidRecibo === false){
            setValidRecibo(true);
        }
        else{
            if (recibo) {
                result = await GetCotizacion({
                    periodo: state.periodo,
                    EstadoMunicipio: state.Tarifa === 'ratePdbt' ? state.municipio : state.estado,
                    Estado: state.estado,
                    Consumidos: state.KWconsumidos,
                    TipoTarifa: state.Tarifa,
                    porcentaje: porcentaje,
                    Municipio: state.municipio,
                    state
                })
            }
            else {
                const Tarifa = state.TipoConstruccion.toLowerCase() === 'casa' ?
                    parseInt(state.gastos) <= 1500 ?
                        'rate01Price' :
                        "rateDacPrice" :
                    'ratePdbtPrice';
                result = await GetCotizacion({
                    periodo: state.periodo,
                    EstadoMunicipio: Tarifa === 'ratePdbtPrice' ? state.municipio : state.estado,
                    Consumidos: state.gastos,
                    TipoTarifa: Tarifa,
                    Price: true,
                    porcentaje, porcentaje,
                    Municipio: state.municipio,
                    Estado: state.estado,
                    state
                })
                dispatch({ type: 'SET_TARIFA', payload: Tarifa });
            }
            dispatch({ type: 'SET_PRECIO_FINAL', payload: result.costoEquipo });
            dispatch({ type: 'SET_RESULTADO', payload: result });
            setLevel(level + 1);
        }
        
    }

    const onChangeRecibo = (bool) => {
        setRecibo(bool);
        setValidRecibo(true);
    }

    return (
        <div className='WrapperFormEnergia'>
            {
                !Perfil ? (
                    <>
                        <label className='LabelFCoti3' >¿Tienes tu recibo a la mano?</label>
                        <div className='BlockRFEnergia'>
                            <input className='RadioFRegistro' type="radio" id="html" name="genero" value={true} onChange={() => onChangeRecibo(true)} />
                            <label className='LabelRFRegistro' >Sí</label>
                        </div>
                        <div className='BlockRFEnergia'>
                            <input className='RadioFRegistro' type="radio" id="css" name="genero" value={false} onChange={() => onChangeRecibo(false)} />
                            <label className='LabelRFRegistro'>No</label>
                        </div>
                        {!ValidRecibo ? (<label className='LabelAlert'>Favor de seleccionar una opción</label>) : undefined}
                    </>
                    
                ) : undefined
            }

            <label className='LabelFCoti2' >
                <button onClick={() => setInfoPeriodo(true)} className='Info'>?</button>Periodo:
            </label>
            <div className='InputFCoti'>
                <select className='' name="" id="" form="" onChange={({ target }) => dispatch({ type: 'SET_PERIODO', payload: target.value })}>
                    <option value="" disabled selected id='no-select'>Tipo de periodo</option>
                    <option value={0}>Mensual</option>
                    <option value={1}>Bimestral</option>
                </select>
            </div >
            {recibo
                ?
                <>
                    <label className='LabelFCoti2' ><button onClick={() => setInfoTarifa(true)} className='Info'>?</button>Tarifa:</label>
                    <div className='InputFCoti'>
                        <select className='' name="" id="" form="" value={state.Tarifa} onChange={({ target }) => dispatch({ type: 'SET_TARIFA', payload: target.value })}>
                            <option value="" disabled selected id='no-select'>Tipo de tarifa</option>
                            {
                                state.TipoConstruccion === 'Casa' ? (
                                    <>
                                        <option value="rate01">TARIFA 1</option>
                                        <option value="rateDac">DAC</option>

                                    </>
                                ) :
                                    (
                                        <>
                                            <option value="ratePdbt">PDBT</option>
                                            <option value="rateGdmto">GDMTO</option>
                                            <option value="rateGdmth">GDMTH</option>
                                        </>
                                    )
                            }
                        </select>
                    </div >
                    <label className='LabelFCoti2' ><button onClick={() => setInfoConsumo(true)} className='Info'>?</button>Consumo de Kilowatts:</label>
                    <div className='InputFCotiNum1'>
                        <input 
                            placeholder='0' 
                            type="number" 
                            id="KW" 
                            name="" 
                            value={state.KWconsumidos}
                            onChange={kwConsumidos} />
                    </div>
                </>
                :
                <>
                    <label className='LabelFCoti2' ><button onClick={() => setInfoGasto(true)} className='Info'>?</button>Gasto promedio de luz:</label>
                    <div className='InputFCotiNum2'>
                        <input 
                            className='' 
                            placeholder='0' 
                            type="number" 
                            id="KW" 
                            name="" 
                            value={state.gastos}
                            onChange={changesGastos} />
                    </div>
                </>
            }
            {validCant ? (<label className='LabelAlert'>Favor de introducir, cantidades validas</label>) : undefined}
            <button className='ButtonFCotiza' onClick={() => {
                dispatch({ type: 'SET_TARIFA', payload: undefined });
                setLevel(level - 1)}}>Anterior</button>
            <button className='ButtonFCotiza' onClick={() => {
                if(state.Tarifa === "rateGdmto" || state.Tarifa === "rateGdmth"){
                    setLevel(7)
                }
                else{ Submit()}
            }}>Siguiente</button>
            <ModalInfo open={InfoPeriodo} close={() =>  setInfoPeriodo(false)}  img={InfoCotizador2}/>
            <ModalInfo open={InfoTarifa} close={() =>   setInfoTarifa(false)}   img={InfoCotizador4}/>
            <ModalInfo open={InfoConsumo} close={() =>  setInfoConsumo(false)}  img={InfoCotizador1}/>
            <ModalInfo open={InfoGasto} close={() =>    setInfoGasto(false)}    img={InfoCotizador3}/>
        </div>
    );
}
export default FormEnergia;