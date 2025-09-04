import { useState } from 'react'

import './App.css'
import Dashboard from './pages/Dashboard'
import Dashboard2 from './pages/Dashboard2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard2></Dashboard2>
    </>
  )
}

export default App
