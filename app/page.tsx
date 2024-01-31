// import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import { drizzle } from 'drizzle-orm/d1'
import { sql } from 'drizzle-orm';
import { UserTable } from './db/schema'

export const runtime = 'edge';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// interface Env {
//   DB: D1Database;
// }

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  // const db = process.env.DB;
  // const stmt = db.prepare('SELECT * FROM users');
	// const {results} = await stmt.all();
  // console.log(results);

  const db = drizzle(process.env.DB)

  let query = db.select().from(UserTable).where(sql`${UserTable.name} LIKE ${`%${search}%`}`);

  const results = await query

  const users = results as User[] ?? [];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Postgres database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
