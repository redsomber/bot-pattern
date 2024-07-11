import { FileAdapter } from '@grammyjs/storage-file'
import { session } from 'grammy'

import type { SessionData } from '../interfaces/sessionData.js'

const storage = new FileAdapter<SessionData>({
  dirName: 'sessions',
})

export default session({
  initial(): SessionData {
    return {
      user: {
        user_id: 0,
        language: '',
      },

    }
  },
  storage,
})
