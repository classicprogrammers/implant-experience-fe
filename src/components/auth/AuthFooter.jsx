import React from 'react'
import './AuthFooter.css'

const AuthFooter = () => {
    return (
        <footer className="auth-footer">
            <div className="auth-footer-container">
                <div className="auth-footer-left">
                    <span>© 2025 yourapp.com</span>
                </div>
                <div className="auth-footer-right">
                    <a href="/contact">Contact Us</a>
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default AuthFooter

