import React from 'react'
import './AuthFooter.css'

const AuthFooter = () => {
    return (
        <footer className="auth-footer">
            <div className="auth-footer-container">
                <div className="auth-footer-left">
                    <span>© 2025 yourapp.com</span>
                    <a href="/contact">Contact Us</a>
                </div>
                <div className="auth-footer-right">
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default AuthFooter

