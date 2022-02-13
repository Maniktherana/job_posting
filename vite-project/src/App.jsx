import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Welcome, Footer, Job, JobsPagination } from './components'
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  return (
    <div className="min-h-screen">
      <div className="">
        <Navbar />
        <Welcome />
      </div>
      <Container>
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      </Container>
      <Footer />
    </div>
  )
}

export default App
