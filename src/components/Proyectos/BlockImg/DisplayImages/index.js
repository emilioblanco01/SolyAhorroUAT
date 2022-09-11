import React, {Component} from 'react';
import { useState, useEffect, useRef } from "react";
import "./DisplayImages.css";


import arrayImgs from '../arrayImg'
import { useProyectos } from '../../../../hooks/useProyectos'


const DisplayImages = (props) => {

    const { tipo, setTipo, imgNum, setImgNum, Cambio} = useProyectos();

    function Mas(){
        if(arrayImgs[props.objImg].length-1 == imgNum){
            setImgNum(0)
        }else{
            setImgNum(imgNum +1)
        } 
    }
    function Menos(){
        if(imgNum == 0){
            setImgNum(arrayImgs[props.objImg].length-1)
        }else{
            setImgNum(imgNum -1)
        } 
    }

    return(
        <div className={`DisplayImages${tipo}`}>
            <div className='DIContainerclose'>
                <button className='DIClose' onClick={()=>Cambio()}> 
                    <i className="fas fa-times"></i> 
                </button>
            </div>
            <div className='DIContainerImage'> 
                <button className='DIArrow' onClick={()=> Menos()}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className='DICimage'>
                    <img className='DIimage' src={arrayImgs[props.objImg][imgNum]} alt= 'image'/>
                    <p className='DIText'>Residencial Tarifa: Tarifa 1 - DAC</p>
                </div>
                <button className='DIArrow' onClick={()=> Mas()}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}
export default DisplayImages;