import React, { useState} from 'react';
import "./BlockImg.css";


import arrayImgs from './arrayImg'

const BlockImg = (props) => {

    const [displayBP, setDisplayBP] = useState('False');
    const [imgNum, setImgNum] = useState(0);

    function Mas(){
        if(arrayImgs[props.image].length-1 === imgNum){
            setImgNum(0)
        }else{
            setImgNum(imgNum +1)
        } 
    }
    function Menos(){
        if(imgNum === 0){
            setImgNum(arrayImgs[props.image].length-1)
        }else{
            setImgNum(imgNum -1)
        } 
    }

    return(
        <div className='ImageBlock'>
            <img className='ImagePro' src={arrayImgs[props.image][0]} alt='comercio'/>
            <button className='TextContainer' onClick={()=>setDisplayBP('True')}>
                <p className='TextTitle'>{props.title}</p>
                <p className='TextDesc'>{props.description}</p>
            </button>
            {/* <DisplayImages objImg={props.image}/> */}

            <div className={`DisplayImages${displayBP}`}>
            <div className='DIContainerclose'>
                <button className='DIClose' onClick={()=>setDisplayBP('False')}> 
                    <i className="fas fa-times"></i> 
                </button>
            </div>
            <div className='DIContainerImage'> 
                <button className='DIArrow' onClick={()=> Menos()}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className='DICimage'>
                    <img className='DIimage' src={arrayImgs[props.image][imgNum]} alt= 'image_example'/>
                    <p className='DIText'>Residencial Tarifa: Tarifa 1 - DAC</p>
                </div>
                <button className='DIArrow' onClick={()=> Mas()}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
           
            
        </div>
    );
}

export default BlockImg;