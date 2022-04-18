import React from 'react';
import "./header.css";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GitHubIcon from '@mui/icons-material/GitHub';
const header = () => {
    return (
        <div className='Header-container'>
            <div className='header'>
                <div className='header-logo'>
                    Expenser <CreditCardIcon className='Icon'/>
                </div>
                <div className='header-button'>
                    <a className='header-btn' href='www.github.com' target="_blank">
                    <GitHubIcon className='btn-icon'/>Star
                    </a>

                </div>
            </div>
        </div>
    )
}

export default header