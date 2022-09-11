import React, { useState, useReducer, useEffect } from "react";
import { capacidades } from "../../../apis/peticiones";
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

import { useSelector } from "react-redux";
import { selectNombre, selectApellido, selectTelefono, selectCorreo, selectPorcentaje, selectVendedorID } from "../../../App/CounterSlice";

const FormsCotiza = () => {

    const Perfil = localStorage.getItem('Perfil');
    const VendedorID = useSelector(selectVendedorID);
    const Nombre = useSelector(selectNombre);
    const Apellido = useSelector(selectApellido);
    const Telefono = useSelector(selectTelefono);
    const Correo = useSelector(selectCorreo);
    const Porcentaje = useSelector(selectPorcentaje);
    const [Capacidades, setCapacidades] = useState();

    const [level, setLevel] = useState(1);

    useEffect(() => {
        capacidades();
    }, [])

    const initialState = {
        ListCapacidades: Capacidades,
        esCliente: 0,
        municipios: [],
        Resultado: { resultado: '' },
        Tarifa: '',
        //Enganche
        Enganche: 0.0,
        Financiamiento: [],
        Plazo: 12,
        //Datos Instalador
        VendedorID: VendedorID,
        Perfil: Perfil,
        NombreInstalador: Nombre,
        ApellidoInstalador: Apellido,
        TelefonoInstalador: Telefono,
        CorreoInstalador: Correo,
        Porcentaje: Porcentaje,
        //Marcas
        PrecioFinal: 0,
        recibo: true,
        tasa: 30.44,
        PreCot: true,
        //periodo
        periodo: undefined
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Reload':
                return {
                    ...state,
                    TipoConstruccion: undefined,
                    estado: undefined,
                    PanelCap: undefined,
                    MarcaPanel: undefined,
                    MarcaInv: undefined,
                    Nombre: undefined,
                    Apellido: undefined,
                    Correo: undefined,
                    Telefono: undefined,
                    Tarifa: '',
                    esCliente: 0,
                    municipio: undefined,
                    municipios: [],
                    Resultado: { resultado: '' },
                    Enganche: 0.0,
                    Financiamiento: [],
                    Plazo: 12,
                    //Marcas
                    PrecioFinal: 0,
                    recibo: true,
                    tasa: 30.44,
                    PreCot: true,
                    //periodo
                    periodo: undefined
                }
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
            case 'SET_CAPACIDADES':
                return { ...state, ListCapacidades: action.payload };
            case 'SET_LISTMARCAS':
                return { ...state, ListMarcas: action.payload };
            case 'SET_LISTINVERSORES':
                return { ...state, ListInversores: action.payload };
            case 'SET_TIPO_PAGO_INSTALADOR':
                const tipo = action.payload;
                return { ...state, contado: +tipo };
            case 'SET_CAPACIDAD_INVERSOR':
                const capacidadInversor = action.payload;
                return { ...state, InversorCap: +capacidadInversor };
            case 'SET_NUMERO_SERVICIO':
                return { ...state, numeroServicio: action.payload };
            case 'SET_CANTIDAD_PANEL':
                return { ...state, cantidadPaneles: action.payload };
            case 'SET_TARIFA_MEDIA':
                return { ...state, tarifaMedia: action.payload };
            case 'Update_Resultado':
                const updateResultado = {
                    ...state.Resultado,
                    gastoKwNuevo: action.payload.nuevaGeneracion,
                    costoEquipo: action.payload.nuevoCosto,
                    subtotal: action.payload.nuevoSubtotal,
                    cantidadPaneles: +state.cantidadPaneles,
                    gastoLuzNuevo: action.payload.nuevoRecibo
                }

                return { ...state, Resultado: updateResultado }
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    function LookCotiForm(level, setLevel) {
        if (level == 1) {
            return <FormPreRe level={level} setLevel={setLevel} state={state} dispatch={dispatch} Perfil={Perfil} />;
        } else if (level === 2) {
            return <FormEnergia level={level} setLevel={setLevel} state={state} dispatch={dispatch} Perfil={Perfil} />;
        } else if (level === 3) {
            return <FormMarcas level={level} setLevel={setLevel} state={state} dispatch={dispatch} />;
        } else if (level === 4) {
            return <FormDatosCliente level={level} setLevel={setLevel} state={state} dispatch={dispatch} />;
        } else if (level === 5) {
            return <FormPaneles level={level} setLevel={setLevel} state={state} dispatch={dispatch} />;
        } else if (level === 6) {
            return <FormPreCoti level={level} setLevel={setLevel} state={state} dispatch={dispatch} Perfil={Perfil} />;
        } else if (level === 7) {
            return <FormFinan level={level} setLevel={setLevel} state={state} dispatch={dispatch} Perfil={Perfil} />;
        }
        else if (level === 8) {
            return <FormContact level={level} setLevel={setLevel} state={state} dispatch={dispatch} />;
        } else if (level === 9) {
            return <BannerFinCoti Content={false} setLevel={setLevel} dispatch={dispatch}/>;
        }
        else if (level === 10) {
            return <FormBombeo level={level} setLevel={setLevel} state={state} dispatch={dispatch} />;
        }
    }


    return (
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
                    {
                        state.Tarifa === 'rateGdmto' || state.Tarifa === 'rateGdmth' ? (
                            <>
                                <div className={`LineTL${level > 2 ? 'True' : 'False'}`}></div>
                                <div className={`PointTL${level > 2 ? 'True' : 'False'}`}>
                                    {level > 3 && <i className="fas fa-check"></i>}
                                    <div className={`TitleTL${level == 3 ? 'Select' : ''}`}>Consumo Cliente</div>
                                </div>
                                <div className={`LineTL${level > 2 ? 'True' : 'False'}`}></div>
                                <div className={`PointTL${level > 2 ? 'True' : 'False'}`}>
                                    {level > 3 && <i className="fas fa-check"></i>}
                                    <div className={`TitleTL${level == 3 ? 'Select' : ''}`}>Marcas</div>
                                </div>
                                <div className={`LineTL${level > 3 ? 'True' : 'False'}`}></div>
                                <div className={`PointTL${level > 3 ? 'True' : 'False'}`}>
                                    {level > 4 && <i className="fas fa-check"></i>}
                                    <div className={`TitleTL${level == 4 ? 'Select' : ''}`}>Datos del sistema</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={`LineTL${level > 2 ? 'True' : 'False'}`}></div>
                                <div className={`PointTL${level > 2 ? 'True' : 'False'}`}>
                                    {level > 3 && <i className="fas fa-check"></i>}
                                    <div className={`TitleTL${level == 3 ? 'Select' : ''}`}>Datos del sistema</div>
                                </div>
                                <div className={`LineTL${level > 3 ? 'True' : 'False'}`}></div>
                                <div className={`PointTL${level > 3 ? 'True' : 'False'}`}>
                                    {level > 4 && <i className="fas fa-check"></i>}
                                    <div className={`TitleTL${level == 4 ? 'Select' : ''}`}>Marcas</div>
                                </div>
                            </>
                        )
                    }
                    <div className={`LineTL${level > 5 ? 'True' : 'False'}`}></div>
                    <div className={`PointTL${level > 5 ? 'True' : 'False'}`}>
                        {level > 6 && <i className="fas fa-check"></i>}
                        <div className={`TitleTL${level == 6 ? 'Select' : ''}`}>Pre-Cotización {state.periodo !== undefined ? +state.periodo === 0 ? '(Mensual)' : '(Bimestral)' : undefined}</div>
                    </div>
                    <div className={`LineTL${level > 6 ? 'True' : 'False'}`}></div>
                    <div className={`PointTL${level > 6 ? 'True' : 'False'}`}>
                        {level > 7 && <i className="fas fa-check"></i>}
                        <div className={`TitleTL${level == 7 ? 'Select' : ''}`}>Financiamiento</div>
                    </div>
                    <div className={`LineTL${level > 7 ? 'True' : 'False'}`}></div>
                    <div className={`PointTL${level > 7 ? 'True' : 'False'}`}>
                        {level > 8 && <i className="fas fa-check"></i>}
                        <div className={`TitleTL${level == 8 ? 'Select' : ''}`}>Contacto</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FormsCotiza;