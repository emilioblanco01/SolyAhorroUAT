import React from "react";

//Components
import BannerOptions from "./BannerOptions";
import BannerBenifi from "./BannerBenifi";
import Empresa from "./Empresa";


const Nosotros = () => {
    return (
        <div style={{position:'relative', zIndex:1 }}>
            <Empresa/>
            <BannerBenifi/>
            <BannerOptions/>
            <div style={{height:'40px', backgroundColor:'#fff'}}></div>
        </div>
    );
}

export default Nosotros;