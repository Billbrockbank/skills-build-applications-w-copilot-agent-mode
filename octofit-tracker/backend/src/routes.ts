import { Router } from 'express'
import { getApiBaseUrl } from './config/api.js'
import { Activity, LeaderboardEntry, Team, User, Workout } from './models.js'

export const apiRouter = Router()

apiRouter.get('/config', (_request, response) => {
  response.json({ apiBaseUrl: getApiBaseUrl() })
})

apiRouter.get('/users', async (_request, response) => {
  response.json(await User.find().sort({ name: 1 }))
})
apiRouter.post('/users', async (request, response) => {
  response.status(201).json(await User.create(request.body))
})

apiRouter.get('/teams', async (_request, response) => {
  response.json(await Team.find().sort({ totalPoints: -1 }))
})
apiRouter.post('/teams', async (request, response) => {
  response.status(201).json(await Team.create(request.body))
})

apiRouter.get('/activities', async (_request, response) => {
  response.json(await Activity.find().sort({ loggedAt: -1 }))
})
apiRouter.post('/activities', async (request, response) => {
  response.status(201).json(await Activity.create(request.body))
})

apiRouter.get('/leaderboard', async (_request, response) => {
  response.json(await LeaderboardEntry.find().sort({ rank: 1 }))
})

apiRouter.get('/workouts', async (_request, response) => {
  response.json(await Workout.find().sort({ difficulty: 1, title: 1 }))
})
apiRouter.post('/workouts', async (request, response) => {
  response.status(201).json(await Workout.create(request.body))
})