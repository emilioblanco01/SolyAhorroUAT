import React, { useEffect } from 'react';
//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Perfil from './components/Perfil';
import ProyectosP from './components/ProyectosP';
import Contacto from './components/Contacto';
import Login from './components/Login';
import Financiamiento from './components/Financiamiento';
import LogOut from './components/LogOut';
//Styles
import { GlobalStyle } from './GlobalStyle';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import 'normalize.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import CotizadorCliente from './components/CotizadorCliente';
import CotizadorVendedor from './components/CotizadorVendedor';



function App() {

  useEffect(() => AOS.init())
  const history = useHistory();

  const location = useLocation()


  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className='GapHeader'></div>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/proyectos" component={ProyectosP} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/financiamiento" component={Financiamiento} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path='/Cotizador' component={CotizadorCliente} />
        <Route exact path='/CotizadorVendedor' component={CotizadorVendedor} />
        <Route exact path='/LogOut' component={LogOut} />
      </Switch>
      <Footer />
    </div>
  );
}


export default App;
