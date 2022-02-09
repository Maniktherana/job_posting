import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Welcome, Footer, Listings } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Listings />
      <Footer />

    </div>
  )
}

export default App
