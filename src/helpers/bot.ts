import { Bot, type Context, type SessionFlavor } from 'grammy'
import type { Conversation, ConversationFlavor } from '@grammyjs/conversations'

import type { SessionData } from '../interfaces/sessionData.js'

import env from './env.js'

export type MyContext = SessionFlavor<SessionData> &
  Context &
  ConversationFlavor

export type MyConversation = Conversation<MyContext>

const bot = new Bot<MyContext>(env.TOKEN)

export default bot
