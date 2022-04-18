
import React from 'react'
import Modal from 'react-modal';
import './success.css';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Success=({ModalOpen,setModalOpen}) =>{
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'rgb(210, 230, 240)' ,
          boxShadow:' 2px 2px 1px 2px',
          borderRadius: '15px',
        },
      };
        return (
     <Modal isOpen={ModalOpen} style={customStyles}>
        <div className='modal-inner'>
            <label>Expense Added Successfully</label>
            <img src={require('../../img/clipart.png')} alt='Expenses Added' className='added-img' />
            <Link to='/' style={{ textDecoration: 'none', color: "black" }}>
            <div className='back-home'>
                <HomeIcon className='bck-hm'/>Home
            </div>
            </Link>
            
        </div>
    </Modal>
        )
  
}

export default Success