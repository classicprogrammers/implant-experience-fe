import React from 'react'
import './AuthHeader.css'
import logo from '../../assets/images/implant-logo.png';

const AuthHeader = () => {
    return (
        <header className="auth-header">
            <div className="auth-header-container">
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default AuthHeader;

