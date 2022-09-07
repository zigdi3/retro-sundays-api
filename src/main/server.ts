import 'module-alias/register' // permite usar o alias @
import { TypeOrmHelper } from '@/infra/adapters/typeorm/type-orm-helper'
import server from './config/app'
import env from './config/env'

TypeOrmHelper.createConnection('default')
  .then(() => { server.listen(env.port, () => console.log(`Server rodando em http://127.0.0.1:${env.port}`)) })
  .catch(console.error)
