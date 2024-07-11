import type { Context, NextFunction } from 'grammy'

import { findOrCreateUser } from '../models/User.js'
import type { UserData } from '../interfaces/userData.js'

export default async function attachUser(ctx: Context, next: NextFunction) {
  if (!ctx.from) {
    throw new Error('No from field found')
  }
  const user: UserData = {
    user_id: ctx.from.id,
    username: ctx.from.username,
    firstName: ctx.from.first_name,
    lastName: ctx.from.last_name,

  }

  await findOrCreateUser(user)
  if (!user) {
    throw new Error('User not found')
  }

  return next()
}
