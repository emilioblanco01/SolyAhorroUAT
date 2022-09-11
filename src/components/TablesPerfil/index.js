import React from "react";
import './TablesPerfil.css'
import { TablePerfil } from "./TablePerfil";
import { selectCotizaciones } from "../../App/CounterSlice";
import { useSelector } from "react-redux";



const TablesPerfil = () => {

    const Cotizaciones = useSelector(selectCotizaciones);
    return (
        <div className='WrapperDashA'>
    
            <TablePerfil clientes={Cotizaciones} title={'Cotizaciones'} />
    
        </div>
    );
}

export default TablesPerfil;