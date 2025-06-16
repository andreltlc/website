// app/components/ServicesSection.jsx
import './ServicesSection.css';
// Importando ícones que vamos usar. 'Fa' é de Font Awesome.
import { FaCode, FaServer} from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2>O que eu faço</h2>
      <div className="services-grid">
        {/* Serviço 1 */}
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Soluções Web Completas (Front-End)</h3>
          <p>Da prototipagem no Figma ao desenvolvimento de sites responsivos e aplicações web interativas (SPAs),
            crio a experiência completa e de alta performance para o seu usuário</p>
        </div>

        {/* Serviço 2 */}
        <div className="service-card">
          <FaServer className="service-icon" />
          <h3>Sistemas e APIs (Back-End)</h3>
          <p>Desenvolvo o back-end e as APIs que alimentam suas aplicações, garantindo segurança,
            escalabilidade e performance.</p>
        </div>

        {/* Serviço 3 */}
        <div className="service-card">
          <MdOutlineSupportAgent className="service-icon" />
          <h3>Consultoria e Manutenção</h3>
          <p>Ofereço consultoria técnica para diagnosticar e evoluir sistemas existentes, 
          além de planos de manutenção para garantir que sua aplicação continue segura e atualizada.</p>
        </div>
      </div>

    </section>
  );
}