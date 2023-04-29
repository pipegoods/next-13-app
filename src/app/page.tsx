import { TableUsers } from '@/components';
import { getAllUsers } from '@/services/user.service';

export default async function Home() {
  const users = await getAllUsers();

  return (
    <main>
      <h1>Next.js + TypeScript + Pico CSS</h1>

      <TableUsers users={users} />
    </main>
  );
}
