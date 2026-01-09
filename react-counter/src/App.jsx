import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([0])

  useEffect(() => {
    const savedCount = localStorage.getItem('count')
    if (savedCount !== null) {
      setCount(Number(savedCount))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    setHistory([...history, newCount])
  }

  const decrement = () => {
    const newCount = count - 1
    setCount(newCount)
    setHistory([...history, newCount])
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
    </div>
  )
}

export default App
