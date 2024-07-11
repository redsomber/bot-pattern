import 'source-map-support/register.js'

import { ignoreOld, sequentialize } from 'grammy-middlewares'
import { run } from '@grammyjs/runner'
import type { Middleware } from 'grammy'
import { conversations, createConversation } from '@grammyjs/conversations'

import type { MyContext } from './helpers/bot.js'
import bot from './helpers/bot.js'
import startMongo from './helpers/startMongo.js'
import attachUser from './middlewares/attachUser.js'
import customSession from './helpers/session.js'
import botStart from './handlers/botStart.js'
import botStartMenu from './menus/botStartMenu.js'

async function runApp() {
  console.log('Starting app...')
  // Mongo
  await startMongo()

  const sequentializeMiddleware: Middleware<MyContext> = sequentialize()
  const ignoreOldMiddleware: Middleware<MyContext> = ignoreOld()

  bot
    .use(sequentializeMiddleware)
    .use(ignoreOldMiddleware)
    .use(customSession)
    .use(attachUser)
    .use(conversations())
    .use(botStartMenu)

    .use(createConversation(botStart))

  bot.command('start', async (ctx) => {
    await ctx.conversation.enter('botStart')
  })

  bot.catch(console.error)

  await bot.init()
  run(bot)
  console.info(`Bot ${bot.botInfo.username} is up and running`)
}

void runApp()
