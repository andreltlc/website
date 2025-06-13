// app/components/AboutSection.jsx
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-image-container">
        <div className="about-image-placeholder">
          {/* Aqui entrará uma foto sua mais casual */}
        </div>
      </div>
      <div className="about-text-container">
        <h2>Sobre Mim</h2>
        <p>
          Olá! Sou um desenvolvedor recém-formado em Ciências da Computação, fascinado por transformar problemas complexos em soluções digitais elegantes e eficientes. Minha jornada na tecnologia é movida pela curiosidade e pelo desejo de aprender constantemente.
        </p>
        <p>
          Fora do código, gosto de [seu hobby 1], [seu hobby 2] e estou sempre em busca do próximo desafio, seja ele em um novo projeto de software ou [outra atividade que você goste].
        </p>
      </div>
    </section>
  );
}