const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstackManik1:${password}@cluster0.wejhw.mongodb.net/job-listings?retryWrites=true&w=majority`

mongoose.connect(url)

const jobSchema = new mongoose.Schema({
  location: [String],
  name: String,
  url: String,
  company: String,
  lastUpdated: String,
  level: String,
  role: String,
  id: Number,
  department: String,
  original_date_time: Number,
  languages: [String],
  interviews: [String],
  takehome: Boolean,
  systemsDesign: Boolean,
  techDiscussion: Boolean,
  behavioural: Boolean,
  codeReview: Boolean,
  pairing: Boolean,
  realWorldProblem: Boolean,
  techTrivia: Boolean,
  jobTrial: Boolean,
  paid: Boolean,
  portfolioReview: Boolean,
  codingExercise: Boolean,
  refactoring: Boolean,
  interviewDescription: String,
  logo: String,
  contact: String,
  featured: Boolean
})

const Job = mongoose.model('Job', jobSchema)

Job.find({}).then(result => {
    result.forEach(job => {
      console.log(job)
    })
    mongoose.connection.close()
  })
