import React, { useState, useReducer } from "react";
import './FormsCotiza.css'

import FormPreRe from './FormPreRe';
import FormEnergia from './FormEnergia';
import FormPreCoti from './FormPreCoti';
import FormFinan from './FormFinan';
import FormContact from './FormContact';
import BannerFinCoti from './BannerFinCoti';
import FormBombeo from "./FormBombeo";
import FormMarcas from "./FormMarcas";
import FormDatosCliente from "./FormDatosCliente";
import FormPaneles from "./Form_";

import ModalInfo from '../ModalInfo/index';


import { useSelector } from "react-redux";
import { selectPerfil, selectNombre, selectApellido, selectTelefono, selectCorreo, selectPorcentaje, selectVendedorID } from "../../../App/CounterSlice";

const FormsCotiza = () => {

    const Perfil = useSelector(selectPerfil);
    const VendedorID = useSelector(selectVendedorID);
    const Nombre = useSelector(selectNombre);
    const Apellido = useSelector(selectApellido);
    const Telefono = useSelector(selectTelefono);
    const Correo = useSelector(selectCorreo);
    const Porcentaje = useSelector(selectPorcentaje)

    const [level, setLevel] = useState(1);

    const initialState = {
        esCliente: 1,
        estados: [
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
        ],
        municipios: [],
        Resultado: { resultado: '' },
        Tarifa: '',
        //Enganche
        Enganche: 0.0,
        Financiamiento: [],
        Plazo: 12,
        //Datos Instalador
        VendedorID: 0,
        NombreInstalador: 'ventas@solyahorro.com',
        ApellidoInstalador: '',
        TelefonoInstalador: '378 885 3850',
        CorreoInstalador: 'ventas@solyahorro.com',
        //Marcas
        MarcaPanel: 'Amerisolar',
        MarcaInversor: 'Growatt',
       
        PrecioFinal: 0,
        PanelCap: 540,
        Porcentaje: Porcentaje,
        recibo: true,
        tasa: 17,
        contado: 0,
        numeroServicio: '1'
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_ESTADO':
                return { ...state, estado: action.payload };
            case 'SET_MUNICIPIOS':
                return { ...state, municipios: action.payload };
            case 'SET_GASTOS':
                return { ...state, gastos: action.payload };
            case 'SET_PERIODO':
                return { ...state, periodo: action.payload };
            case 'SET_KW':
                return { ...state, KWconsumidos: action.payload };
            case 'SET_MUNICIPIO':
                return { ...state, municipio: action.payload };
            case 'SET_RESULTADO':
                return { ...state, Resultado: action.payload };
            case 'SET_TIPO_CONSTRUCCION':
                return { ...state, TipoConstruccion: action.payload };
            case 'SET_NOMBRE':
                return { ...state, Nombre: action.payload };
            case 'SET_APELLIDO':
                return { ...state, Apellido: action.payload };
            case 'SET_CORREO':
                return { ...state, Correo: action.payload };
            case 'SET_TELEFONO':
                return { ...state, Telefono: action.payload };
            case 'SET_ENGANCHE':
                return { ...state, Enganche: action.payload };
            case 'SET_TARIFA':
                return { ...state, Tarifa: action.payload };
            case 'SET_FINANCIAMIENTO':
                return { ...state, Financiamiento: action.payload };
            case 'SET_PLAZO':
                return { ...state, Plazo: action.payload };
            case 'SET_MARCA_PANEL':
                return { ...state, MarcaPanel: action.payload };
            case 'SET_MARCA_INVERSOR':
                return { ...state, MarcaInversor: action.payload };
            case 'SET_PRECIO_FINAL':
                return { ...state, PrecioFinal: action.payload };
            case 'SET_TASA':
                return { ...state, tasa: action.payload };
            case 'SET_PANEL':
                return { ...state, PanelCap: action.payload };
            case 'SET_RECIBO':
                return { ...state, recibo: action.payload };
            case 'SET_TIPO_PAGO_INSTALADOR':
                const tipo = action.payload;
                return { ...state, contado: +tipo };
            case 'SET_CAPACIDAD_INVERSOR':
                const capacidadInversor = action.payload;
                return { ...state, InversorCap: +capacidadInversor };
            case 'SET_NUMERO_SERVICIO':
                return { ...state, numeroServicio: action.payload };
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const Change = ({ target }) => { dispatch({ type: `SET_${target.name}`, payload: target.value }) }

    function LookCotiForm(level, setLevel) {
        if (level == 1) {
            return <FormPreRe level={level} setLevel={setLevel} state={state} dispatch={dispatch} Change={Change} />;
        } else if (level === 2) {
            return <FormEnergia level={level} setLevel={setLevel} state={state} dispatch={dispatch} Perfil={Perfil} />;
        } else if (level === 3) {
            return <FormPreCoti level={level} setLevel={setLevel} state={state} dispatch={dispatch} Perfil={Perfil} />;
        } else if (level === 4) {
            return <FormFinan level={level} setLevel={setLevel} state={state} dispatch={dispatch} Perfil={Perfil} />;
        } else if (level === 5) {
            return <FormContact level={level} setLevel={setLevel} state={state} dispatch={dispatch} Change={Change} />;
        } else if (level === 6) {
            return <BannerFinCoti />;
        }
        else if (level === 7) {
            return <FormBombeo level={level} setLevel={setLevel} state={state} dispatch={dispatch} />;
        }

    }


    return (
        <>
            <div className='WrapperFormsCotiza'>
                <div className='FormsCotiza'>
                    <p className='FCotizaTitle'>Cotizador</p>
                    {LookCotiForm(level, setLevel)}
                </div>
                <div className='TimeLineCotizador'>
                    <p className='FCotiLineTitle'>Tu Informacion Solar</p>
                    <div className='ContainerTimeline'>
                        <div className='PointTLTrue'>
                            {level > 1 && <i className="fas fa-check"></i>}
                            <div className={`TitleTL${level == 1 ? 'Select' : ''}`}>Pre-Registro</div>
                        </div>
                        <div className={`LineTL${level > 1 ? 'True' : 'False'}`}></div>
                        <div className={`PointTL${level > 1 ? 'True' : 'False'}`}>
                            {level > 2 && <i className="fas fa-check"></i>}
                            <div className={`TitleTL${level == 2 ? 'Select' : ''}`}>Energia</div>
                        </div>
                        <div className={`LineTL${level > 2 ? 'True' : 'False'}`}></div>
                        <div className={`PointTL${level > 2 ? 'True' : 'False'}`}>
                            {level > 3 && <i className="fas fa-check"></i>}
                            <div className={`TitleTL${level == 3 ? 'Select' : ''}`}>Pre-Cotización</div>
                        </div>
                        <div className={`LineTL${level > 3 ? 'True' : 'False'}`}></div>
                        <div className={`PointTL${level > 3 ? 'True' : 'False'}`}>
                            {level > 4 && <i className="fas fa-check"></i>}
                            <div className={`TitleTL${level == 4 ? 'Select' : ''}`}>Financiamiento</div>
                        </div>
                        <div className={`LineTL${level > 4 ? 'True' : 'False'}`}></div>
                        <div className={`PointTL${level > 4 ? 'True' : 'False'}`}>
                            {level > 5 && <i className="fas fa-check"></i>}
                            <div className={`TitleTL${level == 5 ? 'Select' : ''}`}>Contacto</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FormsCotiza;