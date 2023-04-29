import { getUser } from '@/services/user.service';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { id: number } }) {
  const user = await getUser(params.id);

  return {
    title: `${user.first_name} ${user.last_name}`,
    description: user.email,
  };
}

export default async function UserIdPage({ params }: { params: { id: number } }) {
  const { id } = params;

  const user = await getUser(id);

  return (
    <main>
      <article className="article">
        <Image src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={150} height={150} />
        <span>
          <h1>
            {user.first_name} {user.last_name}
          </h1>
          <p>{user.email}</p>
        </span>
      </article>
    </main>
  );
}
