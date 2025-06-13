import Link from 'next/link';
import './header.css';
export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <Link href="/">Seu Nome</Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}