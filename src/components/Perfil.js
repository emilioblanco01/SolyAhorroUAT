import React, { useEffect } from "react";
import BannerPerfil from "./BannerPerfil";
import TablesPerfil from "./TablesPerfil";
import {
    changeNombre,
    changeApellido,
    changeCorreo,
    changeTelefono,
    changeFechaNacimiento,
    changePerfil,
    changeCotizaciones,
    changePorcentaje,
    changeVendedorID,
} from '../App/CounterSlice';
import { useDispatch } from 'react-redux';


const Perfil = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const DataStorage = JSON.parse(localStorage.getItem('DataUser'));
        const CotizacionesStorage = JSON.parse(localStorage.getItem('CotizacionesUser'));
        dispatch(changeNombre(DataStorage.nameUser));
        dispatch(changeApellido(DataStorage.lastNameUser));
        dispatch(changeCorreo(DataStorage.emailUser));
        dispatch(changePerfil(DataStorage.resultLogin));
        dispatch(changeTelefono(DataStorage.cellphoneNumber));
        dispatch(changeFechaNacimiento(DataStorage.birthdateUser));
        dispatch(changeCotizaciones(CotizacionesStorage));
        dispatch(changePorcentaje(DataStorage.porcentaje));
        dispatch(changeVendedorID(DataStorage.id));
    }, []);

    return (

        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <BannerPerfil />
            <TablesPerfil />
        </div>
    );
}
export default Perfil;