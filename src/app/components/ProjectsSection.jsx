// app/components/ProjectsSection.jsx
import './projectsSection.css';

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {/* Card de Projeto 1 */}
        <div className="project-card">
          <div className="project-image-placeholder"></div>
          <h3>Nome do Projeto 1</h3>
          <p>Uma breve descrição do desafio, da solução e das tecnologias utilizadas neste projeto.</p>
          <div className="project-links">
            <a href="#">Ver no GitHub</a>
            <a href="#">Ver Site</a>
          </div>
        </div>

        {/* Card de Projeto 2 */}
        <div className="project-card">
          <div className="project-image-placeholder"></div>
          <h3>Nome do Projeto 2</h3>
          <p>Uma breve descrição do desafio, da solução e das tecnologias utilizadas neste projeto.</p>
          <div className="project-links">
            <a href="#">Ver no GitHub</a>
            <a href="#">Ver Site</a>
          </div>
        </div>

        {/* Card de Projeto 3 */}
        <div className="project-card">
          <div className="project-image-placeholder"></div>
          <h3>Nome do Projeto 3</h3>
          <p>Uma breve descrição do desafio, da solução e das tecnologias utilizadas neste projeto.</p>
          <div className="project-links">
            <a href="#">Ver no GitHub</a>
            <a href="#">Ver Site</a>
          </div>
        </div>
      </div>
    </section>
  );
}