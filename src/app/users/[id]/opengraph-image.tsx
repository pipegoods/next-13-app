import { getUser } from '@/services/user.service';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 600 };
export const alt = 'Imagen de perfil';
export const contentType = 'image/png';

export default async function og({ params }: { params: { id: number } }) {
  try {
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
          👋,
          <picture>
            <img src={user.avatar} alt={alt} width={128} />
          </picture>
        </div>
      ),
      {
        emoji: 'twemoji',
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);

    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
