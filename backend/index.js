const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

let jobs = [
    {
        "location": [
            "Remote",
            "New York"
        ],
        "name": "Data Engineering Curriculum Manager",
        "url": "https://boards.greenhouse.io/datacamp/jobs/3900926",
        "company": "DataCamp",
        "lastUpdated": "02-04-22",
        "level": "Manager",
        "role": "Data",
        "id": 3900926,
        "department": "Content",
        "original_date_time": 1643971651000.0,
        "languages": [
            "Java",
            "SQL",
            "Scala",
            "Python"
        ],
        "interviews": [
            "Take-home",
            "Systems Design",
            "Tech Discussion",
            "Behavioural",
            "Pairing",
            "Real World Problem",
            "Presentation"
        ],
        "takehome": true,
        "systemsDesign": true,
        "techDiscussion": true,
        "behavioural": true,
        "codeReview": false,
        "pairing": true,
        "realWorldProblem": true,
        "presentation": true,
        "techTrivia": false,
        "jobTrial": false,
        "paid": false,
        "portfolioReview": false,
        "codingExercise": false,
        "refactoring": false,
        "interviewDescription": "0. 60-90 Min Take-home for Junior/Intern roles only 1. Hiring Manager chat 2. Technical Coding (often pairing on real world problems) for engineers. / Tech Interview for Engineering Manager 3. Systems Architecture for Engineers / Case Study for Engineering Manager 4. Founder Interview. ",
        "logo": "./images/company_logos/datacamp_logo.webp",
        "contact": "https://www.linkedin.com/search/results/people/?keywords=technical%20recruiter%20DataCamp%20OR%20recruiter%20DataCamp",
        "featured": true
    },
    {
        "location": [
            "Uncategorized",
            "New York"
        ],
        "name": "Data Science Content Development Intern - available as from February 2022",
        "url": "https://boards.greenhouse.io/datacamp/jobs/3791487",
        "company": "DataCamp",
        "lastUpdated": "02-02-22",
        "level": "Internship",
        "role": "Data Science",
        "id": 3791487,
        "department": "Content",
        "original_date_time": 1643821272000.0,
        "languages": [
            "R",
            "Python"
        ],
        "interviews": [
            "Take-home",
            "Systems Design",
            "Tech Discussion",
            "Behavioural",
            "Pairing",
            "Real World Problem",
            "Presentation"
        ],
        "takehome": true,
        "systemsDesign": true,
        "techDiscussion": true,
        "behavioural": true,
        "codeReview": false,
        "pairing": true,
        "realWorldProblem": true,
        "presentation": true,
        "techTrivia": false,
        "jobTrial": false,
        "paid": false,
        "portfolioReview": false,
        "codingExercise": false,
        "refactoring": false,
        "interviewDescription": "0. 60-90 Min Take-home for Junior/Intern roles only 1. Hiring Manager chat 2. Technical Coding (often pairing on real world problems) for engineers. / Tech Interview for Engineering Manager 3. Systems Architecture for Engineers / Case Study for Engineering Manager 4. Founder Interview. ",
        "logo": "./images/company_logos/datacamp_logo.webp",
        "contact": "https://www.linkedin.com/search/results/people/?keywords=technical%20recruiter%20DataCamp%20OR%20recruiter%20DataCamp",
        "featured": true
    }
  ]

  app.get('/api/jobs', (request, response) => {
    response.end(JSON.stringify(jobs))
  })

  app.get('/api/jobs/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const job = jobs.find(job => job.id === id)
    if (job) {
        response.json(job)

      } else {
        response.status(404).end()
      }
    console.log(job)
  })

  const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

  app.use(requestLogger)


  // handler of requests with unknown endpoint
  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

  const PORT = process.env.PORT || 3002
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
console.log(`Server running on port ${PORT}`)