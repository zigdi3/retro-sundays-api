import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

export default async (app: Express): Promise<void> => {
  const rotas = Router()

  app.use('/api', rotas)
  const files = readdirSync(path.resolve(__dirname, '..', 'routes'))
  for (const file of files) {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(rotas)
    }
  }
}