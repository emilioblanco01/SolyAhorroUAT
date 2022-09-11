import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../../functions/Functions";
import { quotePayment } from "../../../../apis/peticiones";
import './FormFinan.css'


const FormFinan = ({ setLevel, level, state, dispatch, Perfil }) => {
    const [Pago, setPago] = useState(0);
    const PagoMin = state.Financiamiento[0].Pago;
    const PagoMax = state.Financiamiento[6].Pago;
    const pago = state.Financiamiento;

    const HandleChange = ({ target }) => {
        const Pago = pago.filter(f => f.Meses === parseInt(target.value));
        setPago(Pago[0].Pago);
        dispatch({ type: 'SET_PLAZO', payload: parseInt(target.value) });
    }
    

    useEffect(() => setPago(pago[0].Pago), [state.Financiamiento]);



    return (
        <div className='WrapperFormFinan'>
            <label className='LabelFCoti4'>Crea un credito a tu medida, tu decides las condiciones</label>
            <label className='LabelFCoti5'>{`Plazo: ${state.Plazo} Meses`}</label>
            <div className="ConteInputFCRange">
                <input className='InputFCRange' name='enga' type="range" max={84} min={12} step={12}
                    value={state.Plazo} onChange={HandleChange} />
                <p className="MinFCRange">{`12 Meses`}</p>
                <p className="MaxFCRange">{`48 Meses`}</p>
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