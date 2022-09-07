module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'Retro-api',
    password: 'SuperMario64%',
    database: 'RetroDev',
    options: {
      enableArithAbort: true
    },
    logging: false,
    entities: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/adapters/typeorm/entities/*.{js,ts}`],
    migrations: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/adapters/typeorm/migrations/*.{js,ts}`],
    cli: {
      migrationsDir: 'src/infra/adapters/typeorm/migrations',
      entitiesDir: 'src/infra/adapters/typeorm/entities'
    }
  },
  {
    name: 'test',
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: ['src/infra/adapters/typeorm/entities/*.ts'],
    cli: {
      entitiesDir: 'src/infra/adapters/typeorm/entities'
    }
  }
]
