import mongoose from 'mongoose'
import { connectDatabase } from '../config/database.js'
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models.js'

const users = [
  {
    name: 'Mona Octocat',
    email: 'mona@mergington.edu',
    role: 'student',
    grade: 10,
    team: 'Blue Barracudas',
    points: 420,
  },
  {
    name: 'Hubert Flow',
    email: 'hubert@mergington.edu',
    role: 'student',
    grade: 11,
    team: 'Green Geckos',
    points: 385,
  },
  {
    name: 'Jessica Cat',
    email: 'jessica@mergington.edu',
    role: 'coach',
    grade: 12,
    team: 'Red Rockets',
    points: 360,
  },
]

const teams = [
  {
    name: 'Blue Barracudas',
    mascot: 'Barracuda',
    coach: 'Coach Paul Octo',
    memberCount: 14,
    totalPoints: 1280,
  },
  {
    name: 'Green Geckos',
    mascot: 'Gecko',
    coach: 'Coach Jessica Cat',
    memberCount: 12,
    totalPoints: 1175,
  },
  {
    name: 'Red Rockets',
    mascot: 'Rocket',
    coach: 'Coach Kim Sprint',
    memberCount: 13,
    totalPoints: 1120,
  },
]

const activities = [
  {
    userEmail: 'mona@mergington.edu',
    type: 'running',
    durationMinutes: 35,
    caloriesBurned: 310,
    pointsEarned: 70,
    loggedAt: new Date('2026-08-15T15:30:00Z'),
  },
  {
    userEmail: 'hubert@mergington.edu',
    type: 'cycling',
    durationMinutes: 45,
    caloriesBurned: 420,
    pointsEarned: 80,
    loggedAt: new Date('2026-08-16T14:15:00Z'),
  },
  {
    userEmail: 'jessica@mergington.edu',
    type: 'strength training',
    durationMinutes: 30,
    caloriesBurned: 240,
    pointsEarned: 65,
    loggedAt: new Date('2026-08-17T13:00:00Z'),
  },
]

const leaderboard = [
  {
    userEmail: 'mona@mergington.edu',
    displayName: 'Mona Octocat',
    team: 'Blue Barracudas',
    rank: 1,
    points: 420,
  },
  {
    userEmail: 'hubert@mergington.edu',
    displayName: 'Hubert Flow',
    team: 'Green Geckos',
    rank: 2,
    points: 385,
  },
  {
    userEmail: 'jessica@mergington.edu',
    displayName: 'Jessica Cat',
    team: 'Red Rockets',
    rank: 3,
    points: 360,
  },
]

const workouts = [
  {
    title: 'Morning Mile Builder',
    focusArea: 'cardio endurance',
    difficulty: 'beginner',
    durationMinutes: 25,
    recommendedFor: ['running', 'walking'],
  },
  {
    title: 'Core Circuit Challenge',
    focusArea: 'core strength',
    difficulty: 'intermediate',
    durationMinutes: 30,
    recommendedFor: ['strength training', 'conditioning'],
  },
  {
    title: 'After-School HIIT',
    focusArea: 'full body conditioning',
    difficulty: 'advanced',
    durationMinutes: 20,
    recommendedFor: ['team challenge', 'cardio'],
  },
]

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase()

    console.log('Seed the octofit_db database with test data')

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ])

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ])

    console.log('Database seeding complete')
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()

