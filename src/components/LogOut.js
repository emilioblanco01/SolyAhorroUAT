import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { changePerfil } from '../App/CounterSlice';
import { useDispatch } from 'react-redux';

const LogOut = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        localStorage.setItem('Ingreso', 'false');
        dispatch(changePerfil(false));
        history.push('/')
    }, []);

    return ( <></>)

}

export default LogOut;