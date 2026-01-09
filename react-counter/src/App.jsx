import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([0])
  const [step, setStep] = useState(1)

  useEffect(() => {
    const savedCount = localStorage.getItem('count')
    if (savedCount !== null) {
      setCount(Number(savedCount))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        increment()
      } else if (event.key === 'ArrowDown') {
        decrement()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [count, history])

  const increment = () => {
    const newCount = count + step
    setCount(newCount)
    setHistory([...history, newCount])
  }

  const decrement = () => {
    const newCount = count - step
    setCount(newCount)
    setHistory([...history, newCount])
  }

  const reset = () => {
    setCount(0)
    setHistory([0])
  }

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="counter-display">
        <h2>Current Count: {count}</h2>
      </div>
      <div className="button-group">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="step-input-section">
        <label htmlFor="step">Step Value:</label>
        <input 
          id="step"
          type="number" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <p className="save-status">Changes saved.</p>
      <div className="history-section">
        <h3>Count History:</h3>
        <ul className="history-list">
          {history.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <p className="keyboard-hint">Use ArrowUp to increment and ArrowDown to decrement.</p>
    </div>
  )
}

export default App
