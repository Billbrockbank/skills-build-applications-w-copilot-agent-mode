import express from 'express'
import { apiPort, getApiBaseUrl } from './config/api.js'
import { connectDatabase, connectionString } from './config/database.js'
import { apiRouter } from './routes.js'

const app = express()

app.use(express.json())
app.use('/api', apiRouter)

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    apiBaseUrl: getApiBaseUrl(),
    mongoUrl: connectionString,
  })
})

connectDatabase()
  .then(() => {
    app.listen(apiPort, () => {
      console.log(`OctoFit API listening on ${getApiBaseUrl()}`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to octofit_db:', error)
    process.exit(1)
  })