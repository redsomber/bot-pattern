import type { MyContext, MyConversation } from '../helpers/bot.js'
import botStartMenu from '../menus/botStartMenu.js'

export default async function botStart(
  conversation: MyConversation,
  ctx: MyContext,
) {
  await ctx.reply('Message me something')

  const { message } = await conversation.wait()

  if (!message?.text) {
    await ctx.reply('Input error. Try again.')
  }

  conversation.session.user = {
    user_id: ctx.from!.id,
    language: ctx.from?.language_code || 'en',
    username: ctx.from?.username,
    firstName: ctx.from?.first_name,
    lastName: ctx.from?.last_name,
  }

  await ctx.reply(`Your message is: \n${message?.text}`, { reply_markup: botStartMenu })
}
