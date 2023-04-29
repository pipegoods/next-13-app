import { getUser } from '@/services/user.service';
import { ImageResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export const size = { width: 1200, height: 600 };
export const alt = 'Imagen de perfil';
export const contentType = 'image/png';

export default async function og({ params }: { params: { id: number } }) {
  const user = await getUser(params.id);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
        }}
      >
        <picture>
          <source srcSet={user.avatar} type="image/webp" />
          <img src={user.avatar} alt={alt} />
        </picture>
        {user.first_name} {user.last_name}
      </div>
    )
  );
}
