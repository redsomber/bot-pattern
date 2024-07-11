import { Menu, MenuRange } from '@grammyjs/menu'

import type { MyContext } from '../helpers/bot.js'

const botStartMenu = new Menu<MyContext>('botStart')
botStartMenu.dynamic(() => {
  const range = new MenuRange<MyContext>()
  range
    .text('About me', async (ctx) => {
      const user = ctx.session.user

      if (!user) {
        await ctx.deleteMessage()
        await ctx.reply('No user')
        return
      }

      await ctx.deleteMessage()
      await ctx.reply(`Username: ${user.username ?? 'N/A'}
First name: ${user.firstName ?? 'N/A'}
Last name: ${user.lastName ?? 'N/A'}`)
    })
    .text('Cancel', async (ctx) => {
      await ctx.deleteMessage()
      await ctx.reply('Canceled')
    })

  return range
})

export default botStartMenu
