import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../../functions/Functions";
import { quotePaymentinChange } from "../../../../apis/peticiones";
import './FormFinan.css'


const FormFinan = ({ setLevel, level, state, dispatch, Perfil }) => {
    const [Pago, setPago] = useState(0);
    const steps = state.PrecioFinal / 10;
    const PagoMin = state.Financiamiento[0].Pago;
    const PagoMax = state.Financiamiento[6].Pago;
    const pago = state.Financiamiento;

    const HandleChange = ({ target }) => {
        const Pago = pago.filter(f => f.Meses === parseInt(target.value));
        setPago(Pago[0].Pago);
        dispatch({ type: 'SET_PLAZO', payload: parseInt(target.value) });
        switch (target.value) {
            case '12':
                dispatch({ type: 'SET_TASA', payload: 30.44 });
                break;
            case '24':
                dispatch({ type: 'SET_TASA', payload: 33.80 });
                break;
            case '36':
                dispatch({ type: 'SET_TASA', payload: 27.85 });
                break;
            case '48':
                dispatch({ type: 'SET_TASA', payload: 26.98 });
                break;
            case '60':
                dispatch({ type: 'SET_TASA', payload: 27.50 });
                break;
            case '72':
                dispatch({ type: 'SET_TASA', payload: 27.50 });
                break;
            case '84':
                dispatch({ type: 'SET_TASA', payload: 27.50 });
                break;
            default:
                break;
        }

    }


    useEffect(() => setPago(pago[0].Pago), [state.Financiamiento]);

    const HandleTasa = async ({ target }) => {
        const value = target.value;
        dispatch({ type: 'SET_TASA', payload: +value });
        setTimeout(() => {
            quotePaymentinChange({ PrecioTotal: state.PrecioFinal, Enganche: state.Enganche, tasa: +value, dispatch });
            dispatch({ type: 'SET_PLAZO', payload: 12 });
            dispatch({ type: 'SET_ENGANCHE', payload: steps });
        }, 300);
    }

    const ChangeEngache = async ({ target }) => {
        setTimeout(() => {
            quotePaymentinChange({ PrecioTotal: state.PrecioFinal, Enganche: target.value, tasa: state.tasa, dispatch });
            dispatch({ type: 'SET_PLAZO', payload: parseInt(12) });
            dispatch({ type: 'SET_ENGANCHE', payload: parseFloat(target.value) })
        }, 300);
    };

    return (
        <div className='WrapperFormFinan'>
            <label className='LabelFCoti4'>Crea un credito a tu medida, tu decides las condiciones</label>
            {
                Perfil ? (
                    <>
                        <label className='LabelFCoti2'>Tasa de:</label>
                        <div className='InputFCoti'>
                            <select value={state.tasa} onChange={HandleTasa} disabled={true}>
                                <option value="" disabled selected id='no-select' >Tasa</option>
                                <option value={30.44}>30.44 %</option>
                                <option value={33.80}>33.80 %</option>
                                <option value={27.85}>27.85 %</option>
                                <option value={26.98}>26.98 %</option>
                                <option value={27.50}>27.50 %</option>
                            </select>
                        </div >
                        <label className='LabelFCoti5'>{`Enganche : $${formatNumber(state.Enganche)} (${Math.ceil(state.Enganche / steps)}0%)`}</label>
                        <div className="ConteInputFCRange">
                            <input className='InputFCRange' name='enga' type="range" max={state.PrecioFinal} min={steps} step={steps} onChange={ChangeEngache} />
                            <p className="MinFCRange">{`$${formatNumber(steps)}`}</p>
                            <p className="MaxFCRange">{`$${formatNumber(state.PrecioFinal)}`}</p>
                        </div>
                    </>
                ) : undefined
            }
            <label className='LabelFCoti5'>{`Plazo: ${state.Plazo} Meses`}</label>
            <div className="ConteInputFCRange">
                <input className='InputFCRange' name='enga' type="range" max={84} min={12} step={12}
                    value={state.Plazo} onChange={HandleChange} />
                <p className="MinFCRange">{`12 Meses`}</p>
                <p className="MaxFCRange">{`84 Meses`}</p>
            </div>
            <label className='LabelFCoti5'>{`Pago Mensual: $${formatNumber(Pago)}`}</label>
            <div className="ConteInputFCRange">
                <input className='InputFCRange' name='enga' type="range" max={84} min={12} step={12}
                    value={state.Plazo} onChange={HandleChange} />
                <p className="MinFCRange">{`$${formatNumber(PagoMin)} MXN`}</p>
                <p className="MaxFCRange">{`$${formatNumber(PagoMax)} MXN`}</p>
            </div>
            <button className='ButtonFCotiza' onClick={() => setLevel(level - 1)}>Anterior</button>
            <button className='ButtonFCotiza' onClick={() => setLevel(level + 1)}>Siguiente</button>
        </div>
    );
}

export default FormFinan;