import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GetCotizacion } from "../../../../apis/peticiones";
import './FormEnergia.css'
import { selectPorcentaje } from "../../../../App/CounterSlice";

const FormEnergia = ({ level, setLevel, dispatch, state}) => {
    //Alerts

    const porcentaje = useSelector(selectPorcentaje);
    const [Consumo, setConsumo] = useState(true);


    const [periodo, setPeriodo] = useState(false);
    const [Tarifa, setTarifa] = useState(false);
    const [AlertConsumo, setAlertConsumo] = useState(false);



    useEffect(() => {
        if (state.Tarifa === 'rateGdmto' || state.Tarifa === 'rateGdmth') {
            setConsumo(false);
        }
        else {
            setConsumo(true);
        }
    }, [state.Tarifa]);


    const Submit = () => {
        let Next = true;
        if (!state.periodo) {
            setPeriodo(true);
            Next = false;
        }
        if(!state.Tarifa){
            setTarifa(true);
            Next = false;
        }
        if(Consumo){
            if(!state.KWconsumidos){
                setAlertConsumo(true);
                Next = false;
            }
        }
        if(Next){
            setLevel(level + 1);
        }
    }

    //Periodo
    const ChangePeriodo = ({ target }) => {
        dispatch({ type: 'SET_PERIODO', payload: target.value });
        setPeriodo(false);
    }

    //Tarifa
    const ChangeTarifa = ({target}) => {
        dispatch({ type: 'SET_TARIFA', payload: target.value });
        setTarifa(false);
    }

    //Consumo
    const ChangeConsumo = ({target}) => {
        dispatch({ type: 'SET_KW', payload: target.value });
        setAlertConsumo(false);
    }

    return (
        <div className='WrapperFormEnergia'>

            <label className='LabelFCoti2' >Periodo:</label>
            <div className='InputFCoti'>
                <select className='' name="" id="" form="" onChange={ChangePeriodo} value={state.periodo}>
                    <option value="" disabled selected id='no-select'>Tipo de periodo</option>
                    <option value='0'>Mensual</option>
                    <option value='1'>Bimestral</option>
                </select>
            </div >
            {periodo ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>) : undefined}
            <label className='LabelFCoti2' >Tarifa:</label>
            <div className='InputFCoti'>
                <select className='' name="" id="" form="" value={state.Tarifa} onChange={ChangeTarifa}>
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
            {Tarifa ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>) : undefined}
            {
                Consumo ? (
                    <>
                        <label className='LabelFCoti2' >Consumo de Kilowatts:</label>
                        <div className='InputFCotiNum1'>
                            <input className='' placeholder='0' type="number" id="KW" name="" onChange={ChangeConsumo} />
                        </div>
                        {AlertConsumo ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>) : undefined}
                    </>
                ) : undefined
            }
            <button className='ButtonFCotiza' onClick={() => {
                dispatch({ type: 'SET_TARIFA', payload: undefined });
                dispatch({ type: 'SET_ESTADO', payload: undefined });
                dispatch({ type: 'SET_MUNICIPIO', payload: undefined });
                setLevel(level - 1)}}>Anterior</button>
            <button className='ButtonFCotiza' onClick={Submit}>Siguiente</button>
        </div>
    );
}
export default FormEnergia;