import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Welcome, Footer, Job, JobsPagination } from './components'
import useFetchJobs from './useFetchJobs'
// import { Container } from 'react-bootstrap'
import { NextUIProvider } from '@nextui-org/react'
import { useTheme, Button, Input, Spacer, Text, createTheme, styled, Container } from '@nextui-org/react'

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  return (
    <NextUIProvider theme={darkTheme}>
      <div className="min-h-screen">
        <div className="">
          <Navbar />
          <Welcome />
        </div>
          <Container align='center'>
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            <div className="flex flex-col justify-center items-center">
              {loading && <h1>Loading...</h1>}
              {error && <h1>Error</h1>}
              {jobs.map(job => {
                return <Job key={job.id} job={job} />
              })}
            </div>
          </Container>
        <Footer />
      </div>
    </NextUIProvider>
  )
}

export default App
