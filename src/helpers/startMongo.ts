import { connect } from 'mongoose'

import env from './env.js'

async function startMongo() {
  const options = {
    serverSelectionTimeoutMS: 5000,
  }

  const connectWithRetry = async () => {
    try {
      await connect(env.MONGO, options)
      console.log('MongoDB connected successfully')
    } catch (error) {
      console.error('Failed to connect to MongoDB, retrying in 5 seconds...', error)
      setTimeout(connectWithRetry, 5000)
    }
  }

  await connectWithRetry()
}

export default startMongo
