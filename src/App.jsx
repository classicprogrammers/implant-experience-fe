import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import LandingPage from './pages/landing/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import ContactPage from './pages/landing/ContactPage'
import TermsPage from './pages/landing/TermsPage'
import OCRPage from './pages/ocr/OCRPage'
import DashboardRoutes from './layouts/DashboardRoutes'
import './App.css'

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
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
