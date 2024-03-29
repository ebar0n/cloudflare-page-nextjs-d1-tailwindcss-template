import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const UserTable = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull(),
  name: text('name'),
  username: text('username')
})
