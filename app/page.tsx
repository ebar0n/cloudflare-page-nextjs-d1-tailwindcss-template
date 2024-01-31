// import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';

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
  // const result = await sql`
  //   SELECT id, name, username, email
  //   FROM users
  //   WHERE name ILIKE ${'%' + search + '%'};
  // `;
  // const users = result.rows as User[];
  console.log('Connecting to database...');
  const db = process.env.DB;
  console.log(db);
  // const stmt = db.prepare('SELECT * FROM users');
	// const {results} = await stmt.all();
  // console.log(results);
  console.log('Closed database connection.');

  const users: User[] = [];

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
