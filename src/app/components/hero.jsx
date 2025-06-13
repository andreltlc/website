// app/components/Hero.jsx
import './hero.css';

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
        {/* Espaço para sua foto profissional no futuro */}
      </div>
    </section>
  );
}