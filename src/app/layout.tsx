import './globals.css';
import { Poppins } from 'next/font/google';
import { Footer, Header } from '@/components';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});
export const metadata = {
  title: 'Next 13 + Pico CSS = ❤️',
  description: 'Probando Next.js 13 con Pico CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} container`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
