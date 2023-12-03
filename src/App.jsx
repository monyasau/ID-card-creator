import { useState } from 'react'
import TopNav from './components/TopNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav/>
    </>
  )
}

export default App
