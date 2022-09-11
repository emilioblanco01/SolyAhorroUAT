import React, {useEffect} from "react";

//Components
import MainBanner from './MainBanner';
import BannerSomos from './BannerSomos';
import BannerOptions from "./BannerOptions";
import BannerGarantia from "./BannerGarantia";
import Proyectos from "./Proyectos";
import BannerFinan from "./BannerFinan";
import BannerParteDe from "./BannerParteDe";
import BannerDistri from "./BannerDistri";
import BannerSistemas from "./BannerSistemas";
import BannerBenifi from "./BannerBenifi";
import BannerCertifica from "./BannerCertifica";

const Inicio = () => (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <MainBanner />
            <BannerBenifi />
            <BannerSomos />
            <BannerOptions />
            <BannerGarantia />
            <div id='ProyectosInicio'></div>
            <Proyectos />
            <BannerSistemas />
            <BannerFinan />
            <BannerCertifica />
            <BannerParteDe />
            <BannerDistri />
        </div>
    )


export default Inicio;