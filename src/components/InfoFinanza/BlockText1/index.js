import React from "react";

import  './BlockText1.css'

const BlockText1 = (props) => (
    <div data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="200"
        data-aos-easing="linear"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className='BlockTextIF'>
        <p className='BlockTtiletIF'>{props.title}</p>
        <p className='BlockText1IF'>{props.paragraph1}</p>
        <p className='BlockText2IF'>{props.paragraph2}</p>
    </div>
);

export default BlockText1;