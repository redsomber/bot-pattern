import { cwd } from 'node:process'
import { resolve } from 'node:path'

import * as dotenv from 'dotenv'
import { cleanEnv, str } from 'envalid'

dotenv.config({ path: resolve(cwd(), '.env') })

// eslint-disable-next-line node/prefer-global/process
export default cleanEnv(process.env, {
  TOKEN: str(),
  MONGO: str(),

})
