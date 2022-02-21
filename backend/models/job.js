const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

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

jobSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Job', jobSchema)