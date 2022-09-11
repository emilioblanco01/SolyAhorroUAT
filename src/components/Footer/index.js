import React, { useState, useEffect } from "react";

import Logo from '../../assets/images/logo.png';
import './Footer.css'
import { useHistory, useLocation } from "react-router-dom";

const Footer = () => {
    const [location, setlocation] = useState('/');
    const history = useHistory();
    const Location = useLocation();

    useEffect(() => {
        setlocation(Location.pathname);
    }, [Location])


    const routing = (url) => window.location.href = url === 'face' ?
        'https://www.facebook.com/solyahorrosustentable' :
        url === 'insta' ?
            'https://www.instagram.com/solyahorro_/' :
            'https://wa.link/tuldwt'

    return (
        <div className={Location.pathname.indexOf("Cot") > 0 ? 'WrapperFooterCot' : 'WrapperFooter'}>
            <div className='TopFooter'>
                <div className='ContainerFooter1'>
                    <img className='LogoImgFooter' src={Logo} alt='logo' />
                    <div className='TitleFooter'>Síguenos</div>
                    <div className='ContainerRedesF'>
                        <div className='IconContactFo' onClick={() => routing('face')}> <i className="fab fa-facebook-f"></i> </div>
                        <div className='IconContactFo' onClick={() => routing('insta')}> <i className="fab fa-instagram"></i> </div>
                    </div>
                </div>
                <div className='ContainerFooter2'>
                    <div className='TitleFooter'>Menu</div>
                    <div className='TextFooter2' onClick={() => history.push('/')}>Inicio</div>
                    <div className='TextFooter2' onClick={() => history.push('/nosotros')}>Nosotros</div>
                    <div className='TextFooter2' onClick={() => history.push('/proyectos')}>Proyectos</div>
                    <div className='TextFooter2' onClick={() => history.push('/financiamiento')}>Financiamiento</div>
                    <div className='TextFooter2' onClick={() => history.push('/contacto')}>Contacto</div>
                </div>
                <div className='ContainerFooter3'>
                    <div className='TitleFooter'>Contacto</div>
                    <div className='TextFooter2'>
                        <i className="fas fa-envelope"></i>
                        <div className='TextFooter3'>ventas@solyahorro.com</div>
                    </div>
                    <div className='TextFooter2' onClick={() => routing('wats')}>
                        <i className="fab fa-whatsapp"></i>
                        <div className='TextFooter3'>378 885 38 50</div>
                    </div>
                </div>
            </div>
            <div className='BottomFooter'>
                <div className='TextFooter1'>2020 © Sol y Ahorro</div>
                <div className='TextFooter1'>Todos los derechos reservados. Aviso de privacidad</div>
            </div>
        </div>
    );
}

export default Footer;