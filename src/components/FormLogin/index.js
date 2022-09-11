import React, { useState, useEffect } from "react";
import './FormLogin.css';
import { login } from "../../apis/peticiones";
import { useHistory } from "react-router-dom";
import {
    changeNombre,
    changeApellido,
    changeCorreo,
    changeTelefono,
    changeFechaNacimiento,
    changePerfil,
    changeCotizaciones,
    changePorcentaje,
    changeVendedorID
} from '../../App/CounterSlice';
import { useDispatch } from 'react-redux';

const FormLogin = () => {
    const storageData = window.localStorage;
    const history = useHistory();
    const dispatch = useDispatch();
    const [Data, setData] = useState({});
    const [passVisible, setPassVisible] = useState(false);
    const [perfil, setPerfil] = useState(false);
    // const Nombre = useSelector(selectNombre);

    const handleChangePasswordV = (value) => {
        if (value) {
            setPassVisible(false);
        } else {
            setPassVisible(true);
        }
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(Data);
        if (result.resultLogin === undefined) {
            
            const datos = result[0].login;
            const Cotizaciones = result[0].cotizaciones;

            storageData.setItem('DataLogin', Data.password)
            storageData.setItem('DataUser', JSON.stringify(datos));
            storageData.setItem('CotizacionesUser', JSON.stringify(Cotizaciones));
            storageData.setItem('Perfil', datos.resultLogin);
            storageData.setItem('Ingreso', 'true');
            dispatch(changeNombre(datos.nameUser));
            dispatch(changeApellido(datos.lastNameUser));
            dispatch(changeCorreo(datos.emailUser));
            dispatch(changePerfil(datos.resultLogin));
            dispatch(changeTelefono(datos.cellphoneNumber));
            dispatch(changeFechaNacimiento(datos.birthdateUser));
            dispatch(changePorcentaje(datos.porcentaje));
            dispatch(changeVendedorID(datos.id));
            dispatch(changeCotizaciones(Cotizaciones));
            history.push('/perfil');
        }
        else {
            setPerfil(true);
        }
    }

    const HandleChange = ({ target }) => setData({ ...Data, [target.name]: target.value })

    return (
        <div className='WrapperFormLogin'>
            <p className='TitleFLogin'>Inicia Sesión</p>
            <form className='FormLogin' onSubmit={HandleSubmit}>
                <div className='ContainerFLogin'>
                    <label className='LabelFLogin'>
                        <i className="far fa-envelope"></i>
                        <span className='SubLabelFLogin'>Correo</span>
                    </label>
                    <input className='InputFLogin' placeholder='ejemplo@gmail.com' type='email' required name="user" onChange={HandleChange} />
                    <label className='LabelFLogin'>
                        <i className="fas fa-lock"></i>
                        <span className='SubLabelFLogin'>Contraseña</span>
                    </label>
                    <div className="ContePassword">
                        <input className='InputFLoginPass' placeholder='*******' type="password" required name="password" onChange={HandleChange} />
                    </div>
                    { perfil? (
                    <label className='LabelFLogin'>
                        <span className='SubLabelFLogin'>No coincide con ninguna cuenta</span>
                    </label>): undefined}
                </div>
                <button className='ButtonFLogin' onClick={() => HandleSubmit}>Siguiente</button>

            </form>

        </div>
    )
}

export default FormLogin;