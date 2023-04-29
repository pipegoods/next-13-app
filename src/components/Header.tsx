import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Acerca de</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
