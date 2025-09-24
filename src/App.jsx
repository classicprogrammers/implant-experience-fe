import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import LandingPage from './pages/landing/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import Dashboard from './pages/dashbaord/Dashboard'
import MyDevices from './pages/devices/MyDevices'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import ContactPage from './pages/landing/ContactPage'
import TermsPage from './pages/landing/TermsPage'
import NotificationPage from './components/notification/NotificationPage'
import './App.css'
import ResourcesPage from './components/resources/ResourcesPage'
import SettingsPage from './components/settings/SettingsPage'

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-devices" element={<MyDevices />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  )
}

export default App
