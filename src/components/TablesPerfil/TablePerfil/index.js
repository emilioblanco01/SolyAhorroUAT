import React from 'react';
import { pdfQuote } from '../../../apis/peticiones';
import StarsIcon from '@mui/icons-material/Stars';
import Swal from 'sweetalert2'

export const TablePerfil = ({title, clientes }) => {

    const toDownload = async (id) => await pdfQuote(id);
    
    return (
        <div className="ConteDACitas" >
            <div className="DACitasRow">
                <p className="DACitasTitle">{title}:</p>
                <p className="DACitasNum">{ clientes.length }</p>        
            </div>
            <div className="DACitasConte">
            {
                clientes.map( ( cliente, index )=>(
                    <div className="DACita" key={index} onClick={async() => {
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'Se descargara este PDF',
                            showConfirmButton: false,
                            timer: 1500
                          });
                        await toDownload(cliente.id);
                        
                          
                    }}>
                        <StarsIcon/>
                        <div className="DACitaInfoB">
                            <p className="DACitaTitle">{`Folio:  00${cliente.id}`}</p>
                            <p className="DACitaText2">{cliente.name}</p>
                            <p className="DACitaText1">{cliente.address}</p> 
                            <p className="DACitaText1">{cliente.phone}</p> 
                        </div>
                        <div className="DACitaDate">
                            <p className="DACitaText2">{cliente.duedate}</p> 
                        </div>
                    </div>
                ))
            }

            {/* <dvi className="DACitasPages">
                <p className="DACitasPageSelect">1</p>
                <p className="DACitasPage">2</p>
                <p className="DACitasPage">3</p>
            </dvi> */}

            </div>

        </div>
    )
}
