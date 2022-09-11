import React from "react";

import  './BlockText2.css'

const BlockText2 = (props) => (
    <div className='BlockTextIF2'>
        <p className='BlockTtiletIF'>{props.title}</p>
        <p className='BlockText1IF'>{props.paragraph1}</p>
        <p className='BlockText2IF'>{props.paragraph2}</p>
    </div>
);

export default BlockText2;