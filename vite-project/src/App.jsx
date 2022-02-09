import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Welcome, Footer, Listings } from './components'
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)
  const { jobs, loading, error} = useFetchJobs()

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Container>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        <h1>{jobs.length}</h1>
      </Container>
      <Listings />
      <Footer />

    </div>
  )
}

export default App
