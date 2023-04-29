import Image from 'next/image';
import { User } from '@/types/type';
import Link from 'next/link';

interface TableUsersProps {
  users: User[];
}

export default function TableUsers({ users }: TableUsersProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <Image src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={50} height={50} />
            </td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <Link href={`/users/${user.id}`}>Ver</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
