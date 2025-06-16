import Link from 'next/link';
import Image from 'next/image';
import './header.css';
export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.svg"  // <-- O caminho correto, a partir da raiz do site
            alt="Logo do seu site" // <-- Coloque uma boa descrição aqui
            width={150}      // Ajuste a largura conforme o design
            height={40}       // Ajuste a altura conforme o design
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/projetos">Projetos</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}