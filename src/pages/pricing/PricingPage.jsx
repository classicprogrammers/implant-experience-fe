import React from 'react';

function PricingPage() {
    return (
        <div style={{ background: '#fff', minHeight: '100vh', padding: '0 0 40px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', padding: '60px 20px 20px 20px' }}>
                <h1 style={{ fontSize: '2.8rem', color: '#0a3556', marginBottom: 10, fontWeight: 700 }}>Pricing Plans</h1>
                <p style={{ color: '#6c7a89', fontSize: '1rem', lineHeight: '1.5rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla, molestie aliquet.<br />
                    Sed mollis nibh ut turpis volutpat laoreet. Aliquam sed tortor felis
                </p>
            </div>

            {/* Pricing Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', padding: '0 20px' }}>
                {/* Free Plan */}
                <div style={{
                    background: '#00b1b7',
                    color: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                    width: '100%',
                    maxWidth: '900px',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    padding: '32px 40px',
                    gap: '20px'
                }}>
                    <div style={{ textAlign: 'center', minWidth: 120 }}>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>FREE</div>
                        <div style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 4 }}>0$</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, marginLeft: 40 }}>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, marginLeft: 40 }}>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                    </div>
                    <div>
                        <button style={{
                            background: '#fff',
                            color: '#00b1b7',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '10px 65px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Starter Plan */}
                <div style={{
                    background: '#fff',
                    color: '#0a3556',
                    borderRadius: '20px',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                    width: '100%',
                    maxWidth: '900px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    padding: '32px 40px',
                    gap: '20px'
                }}>
                    <div style={{ textAlign: 'center', minWidth: 120 }}>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Starter</div>
                        <div style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 4 }}>$4.99</div>
                        <div style={{ fontSize: '0.95rem', color: '#6c7a89' }}>/Month</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, marginLeft: 40 }}>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, marginLeft: 40 }}>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                        <div>Text Holder</div>
                    </div>
                    <div>
                        <button style={{
                            background: '#00b1b7',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '10px 65px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}>
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 60,
                padding: '20px 40px',
                fontSize: '0.95rem',
                color: '#6c7a89',
                borderTop: '1px solid #e5e7eb',
                flexWrap: 'wrap',
                gap: '20px',
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>© 2025 yourmpp.com</span>
                    <a href="#" style={{ color: '#0a3556', textDecoration: 'underline' }}>Contact Us</a>
                </div>
                <div style={{ display: 'flex', gap: '18px' }}>
                    <a href="#" style={{ color: '#0a3556', textDecoration: 'underline' }}>Terms & Conditions</a>
                    <a href="#" style={{ color: '#0a3556', textDecoration: 'underline' }}>Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}

export default PricingPage;