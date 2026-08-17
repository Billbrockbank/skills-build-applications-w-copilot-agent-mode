import express from 'express'
import { apiPort, getApiBaseUrl } from './config/api.js'
import { connectDatabase, connectionString } from './config/database.js'
import { apiRouter } from './routes.js'

const app = express()

app.use(express.json())
app.use('/api', apiRouter)

app.get('/api/health', (_request, response) => {
  const codespaceUrl = process.env.CODESPACE_NAME 
    ? `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
    : getApiBaseUrl()
  
  response.json({
    status: 'ok',
    apiBaseUrl: codespaceUrl,
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