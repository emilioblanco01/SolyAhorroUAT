import React, { useState, useEffect } from 'react';

import LogoColor from '../../assets/images/logo.png';
import LogoWhite from '../../assets/images/logo-white.png';
import { useSelector } from 'react-redux';
import { selectPerfil } from '../../App/CounterSlice';
import { useHistory, useLocation } from 'react-router-dom';

import "./Header.css";
import { Link } from 'react-router-dom'

const Header = () => {
    const perfil = useSelector(selectPerfil);
    const Location = useLocation();
    const history = useHistory();

    const options = !perfil?[
        {
            title: 'Inicio',
            path: '/'
        },
        {
            title: 'Nosotros',
            path: '/nosotros'
        },
        {
            title: 'Proyectos',
            path: '/proyectos'
        },
        {
            title: 'Financiamientos',
            path: '/financiamiento'
        },
        {
            title: 'Contacto',
            path: '/contacto'
        },
        {
            title: 'Cotizador',
            path: '/Cotizador'
        },
        {
            title: 'Login',
            path: '/login'
        },
    ]:[
        {
            title: 'Inicio',
            path: '/'
        },
        {
            title: 'Nosotros',
            path: '/nosotros'
        },
        {
            title: 'Proyectos',
            path: '/proyectos'
        },
        {
            title: 'Financiamientos',
            path: '/financiamiento'
        },
        {
            title: 'Contacto',
            path: '/contacto'
        },
        {
            title: 'Cotizador',
            path: '/CotizadorVendedor'
        },
        {
            title: 'Perfil',
            path: '/perfil'
        },
        {
            title: 'Salir',
            path: '/LogOut'
        }
    ]
    

    const [showMenu, setshowMenu] = useState(false);
    const [selection, setselection] = useState(0);

    useEffect(() => {
        const result = options.filter( op => op.path === Location.pathname);
        setselection(options.indexOf(result[0]));
    }, [Location]);


    const changeSelection = (option) => {
        setselection(option);
        setshowMenu()
    }

    const changeShowMenu = () => setshowMenu(!showMenu);

    return (
        <div>
            <div className='WrapperHeader'>
                <div className='ContentLogoHeader'>
                    <img className='LogoImgHeader' id='HeaderLogoColor' src={LogoColor} alt='logo' onClick={() => history.push('/')}/>
                    <img className='LogoImgHeader' id='HeaderLogoBlank' src={LogoWhite} alt='logo' />
                </div>
                <div className='ContentMenuHeaderIcon'>
                    <button onClick={ changeShowMenu } className='ContentMenuHeaderIconMini' >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className='ContentMenuHeader'>
                    {
                        options.map((option, index) => {
                            return <Link className={`OptionHeader${index === selection ? 'Selected' : 'Normal'}`}
                                onClick={() => changeSelection(index)} key={option.title} to={option.path}>
                                {option.title}
                            </Link>
                        })
                    }
                </div>
            </div>
            {
                showMenu &&
                <div className='HeadeSecondMenu' id={`MenuIcon-show`}>
                    {
                        options.map((option, index) => {
                            return <Link className={`OptionHeaderMini${index === selection ? 'Selected' : 'Normal'}`}
                                onClick={() => changeSelection(index)} key={option.title} to={option.path}>
                                {option.title}
                            </Link>
                        })
                    }
                </div>
            }

        </div>

    )

}
export default Header;