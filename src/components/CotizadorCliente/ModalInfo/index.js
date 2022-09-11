import React from 'react';
//import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Modal, Paper, Box, Button, Typography } from '@mui/material';
import './modalInfo.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const index = ({open, close, img, label}) => {
  return (
    <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {label}
          </Typography>
          <img src={img} alt='Informacion ejemplo' className='imgInfo'/>
        </Box>
      </Modal>
  )
}

export default index

// <Modal isOpen={modal} size="lg" style={{ maxWidth: '1600px', width: '80%' }}>