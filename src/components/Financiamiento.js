import React from "react";

//Components
import InfoFinanza from "./InfoFinanza";
import BannerGarantia from "./BannerGarantia";
import FormCotizar from "./FormCotizar";

const Financiamiento = () => {
    return (
        <div style={{position:'relative', zIndex:1 }}>
            <InfoFinanza/>
            <BannerGarantia/>
            <FormCotizar/>
        </div>
    );
}

export default Financiamiento;