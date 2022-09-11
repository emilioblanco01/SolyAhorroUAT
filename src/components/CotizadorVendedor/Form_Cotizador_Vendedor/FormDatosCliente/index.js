import { FaceOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { GetCotizacion, GetMunicipio, CotizadorInstaladores, TarifaMedia } from "../../../../apis/peticiones";
import './FormEnergia.css'


const FormDatosCliente = ({ level, setLevel, dispatch, state, Perfil }) => {

    const [data, setData] = useState({
        FactorPotencia: 10
    });

    const [Alert, setAlert] = useState(false);
    const [AlertRangoFactor, setAlertRangoFactor] = useState(false);


    useEffect(() => {
        if (state.Tarifa.indexOf('G') < 0) { setLevel(level + 1); }
        else { setLevel(level); }
    }, [])

    const handleChange = ({ target }) => {
        setData({ ...data, [target.name]: target.value });
        setAlert(false);
        if(target.name === 'FactorPotencia'){setAlertRangoFactor(false)}
    };

    const onSubmit = async () => {
        const result = await TarifaMedia({ ...state, ...data });
        dispatch({ type: 'SET_TARIFA_MEDIA', payload: data });
        dispatch({ type: 'SET_RESULTADO', payload: result });
        setLevel(level + 1);
    }

    const Submit = (e) => {
        let Next = true;
        const FactorPotencia = +data.FactorPotencia;
        if (FactorPotencia < 10 || FactorPotencia > 100) {
            setAlertRangoFactor(true);
            Next = false;
        }
        if (state.Tarifa === 'rateGdmto') {
            if (!(data.PROMEDIO_CONSUMO_ENERGIA && data.DEMANDA_MAXIMA_ANO && data.DEMANDA_MAXIMA_PROMEDIO && data.FactorPotencia)) {
                setAlert(true);
                Next = false;
            }
        }
        else {
            if (!(data.BASE && data.INTERMEDIA && data.PUNTA && data.DEMANDA_MAXIMA_ANO && data.DEMANDA_MAXIMA_PROMEDIO && data.DEMANDA_MAXIMA_MES_PUNTA && data.FactorPotencia)) {
                setAlert(true);
                Next = false;
            }
        }
        if (Next) { onSubmit() }
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
                            <input className='InputFRegisto' placeholder='Factor potencia' type="text" value={data.FactorPotencia} id="" name="FactorPotencia" onChange={handleChange} />
                            {AlertRangoFactor? (<label className='LabelFCoti4 colorRed'>Rango de 10 a 100</label>): undefined}
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
                                <input className='InputFRegisto' placeholder='Factor potencia' type="text" value={data.FactorPotencia} id="" name="FactorPotencia" onChange={handleChange} />
                                {AlertRangoFactor? (<label className='LabelAlert'>Rango de 10 a 100</label>): undefined}
                            </>
                        </>
                    )
            }
            {Alert ? (<label className='LabelAlert'>Se requieren todos los campos para continuar</label>) : undefined}
            <button className='ButtonFCotiza' onClick={() => setLevel(level - 1)}>Anterior</button>
            <button className='ButtonFCotiza' onClick={Submit}>Siguiente</button>
        </div>
    );
}
export default FormDatosCliente;