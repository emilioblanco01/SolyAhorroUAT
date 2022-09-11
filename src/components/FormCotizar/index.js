import React,{useState, useEffect} from "react";
import emailjs from 'emailjs-com';

import  './FormCotizar.css'

const FormCotizar = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [tarifa, setTarifa] = useState('');
    const [comment, setComment] = useState('');
    const [claseB, setClaseB] = useState('ButtonFC');

    const sendEmail = (e) => {
        e.preventDefault();
        if(claseB === 'ButtonFCAct'){
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                setClaseB('ButtonFC');
                setName('');
                setPhone('');
                setEmail('');
                setTarifa('');
                setComment('');
            }, (error) => {
            });
            e.target.reset()
        }
    };

    useEffect(()=>{
        if(name!=='' & phone!=='' & email!=='' & tarifa!=='' & comment!==''){
            setClaseB('ButtonFCAct')
        }else{
            setClaseB('ButtonFC')
        }
    }, [name ,phone, email, tarifa, comment]);


    return(
        <div className='WrapperFormCotiza1'>
        <div className='WrapperFormCotiza2'>
            <div className='FormularioFC'>
                
                <p className='FormTitleFC'> Solicita una cotización</p>
                <form className='FormFC' action="https://formsapi.jabwn.com/key/B3AQShEN00DPxvejzxo3" method="post">
                    <input type="text" name="_kitemt" value="" style={{display:"none"}}/>
                    <input type="text" name="_honey" value="" style={{display:"none"}}/>
                    <input type="hidden" name="_confirmation" value="Gracias! Estaremos en contacto con usted lo antes posible."/>
                    <input type="hidden" name="_subject" value="Solicitud de cotización" />
                    
                    <input className='InputFC1' onBlur={e => setName(e.target.value)} id="name" type="text" name="name" placeholder='Nombre completo'/>
                    <input className='InputFC2' onBlur={e => setPhone(e.target.value)} id="phone" type="text" name="phone" placeholder='Numero de teléfono'/>
                    <input className='InputFC2' onBlur={e => setEmail(e.target.value)} id="email" type="email" name="email" placeholder='Correo electronico'/>
                    <select className='InputFC1' onBlur={e => setTarifa(e.target.value)} id="tarifa" name="tarifa" >
                        <option value="" disabled selected hidden>Tarifa promedioo de pago de luz</option>
                        <option value="1"> Menos de $1,000 mensuales </option>
                        <option value="2">$3,000 a $10,000 mensuales </option>
                        <option value="3"> $10,000 a $50,000 mensuales </option>
                        <option value="4"> Más de $50,000 mensuales </option>
                    </select>
                    <input className='InputFC1' onBlur={e => setComment(e.target.value)} id="comment" name="comment" placeholder='Mensaje'/>
                    <input type="hidden" name="_after" value="http://localhost:3001/contacto"/>
                    <button className={claseB} id='ButtonFC' type='submit'>Enviar mensaje</button>   
                </form>
            </div>
            <div className='ContactFC'>
                <p className='TitleContactFC'>Contáctanos</p>
                <div className='TextContactFC'>
                    <div className='IconContactFC'> <i className="fas fa-phone"></i> </div>
                    <p className='Text1ContactFC'>Whatsapp:</p>
                    <p className='Text2ContactFC'>378 885 38 50</p>
                </div>
                <div className='TextContactFC'>
                    <div className='IconContactFC'> <i class="fas fa-paper-plane"></i> </div>
                    <p className='Text1ContactFC'>Correo:</p>
                    <p className='Text2ContactFC'>ventas@solyahorro.com</p>
                </div>
                <div className='TextContactFC'>
                    <div className='IconContactFC'> <i class="fab fa-facebook-f"></i> </div>
                    <p className='Text1ContactFC'>Facebook</p>
                    <p className='Text2ContactFC'>facebook.com/solyahorro_</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default FormCotizar;