import mongoose from 'mongoose'

export const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db'
const db = mongoose.connection

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return db
  }

  await mongoose.connect(connectionString)
  console.log('Connected to octofit_db')
  return db
}

db.on('error', console.error.bind(console, 'connection error:'))

export default db
