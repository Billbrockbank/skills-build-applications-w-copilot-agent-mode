import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    grade: { type: Number, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true },
  },
  { timestamps: true },
)

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    mascot: { type: String, required: true },
    coach: { type: String, required: true },
    memberCount: { type: Number, required: true },
    totalPoints: { type: Number, required: true },
  },
  { timestamps: true },
)

const activitySchema = new Schema(
  {
    userEmail: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    pointsEarned: { type: Number, required: true },
    loggedAt: { type: Date, required: true },
  },
  { timestamps: true },
)

const leaderboardSchema = new Schema(
  {
    userEmail: { type: String, required: true },
    displayName: { type: String, required: true },
    team: { type: String, required: true },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
  },
  { timestamps: true },
)

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    recommendedFor: [{ type: String, required: true }],
  },
  { timestamps: true },
)

export const User = model('User', userSchema)
export const Team = model('Team', teamSchema)
export const Activity = model('Activity', activitySchema)
export const LeaderboardEntry = model('LeaderboardEntry', leaderboardSchema)
export const Workout = model('Workout', workoutSchema)