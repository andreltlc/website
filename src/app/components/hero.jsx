// app/components/Hero.jsx
import './hero.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Desenvolvedor de Software que Transforma Ideias em Soluções Digitais.</h1>
        <p>
          Recém-formado em Ciências da Computação, combino conhecimento técnico com uma abordagem criativa para construir aplicações web robustas e intuitivas.
        </p>
        <a href="/projetos" className="hero-cta-button">
          Veja meus Projetos
        </a>
      </div>
      <div className="hero-image">
        <Image 
        src="/hero2.png" // O caminho começa com "/"
        alt="Descrição da imagem para acessibilidade" // SEMPRE adicione um 'alt'
        width={650}  // Coloque a largura original da imagem
        height={350} // Coloque a altura original da imagem
        // Você pode adicionar um className para estilizar com CSS
        className="hero-image"
      />
      </div>
    </section>
  );
}