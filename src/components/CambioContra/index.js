import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import './CambioContra.css';
import Swal from "sweetalert2";
import { ChangePassword } from "../../apis/peticiones";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '0.5px solid #000',
    p: 4,
};

const CambioContra = (props) => {
    const [Data, setData] = useState({
        password: '',
        newPass_1: '',
        newPass_2: ''
    });
    const [Pass, setPass] = useState(false);
    const [AllData, setAllData] = useState(false);
    const [Passnew, setPassnew] = useState(false);
    const [PassLength, setPassLength] = useState(false);

    useEffect(() => {
        if (Data.newPass_1.length > 8) { setPassLength(false); }
        if (Data.newPass_1 === Data.newPass_2) { setPassnew(false); }
        if (Data.password !== undefined && Data.newPass_1 !== undefined && Data.newPass_2 !== undefined) { setAllData(false); }
    }, [Data])


    const validatelastPassword = async () => {
        let continuar = true;
        if (Data.newPass_1.length < 8) {
            continuar = false;
            setPassLength(true);
        }
        if (Data.newPass_1 !== Data.newPass_2) {
            continuar = false;
            setPassnew(true);
        }
        if (Data.password !== localStorage.getItem('DataLogin')) {
            continuar = false;
            setPass(true);
        }
        if (
            Data.password === undefined ||
            Data.newPass_1 === undefined ||
            Data.newPass_2 === undefined ||
            Data.password === '' ||
            Data.newPass_1 === '' ||
            Data.newPass_2 === '') {
            continuar = false;
            setAllData(true);
        }
        if (continuar) {
            const encodeLastPass = new Buffer(Data.password).toString('base64');
            const encondeNewPass = new Buffer(Data.newPass_1).toString('base64');
            await ChangePassword(encodeLastPass, encondeNewPass);
            setData({
                password: '',
                newPass_1: '',
                newPass_2: ''
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se actualizo tu contraseña',
                showConfirmButton: false,
                timer: 1500
            });
            props.handleClose();
        }
    }

    const HandleChange = ({ target }) => {
        if (target.name === "password") { setPass(false) }
        setData({ ...Data, [target.name]: target.value })
    }



    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="contentModal">
                <div className="FormCambioContra">
                    <label className='LabelCambioC' for="">Contraseña:</label>
                    <input className='InputCambioC' placeholder='*******' type="password" required name="password" onChange={HandleChange} />
                    {Pass ? <label className="alertChangePassword">* Favor de ingresar tu contraseña actual correctamente</label> : undefined}
                    <label className='LabelCambioC' for="">Nueva contraseña:</label>
                    <input className='InputCambioC' placeholder='*******' type="password" required name="newPass_1" onChange={HandleChange} />
                    {PassLength ? <label className="alertChangePassword">* La contraseña debe contener al menos 8 carácteres</label> : undefined}
                    <label className='LabelCambioC' for="">Confirma contraseña:</label>
                    <input className='InputCambioC' placeholder='*******' type="password" required name="newPass_2" onChange={HandleChange} />
                    {Passnew ? <label className="alertChangePassword">* Las contraseñas no coinciden</label> : undefined}
                    {AllData ? <label className="alertChangePassword">* Favor de introducir todos los datos</label> : undefined}
                    <button className='ButtonCambioC1' onClick={() => validatelastPassword()}>Cambiar</button>
                    <button className='ButtonCambioC2' onClick={props.handleClose}>Cancelar</button>
                </div>
            </Box>
        </Modal>
    );
}

export default CambioContra;

