import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LandingPage from './pages/landing/LandingPage'
import LandingAbout from './pages/landing/About'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import SetPasswordPage from './pages/auth/SetPassword'
import PasswordSuccessPage from './pages/auth/PasswordSuccess'
import PaymentSuccessPage from './pages/auth/PaymentSuccess'
import VerifyOTP from './pages/auth/VerifyOTP'
import ContactPage from './pages/landing/ContactPage'
import TermsPage from './pages/landing/TermsPage'
import LandingResource from './pages/landing/Resources'
import NewsLetter from './pages/landing/NewsLetter'
import OCRPage from './pages/ocr/OCRPage'
import PricingPage from './pages/pricing/PricingPage'
import DashboardRoutes from './layouts/DashboardRoutes'
import './App.css'

// Layout wrapper for landing pages with header and footer
const LandingLayout = ({ children }) => {
  return (
    <div className="landing-layout">
      <Header variant="landing" />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Landing pages with header and footer */}
            <Route path="/" element={
              <LandingLayout>
                <LandingPage />
              </LandingLayout>
            } />
            <Route path="/landing" element={
              <LandingLayout>
                <LandingPage />
              </LandingLayout>
            } />
            <Route path="/about" element={
              <LandingLayout>
                <LandingAbout />
              </LandingLayout>
            } />
            <Route path="/resource" element={
              <LandingLayout>
                <LandingResource />
              </LandingLayout>
            } />
            <Route path="/newsletter" element={
              <LandingLayout>
                <NewsLetter />
              </LandingLayout>
            } />
            <Route path="/contact" element={
              <LandingLayout>
                <ContactPage />
              </LandingLayout>
            } />
            <Route path="/terms" element={
              <LandingLayout>
                <TermsPage />
              </LandingLayout>
            } />


            {/* Auth pages without header/footer */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/set-password" element={<SetPasswordPage />} />
            <Route path="/password-success" element={<PasswordSuccessPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />

            {/* OCR page - accessible after sign-in/sign-up */}
            <Route path="/ocr" element={<OCRPage />} />

            {/* Dashboard routes with sidebar and navbar */}
            <Route path="/*" element={<DashboardRoutes />} />
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  )
}

export default App
