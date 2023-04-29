import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export const size = { width: 1200, height: 600 };
export const alt = 'Pagina de inicio';
export const contentType = 'image/png';

export default function og() {
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
        }}
      >
        Next JS 13 + Pico CSS = ❤️
      </div>
    )
  );
}
