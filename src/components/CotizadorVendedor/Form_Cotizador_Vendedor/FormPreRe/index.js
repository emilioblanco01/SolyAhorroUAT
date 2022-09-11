import React, {useState, useEffect} from "react";
import { GetMunicipio, capacidades, ListMarcas, ListInv } from "../../../../apis/peticiones";

const estados = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Coahuila',
    'Ciudad de México',
    'Colima',
    'Chiapas',
    'Chihuahua',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Estado de México',
    'Morelos',
    'Michoacán',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosi',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas',
]


const FormPreRe = ({ level, setLevel, dispatch, state, Perfil }) => {

    const [TipoConstruccion, setTipoConstruccion] = useState(false);
    const [Estado, setEstado] = useState(false);
    const [Municipio, setMunicipio] = useState(false);   

    const handleSubmit = async () => {
        let Next = true;
        if(!state.TipoConstruccion){
            setTipoConstruccion(true);
            Next = false;
        }
        if(!state.estado){
            setEstado(true);
            Next = false;
        }
        if(!state.municipio){
            setMunicipio(true);
            Next = false
        }
        if(Next){
            const listPanels = await capacidades();
            const listMarcas = await ListMarcas();
            const listInv = await ListInv();
            dispatch({ type: 'SET_CAPACIDADES', payload: listPanels });
            dispatch({ type: 'SET_LISTMARCAS', payload: listMarcas });
            dispatch({ type: 'SET_LISTINVERSORES', payload: listInv });
            if (state.TipoConstruccion === 'BombeoSolar') {
                Perfil? setLevel(10): setLevel(7);
            }
            else {
                setLevel(level + 1);
            }
        }
    }

    //TipoConstruccion
    const ChangeTipoConstruccion = ({target}) => {
        setTipoConstruccion(false);
        dispatch({ type: 'SET_TIPO_CONSTRUCCION', payload: target.value })
    }

    //Estado
    const ChangeEstado = async ({ target }) => {
        setEstado(false);
        dispatch({ type: 'SET_ESTADO', payload: target.value });
        const municipios = await GetMunicipio({ Estado: target.value })
        dispatch({ type: 'SET_MUNICIPIOS', payload: municipios })
    }

    //Municipio
    const ChangeMunicipio = ({target}) => {
        setMunicipio(false);
        dispatch({ type: 'SET_MUNICIPIO', payload: target.value })
    }

    return (
        (
            <div className='WrapperFormPreRe'>
                <label className='LabelFCoti2'>Quiero Cotizar Para:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={ChangeTipoConstruccion} value={state.TipoConstruccion}>
                        <option value="" disabled selected id='no-select' >Tipo de construccion</option>
                        <option value='Casa'>Casa</option>
                        <option value='Negocio'>Negocio</option>
                        <option value='Industria'>Industria</option>
                    </select>
                </div >

                {TipoConstruccion ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>): undefined}

                <label className='SubtitleFCoti'>Ubicacion</label>
                <label className='LabelFCoti2' >Estado:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" value={state.estado} onChange={ChangeEstado}>
                        <option value="" disabled selected>Estado</option>
                        {estados.map(estado => (<option value={estado} key={estado}>{estado}</option>))}
                    </select>
                </div>

                {Estado ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>): undefined}

                <label className='LabelFCoti2' >Municipio:</label>
                <div className='InputFCoti'>
                    <select className='' name="" id="" form="" onChange={ChangeMunicipio} value={state.municipio}>
                        <option value="" disabled selected>Municipio</option>
                        {state.municipios.map(municipios => (<option value={municipios} key={municipios}>{municipios}</option>))}
                    </select>
                </div >

                {Municipio ? (<label className='LabelAlert'>Se requiere este campo para continuar</label>): undefined}

                <button className='ButtonFCotiza' onClick={handleSubmit}>Siguiente</button>
            </div>
        )
    )
}

export default FormPreRe;