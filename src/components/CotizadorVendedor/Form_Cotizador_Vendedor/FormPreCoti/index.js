import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../../functions/Functions";
import { quotePayment } from "../../../../apis/peticiones";
import './FormPreCoti.css'


const FormPreCoti = ({ level, setLevel, dispatch, state, Perfil }) => {
    const [PrecioTotal, setPrecioTotal] = useState(state.Resultado.costoEquipo); //Cotizacion
    const [Descuento, setDescuento] = useState(0); //Precotizacion
    const [DatoDescuento, setDatoDescuento] = useState();
    const [steps, setSteps] = useState(PrecioTotal / 10); //PreCotizacion
    const [Precio, setPrecio] = useState();
    const [alert, setAlert] = useState(false);
    const [typePrice, setTypePrice] = useState('Porcentaje');
    const [TipoPago, setTipoPago] = useState(false);
    const [PrecioAplicado, setPrecioAplicado] = useState(false);
    let CantidadPaneles = state.Resultado.cantidadPaneles;
    let GeneracionEstimada = state.Resultado.gastoKwNuevo;

    useEffect(() => dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(steps) }), [])

    useEffect(() => {
        const val = state.Resultado.potenciaGenerada;
        const maxValue = val < 70 ?
            0.10 :
            (val > 70) && (val < 200) ?
                0.15:
                0.20;
        if (Descuento <= 0) {
            dispatch({ type: 'SET_PRECIO_FINAL', payload: state.Resultado.costoEquipo });
            setDatoDescuento(0);
        }
        else if (Descuento > maxValue) {
            dispatch({ type: 'SET_PRECIO_FINAL', payload: state.Resultado.costoEquipo });
            setDatoDescuento(0);
        }
        else {

            let Subtotal = state.Resultado.subtotal;
            let descuento = Subtotal * Descuento;
            const precio = Subtotal - descuento;
            dispatch({ type: 'SET_PRECIO_FINAL', payload: (precio * 1.16).toFixed(2) });
        }
    }, [Descuento])

    useEffect(() => {
        setSteps(state.PrecioFinal / 10);
        dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(state.PrecioFinal / 10) })
    }, [state.PrecioFinal]);

    useEffect(() => {
        if (Precio === '') {
            setSteps(state.PrecioFinal / 10);
            dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(state.PrecioFinal / 10) })
        }
        if (Precio) {
            setSteps(Precio / 10);
            dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(Precio / 10) });
        }

    }, [Precio])

    const ChangeEngache = ({ target }) => { dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(target.value) }) };

    const HandleChangeDescuento = ({ target }) => {
        setTypePrice('Porcentaje');
        target.value ? setDescuento(parseFloat(target.value) / 100) : setDescuento(0);
        setDatoDescuento(target.value);
    };

    const HandleChangePrecio = ({ target }) => {
        setTypePrice('Precio');
        setPrecio(target.value)
    };

    //TipoPago
    const ChangeTipoPago = ({target}) => {
        dispatch({type: 'SET_TIPO_PAGO_INSTALADOR', payload: target.value});
        setTipoPago(false);
    }

    //Submit
    const Submit = (e) => {
        e.preventDefault();
        let Next = true;
        if(state.contado === undefined){
            setTipoPago(true);
            Next = false;
        }
        if(Next){ onSubmit()}
    }

    const onSubmit = async () => {
        if (typePrice === 'Precio') {
            if (parseFloat(Precio) >= state.Resultado.costoEquipo * 0.9) {
                setAlert(false);
                dispatch({ type: 'SET_PRECIO_FINAL', payload: parseFloat(Precio) })
                const resultado = await quotePayment({ PrecioTotal: state.PrecioFinal, Enganche: state.Enganche, tasa: state.tasa });
                dispatch({ type: 'SET_FINANCIAMIENTO', payload: resultado });
                state.contado === 0?setLevel(level + 1): setLevel(level + 2);
            } else {
                setAlert(true);
            }
        }
        else {
            setAlert(false);
            const resultado = await quotePayment({ PrecioTotal: state.PrecioFinal, Enganche: Perfil ? 0 : state.Enganche, tasa: state.tasa });
            dispatch({ type: 'SET_FINANCIAMIENTO', payload: resultado });
            state.contado === 0 || state.contado === undefined?setLevel(level + 1): setLevel(level + 2);
        }
    }


    return (
        <div className='WrapperFormPreCoti'>
            <label className='LabelFCoti5'>
                {Perfil ?
                    `Precio Sugerido : ${formatNumber(state.PrecioFinal)} MXN` :
                    `Adquierelo desde : ${formatNumber(state.PrecioFinal)} MXN`}
            </label>
            {Perfil ? (
                <>
                    <label className='LabelFCoti2'>Tipo de Pago:</label>
                    <div className='InputFCoti'>
                        <select className='' name="" id="" form="" onChange={ChangeTipoPago}>
                            <option value="" disabled selected id='no-select' >Modo de pago :</option>
                            <option value={0}>Financiado</option>
                            <option value={1}>De contado</option>
                        </select>
                    </div >
                    {TipoPago ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>) : undefined}
                    <label className='LabelFCoti2'>Descuento :</label>
                    <div className='InputFCotiNumPorcent'>
                        <input className='' placeholder='0' type="number" onChange={HandleChangeDescuento} value={DatoDescuento} />
                    </div>
                    <label className='LabelFCoti2'>Precio Aplicado :</label>
                    <div className='InputFCotiNumMoneda'>
                        <input className='' placeholder='0' type="number" onChange={HandleChangePrecio} value={state.Resultado.costoEquipo} disabled={true} />
                    </div>
                    <div className="divChecked">
                        <input type="checkbox" checked={PrecioAplicado} onChange={() => {
                            setPrecioAplicado(!PrecioAplicado);
                        }} id="PrecioAplicado"/>
                        <label className="LabelChecked" htmlFor="PrecioAplicado">
                            Descuento especial
                        </label>
                    </div>

                    {
                        PrecioAplicado && (
                            <>
                                <label className='LabelFCoti2'>Desc. por usuario frecuente :</label>
                                <div className='InputFCotiNumMoneda'>
                                    <input className='' placeholder='0' type="number" onChange={HandleChangePrecio} value={Precio} />
                                </div>
                            </>
                        )
                    }

                    {alert ? (<label className='LabelFCoti4'>No puede ser menor al 90% del precio sugerido</label>) : undefined}
                    <div className="ValoresRecibos">
                        <p>Recibo Actual:  $ {formatNumber(state.Resultado.gastoLuz)}</p>
                        <p>Recibo Nuevo:  $ {formatNumber(state.Resultado.gastoLuzNuevo)}</p>
                         
                    </div>
                </>
            ) : (
                <>
                    <label className='LabelFCoti5'>{`Enganche : $${formatNumber(state.Enganche)}`}</label>
                    <div className="ConteInputFCRange">
                        <input className='InputFCRange' name='enga' type="range" max={state.PrecioFinal} min={steps} step={steps} onChange={ChangeEngache} />
                        <p className="MinFCRange">{`$${formatNumber(steps)}.00`}</p>
                        <p className="MaxFCRange">{Precio ? `$${formatNumber(Precio)}.00` : `$${formatNumber(state.PrecioFinal)}.00`}</p>
                    </div>
                </>
            )}
            <button className="ButtonFCotiza" onClick={() => {
                dispatch({type: 'SET_CANTIDAD_PANEL', payload: undefined});
                setLevel(level - 1)}}>Anterior</button>
            <button className='ButtonFCotiza' onClick={Submit}>Siguiente</button>
            <label className='LabelFCoti4'>Obten un precio especial al pagar de contado.</label>
        </div>
    );
}
export default FormPreCoti;