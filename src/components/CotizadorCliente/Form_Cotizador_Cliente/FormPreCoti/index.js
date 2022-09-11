import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../../functions/Functions";
import { quotePayment } from "../../../../apis/peticiones";
import './FormPreCoti.css'


const FormPreCoti = ({ level, setLevel, dispatch, state, Perfil }) => {

    const PrecioTotal = state.Resultado.costoEquipo;
    const steps = PrecioTotal / 10;
    const [Precio, setPrecio] = useState();
    let CantidadPaneles = state.Resultado.cantidadPaneles;
    let GeneracionEstimada = state.Resultado.gastoKwNuevo;    
    const Periodo = state.periodo === '0'? 'Mensuales' : 'Bimestrales';

    useEffect(() => dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(steps) }), [])


    const ChangeEngache = ({ target }) => { dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(target.value) }) };



    return (
        <div className='WrapperFormPreCoti'>
            <label className='LabelFCoti4'>Tu sistema requiere {CantidadPaneles} paneles solares para generar {formatNumber(GeneracionEstimada)} Kilowatts {Periodo}</label>
            <label className='LabelFCoti5'>
                {Perfil ?
                    `Precio Sugerido : ${formatNumber(state.PrecioFinal)} MXN` :
                    `Adquierelo desde : ${formatNumber(state.PrecioFinal)} MXN`}
            </label>
            <label className='LabelFCoti5'>{`Enganche : $${formatNumber(state.Enganche)}`}</label>
            <div className="ConteInputFCRange">
                <input className='InputFCRange' name='enga' type="range" max={state.PrecioFinal} min={steps} step={steps} onChange={ChangeEngache} />
                <p className="MinFCRange">{`$${formatNumber(steps)}`}</p>
                <p className="MaxFCRange">{Precio ? `$${formatNumber(Precio)}.00` : `$${formatNumber(state.PrecioFinal)}`}</p>
            </div>
            <button className="ButtonFCotiza" onClick={() => {
                dispatch({ type: 'SET_TARIFA', payload: undefined });
                setLevel(2)
                }}>Anterior</button>
            <button className='ButtonFCotiza' onClick={async (e) => {
                e.preventDefault();
                const resultado = await quotePayment({ PrecioTotal: state.PrecioFinal, Enganche: Perfil ? 0 : state.Enganche, tasa: state.tasa });
                dispatch({ type: 'SET_FINANCIAMIENTO', payload: resultado });
                state.contado === 0 || state.contado === undefined ? setLevel(level + 1) : setLevel(level + 2);
            }}>Siguiente</button>
            <label className='LabelFCoti4'>Obten un precio especial al pagar de contado.</label>
        </div>
    );
}
export default FormPreCoti;
