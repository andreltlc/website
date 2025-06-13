// app/components/ServicesSection.jsx
import './ServicesSection.css';
// Importando ícones que vamos usar. 'Fa' é de Font Awesome.
import { FaCode, FaServer, FaMobileAlt,FaFigma } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2>O que eu faço</h2>
      <div className="services-grid">
        {/* Serviço 1 */}
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Desenvolvimento de Sites Responsivos</h3>
          <p>Crio sites modernos e rápidos que funcionam perfeitamente em qualquer dispositivo, do celular ao desktop.</p>
        </div>

        {/* Serviço 2 */}
        <div className="service-card">
          <FaServer className="service-icon" />
          <h3>Criação de serviços back-end</h3>
          <p>Desenvolvo o back-end que alimentam suas aplicações, garantindo segurança e performance.</p>
        </div>

        {/* Serviço 3 */}
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Aplicações Web Interativas</h3>
          <p>Uso frameworks modernos para construir experiências de usuário ricas e dinâmicas (Single Page Applications).</p>
        </div>
        {/* Serviço 4 */}
        <div className="service-card">
          <MdOutlineSupportAgent className="service-icon" />
          <h3>Suporte de TI</h3>
          <p>Ofereço suporte e consultoria virtual para diagnosticar e resolver seus desafios tecnológicos.</p>
        </div>
        {/* Serviço 5 */}
        <div className="service-card">
          <FaFigma className="service-icon" />
          <h3>Prototipagem no figma</h3>
          <p>Desenho interfaces (UI) intuitivas e modernas no Figma, focadas na melhor experiência do usuário (UX).</p>
        </div>
      </div>

    </section>
  );
}