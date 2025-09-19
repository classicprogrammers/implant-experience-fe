import { useState } from 'react'
import { 
  animateNumberChange, 
  animateTextChange, 
  animateCardUpdate, 
  animateSuccess, 
  animateError,
  animateElement
} from '../utils/animations'
import '../App.css'

function AnimationDemo() {
  const [counter, setCounter] = useState(786)
  const [text, setText] = useState('Welcome to Implant Experience')
  const [isLoading, setIsLoading] = useState(false)

  const handleCounterChange = () => {
    const newValue = counter + Math.floor(Math.random() * 100 - 50)
    setCounter(newValue)
    
    // Animate the number change
    const element = document.querySelector('.demo-counter')
    if (element) {
      animateNumberChange(element, newValue, 1000)
    }
  }

  const handleTextChange = () => {
    const texts = [
      'Welcome to Implant Experience',
      'Revolutionary Dental Solutions',
      'Advanced Implant Technology',
      'Precision in Every Procedure'
    ]
    const newText = texts[Math.floor(Math.random() * texts.length)]
    setText(newText)
    
    // Animate the text change
    const element = document.querySelector('.demo-text')
    if (element) {
      animateTextChange(element, newText, 'slide')
    }
  }

  const handleCardUpdate = () => {
    const element = document.querySelector('.demo-card')
    if (element) {
      animateCardUpdate(element)
    }
  }

  const handleSuccess = () => {
    const element = document.querySelector('.demo-success')
    if (element) {
      animateSuccess(element)
    }
  }

  const handleError = () => {
    const element = document.querySelector('.demo-error')
    if (element) {
      animateError(element)
    }
  }

  const handleLoading = () => {
    setIsLoading(true)
    const element = document.querySelector('.demo-loading')
    if (element) {
      animateElement(element, 'pulse')
    }
    
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="demo-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Animation Demo</h2>
      <p>Click the buttons below to see different transition effects:</p>
      
      <div className="demo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        
        {/* Number Counter Demo */}
        <div className="demo-card stat-card">
          <h3>Number Counter</h3>
          <p className="stat-number demo-counter">{counter.toLocaleString()}</p>
          <button onClick={handleCounterChange} className="btn btn-primary">
            Change Number
          </button>
        </div>

        {/* Text Change Demo */}
        <div className="demo-card stat-card">
          <h3>Text Animation</h3>
          <p className="demo-text" style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b' }}>
            {text}
          </p>
          <button onClick={handleTextChange} className="btn btn-primary">
            Change Text
          </button>
        </div>

        {/* Card Update Demo */}
        <div className="demo-card stat-card">
          <h3>Card Animation</h3>
          <p>Click to animate this card</p>
          <button onClick={handleCardUpdate} className="btn btn-teal">
            Animate Card
          </button>
        </div>

        {/* Success Demo */}
        <div className="demo-card stat-card">
          <h3>Success Animation</h3>
          <p className="demo-success">✅ Success!</p>
          <button onClick={handleSuccess} className="btn btn-primary">
            Trigger Success
          </button>
        </div>

        {/* Error Demo */}
        <div className="demo-card stat-card">
          <h3>Error Animation</h3>
          <p className="demo-error">❌ Error!</p>
          <button onClick={handleError} className="btn btn-outline">
            Trigger Error
          </button>
        </div>

        {/* Loading Demo */}
        <div className="demo-card stat-card">
          <h3>Loading Animation</h3>
          <p className="demo-loading">
            {isLoading ? '⏳ Loading...' : 'Ready to load'}
          </p>
          <button onClick={handleLoading} className="btn btn-dark-blue" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Start Loading'}
          </button>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
        <h4>Available Animation Classes:</h4>
        <ul style={{ marginTop: '0.5rem' }}>
          <li><code>.fade-in</code> - Fade in effect</li>
          <li><code>.slide-in-left</code> - Slide in from left</li>
          <li><code>.slide-in-right</code> - Slide in from right</li>
          <li><code>.slide-in-up</code> - Slide in from bottom</li>
          <li><code>.pulse</code> - Pulse effect</li>
          <li><code>.bounce</code> - Bounce effect</li>
          <li><code>.shake</code> - Shake effect</li>
          <li><code>.glow</code> - Glow effect</li>
        </ul>
      </div>
    </div>
  )
}

export default AnimationDemo
