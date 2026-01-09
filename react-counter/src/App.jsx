import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
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
    </div>
  )
}

export default App
