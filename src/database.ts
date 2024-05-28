import { knex as setupKex } from 'knex'

export const config = {
  client: 'sqlite3',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
}

export const knex = setupKex(config)
