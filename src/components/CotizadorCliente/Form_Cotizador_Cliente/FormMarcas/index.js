import React from 'react';
import { GetCotizacion } from '../../../../apis/peticiones';
import { useSelector } from 'react-redux';
import { selectPorcentaje } from '../../../../App/CounterSlice';


const FormMarcas = ({ level, setLevel, dispatch, state }) => {

    const porcentaje = useSelector(selectPorcentaje);
    const handleSubmit = async () => {
        if (state.TipoConstruccion === 'BombeoSolar') {
            setLevel(7);
        }
        else {
            let result = {};
            if (state.Tarifa === 'rateGdmto' || state.Tarifa === 'rateGdmth') {
                setLevel(level + 1);
            }
            else {
                if (state.recibo) {
                    result = await GetCotizacion({
                        state,
                        periodo: state.periodo,
                        EstadoMunicipio: state.Tarifa === 'ratePdbt' ? state.municipio : state.estado,
                        Consumidos: state.KWconsumidos,
                        TipoTarifa: state.Tarifa,
                        porcentaje: porcentaje,
                        Estado: state.estado,
                        Municipio: state.municipio
                    })
                }
                else {
                    const Tarifa = state.TipoConstruccion.toLowerCase() === 'casa' ?
                        parseInt(state.gastos) <= 1500 ?
                            'rate01Price' :
                            "rateDacPrice" :
                        'ratePdbtPrice';
                    result = await GetCotizacion({
                        state,
                        periodo: state.periodo,
                        EstadoMunicipio: Tarifa === 'ratePdbtPrice' ? state.municipio : state.estado,
                        Consumidos: state.gastos,
                        TipoTarifa: Tarifa,
                        Price: true,
                        porcentaje, porcentaje,
                        Estado: state.estado,
                        Municipio: state.municipio
                    })
                    dispatch({ type: 'SET_TARIFA', payload: Tarifa });
                }
                dispatch({ type: 'SET_PRECIO_FINAL', payload: result.CostoEquipo });
                dispatch({ type: 'SET_RESULTADO', payload: result })
                setLevel(level + 1);
            }
        }
    }

    return (
        (
            <div className='WrapperFormPreRe'>
                <label className='SubtitleFCoti' for="">Datos del sistema :</label>
                <label className='LabelFCoti2'>Capacidad panel:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={({ target }) => dispatch({ type: 'SET_PANEL', payload: target.value })}>
                        <option value="" disabled selected id='no-select' >Capacidad panel</option>
                        <option value={335}>335 W</option>
                        <option value={340}>340 W</option>
                        <option value={370}>370 W</option>
                        <option value={375}>375 W</option>
                        <option value={380}>380 W</option>
                        <option value={400}>405 W</option>
                        <option value={410}>410 W</option>
                        <option value={440}>440 W</option>
                        <option value={445}>445 W</option>
                        <option value={450}>450 W</option>
                        <option value={530}>530 W</option>
                        <option value={540}>540 W</option>
                    </select>
                </div >
                <label className='SubtitleFCoti' for="">Marcas :</label>
                <label className='LabelFCoti2' for="">Marca Panel Solar:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={({ target }) => dispatch({ type: 'SET_MARCA_PANEL', payload: target.value })}>
                        <option value="" disabled selected id='no-select'>Marca Panel</option>
                        <option value='amerisolar'>Amerisolar</option>
                        <option value='astroenergy'>Astronergy</option>
                        <option value='leapton'>Leapton Solar</option>
                        <option value='et solar'>ET Solar</option>
                        <option value='ja solar'>JA Solar</option>
                        <option value='znshine'>ZnShine</option>
                        <option value='seraphim'>Seraphim</option>
                    </select>
                </div >
                <label className='LabelFCoti2' for="">Marca Inversor:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={({ target }) => dispatch({ type: 'SET_MARCA_INVERSOR', payload: target.value })}>
                        <option value="" disabled selected id='no-select'>Marca inversor</option>
                        <option value='growatt'>Growatt</option>
                        <option value='connera'>Connera</option>
                        <option value='sma'>SMA</option>
                        <option value='fronius'>Fronius</option>
                        <option value='solis'>Solis</option>
                        <option value='Microinversor'>Microinversor</option>
                    </select>
                </div >
                <button className='ButtonFCotiza' onClick={() => setLevel(level - 1)}>Anterior</button>
                <button className='ButtonFCotiza' onClick={handleSubmit}>Siguiente</button>
            </div>
        )
    )
}

export default FormMarcas
