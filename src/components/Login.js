import { findByLabelText } from "@testing-library/react";
import React from "react";

//Components
import BannerLogin from './BannerLogin';
import FormLogin from './FormLogin';

const Login = () => {
    return (
        <div style={{display: "flex", flexWrap:"wrap"}}>
            <FormLogin/>
            <BannerLogin/>
        </div>
    );
}

export default Login;