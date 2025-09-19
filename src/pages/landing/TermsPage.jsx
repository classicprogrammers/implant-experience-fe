import { Link } from 'react-router-dom'
import '../../App.css'

function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="page-title">Terms & Conditions</h1>
        
        <div className="terms-content">
          <div className="terms-card">
            <div className="terms-header">
              <p className="last-updated">Last updated: January 1, 2025</p>
            </div>

            <div className="terms-body">
              <section className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this implant management system ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="terms-section">
                <h2>2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on our Service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the Service</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="terms-section">
                <h2>3. Medical Disclaimer</h2>
                <p>
                  The information provided through this Service is for general informational purposes only and is not intended as medical advice. Always consult with qualified healthcare professionals regarding any medical decisions or treatments.
                </p>
              </section>

              <section className="terms-section">
                <h2>4. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
              </section>

              <section className="terms-section">
                <h2>5. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal and medical data. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="terms-section">
                <h2>6. Limitation of Liability</h2>
                <p>
                  In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Service.
                </p>
              </section>

              <section className="terms-section">
                <h2>7. Accuracy of Materials</h2>
                <p>
                  The materials appearing on our Service could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section className="terms-section">
                <h2>8. Changes to Terms</h2>
                <p>
                  We reserve the right to revise these terms of service at any time without notice. By using this Service, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="terms-section">
                <h2>9. Contact Information</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> legal@yourapp.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Medical Plaza, Healthcare City, HC 12345</p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <footer className="terms-footer">
          <div className="footer-left">
            <span>© 2025 yourapp.com</span>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-right">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default TermsPage
