import React, { useState, useEffect } from "react";
import { GetCotizacion, GetMunicipio, CotizadorInstaladores, TarifaMedia } from "../../../../apis/peticiones";
import './FormEnergia.css'


const FormDatosCliente = ({ level, setLevel, dispatch, state, Perfil }) => {

    const [ data, setData] = useState({});

    useEffect(() => state.Tarifa.indexOf('G') < 0? setLevel( level + 1): setLevel(level), [])
   const handleChange = ({target}) => setData({...data, [target.name]: target.value});

    const Submit = async () => {
        const result = await TarifaMedia({ ...state, ...data});
        dispatch({ type: 'SET_RESULTADO', payload: result });
        setLevel(level + 1);
    }

    return (
        <div className='WrapperFormEnergia'>
            <label className='SubtitleFCoti'>Informacion del Consumo del Cliente</label>
            {
                state.Tarifa === 'rateGdmto' ?
                    (
                        <>
                            <label className='LabelFRegisto'>Promedio consumo energia (KW)</label>
                            <input className='InputFRegisto' placeholder='Promedio consumo energia (KW)' type="text" id="" name="PROMEDIO_CONSUMO_ENERGIA" onChange={handleChange} />
                            <label className='LabelFRegisto'>Demanda maxima año</label>
                            <input className='InputFRegisto' placeholder='Demanda maxima año' type="text" id="" name="DEMANDA_MAXIMA_ANO" onChange={handleChange} />
                            <label className='LabelFRegisto'>Demanda maxima promedio</label>
                            <input className='InputFRegisto' placeholder='Demanda maxima promedio' type="text" id="" name="DEMANDA_MAXIMA_PROMEDIO" onChange={handleChange} />
                            <label className='LabelFRegisto'>Factor potencia</label>
                            <input className='InputFRegisto' placeholder='Factor potencia' type="text" id="" name="FACTOR_POTENCIA" onChange={handleChange} />
                        </>
                    ) : (
                        <>
                            <>
                            <label className='LabelFRegisto'>Energia base</label>
                            <input className='InputFRegisto' placeholder='Energia base' type="text" id="" name="BASE" onChange={handleChange} />
                            <label className='LabelFRegisto'>Energia intermedia</label>
                            <input className='InputFRegisto' placeholder='Energia intermedia' type="text" id="" name="INTERMEDIA" onChange={handleChange} />
                            <label className='LabelFRegisto'>Energia punta</label>
                            <input className='InputFRegisto' placeholder='Energia punta' type="text" id="" name="PUNTA" onChange={handleChange} />
                            <label className='LabelFRegisto'>Demanda maxima año</label>
                            <input className='InputFRegisto' placeholder='Demanda maxima año' type="text" id="" name="DEMANDA_MAXIMA_ANO" onChange={handleChange} />
                            <label className='LabelFRegisto'>Demanda maxima promedio</label>
                            <input className='InputFRegisto' placeholder='Demanda maxima promedio' type="text" id="" name="DEMANDA_MAXIMA_PROMEDIO" onChange={handleChange} />
                            <label className='LabelFRegisto'>Demanda maxima mes PUNTA</label>
                            <input className='InputFRegisto' placeholder='Demanda maxima mes PUNTA' type="text" id="" name="DEMANDA_MAXIMA_MES_PUNTA" onChange={handleChange} />
                            <label className='LabelFRegisto'>Factor potencia</label>
                            <input className='InputFRegisto' placeholder='Factor potencia' type="text" id="" name="FACTOR_POTENCIA" onChange={handleChange} />
                            
                        </>
                        </>
                    )
            }
            <button className='ButtonFCotiza' onClick={() => setLevel(level - 1)}>Anterior</button>
            <button className='ButtonFCotiza' onClick={Submit}>Siguiente</button>
        </div>
    );
}
export default FormDatosCliente;