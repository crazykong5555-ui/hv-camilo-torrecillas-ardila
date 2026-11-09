"use client"; // ✅ LÍNEA CLAVE AGREGADA AQUÍ

import Image from 'next/image';
import Head from 'next/head';

export default function HojaDeVida() {
  return (
    <>
      <Head>
        <title>Hoja de Vida - Camilo Torrecillas Ardila</title>
        <meta name="description" content="Hoja de vida profesional de Camilo Torrecillas Ardila: Tecnólogo en Electrónica Industrial y Desarrollo de Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx>{`
          :root {
            --primary-color: #1a365d;
            --secondary-color: #2c5282;
            --accent-color: #4299e1;
            --background-color: #f7fafc;
            --text-color: #2d3748;
            --light-text: #718096;
            --border-radius: 8px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }

          .header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 2rem;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid #e2e8f0;
          }

          .profile-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--secondary-color);
          }

          .info-text {
            flex: 1;
            min-width: 250px;
          }

          .info-text h1 {
            font-size: 2.2rem;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
          }

          .info-text .title {
            font-size: 1.1rem;
            color: var(--light-text);
            font-weight: 500;
            margin-bottom: 1rem;
          }

          .info-text p {
            color: var(--light-text);
            line-height: 1.8;
          }

          .section {
            margin-bottom: 2.5rem;
            padding: 1.5rem;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
          }

          .section h2 {
            color: var(--primary-color);
            border-bottom: 3px solid var(--accent-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .section h2::before {
            content: "";
            width: 4px;
            height: 24px;
            background-color: var(--accent-color);
          }

          .experience-item, .education-item, .certification-item {
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
          }

          .experience-item:last-child, .education-item:last-child, .certification-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }

          .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.5rem;
          }

          .item-title {
            font-weight: 600;
            font-size: 1.1rem;
            color: var(--primary-color);
          }

          .item-subtitle {
            color: var(--light-text);
            font-size: 0.9rem;
          }

          .item-date {
            background: var(--accent-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.85rem;
          }

          .item-description {
            color: var(--text-color);
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .education-img {
            width: 50px;
            height: 50px;
            margin-right: 1rem;
            border-radius: var(--border-radius);
            object-fit: cover;
            border: 2px solid var(--accent-color);
          }

          .education-content {
            display: flex;
            align-items: flex-start;
          }

          .education-details {
            flex: 1;
          }

          .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1rem;
          }

          .skill-tag {
            background: #edf2f7;
            color: var(--text-color);
            padding: 0.3rem 0.8rem;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 500;
          }

          .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            background: #ebf8ff;
            border-radius: var(--border-radius);
          }

          .contact-item svg {
            width: 24px;
            height: 24px;
            color: var(--accent-color);
          }

          .contact-item p {
            margin: 0;
            color: var(--text-color);
          }

          .contact-item a {
            color: var(--text-color);
            text-decoration: none;
            word-break: break-all;
          }

          .contact-item a:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              text-align: center;
            }
            .info-text {
              text-align: center;
            }
            .education-content {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .education-img {
              margin: 0 0 1rem 0;
            }
          }
        `}</style>
      </Head>

      <main>
        <div className="container">
          {/* Encabezado: Foto y datos profesionales */}
          <section className="header">
            <Image
              src="/foto-perfil.jpg"
              alt="Foto de Camilo Torrecillas Ardila"
              width={200}
              height={200}
              className="profile-img"
            />
            <div className="info-text">
              <h1>Camilo Torrecillas Ardila</h1>
              <div className="title">Tecnólogo en Electrónica Industrial | Especialista en Desarrollo de Software</div>
              <p>
                Profesional técnico con formación en electrónica industrial y capacitación avanzada en desarrollo de software. 
                Experiencia en instalación y mantenimiento de sistemas UPS, redes estructuradas, soporte técnico y desarrollo 
                de aplicaciones web. Comprometido con la calidad, la innovación y la solución integral de problemas técnicos.
              </p>
            </div>
          </section>

          {/* Experiencia Laboral */}
          <section className="section">
            <h2>Experiencia Laboral</h2>
            
            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Técnico de Mantenimiento de Equipos Electrónicos</div>
                  <div className="item-subtitle">RECURSOS HUMANOS TEMPORALES LTDA</div>
                </div>
                <div className="item-date">Dic 2015 - Actual</div>
              </div>
              <p className="item-description">
                Experiencia acumulada de 123.87 meses en mantenimiento preventivo y correctivo de equipos electrónicos, 
                diagnóstico de fallas y soporte técnico especializado para clientes corporativos.
              </p>
            </div>
            
            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Técnico de Mantenimiento de Equipos Electrónicos</div>
                  <div className="item-subtitle">DEVELOPER AND INTEGRATOR SAS</div>
                </div>
                <div className="item-date">Feb 2016 - Actual</div>
              </div>
              <p className="item-description">
                121.03 meses de experiencia en instalaciones eléctricas de alta tensión, mantenimiento de sistemas de potencia 
                y solución técnica integrada para infraestructuras críticas.
              </p>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Técnico de Soporte Técnico Nivel 2</div>
                  <div className="item-subtitle">COMWARE - SECRETARÍA DE EDUCACIÓN (SED)</div>
                </div>
                <div className="item-date">Nov 2011 - Dic 2012</div>
              </div>
              <p className="item-description">
                Gestión de mesa de ayuda para instituciones educativas, resolución de incidencias en equipos de cómputo 
                y redes, y capacitación de usuarios finales en herramientas tecnológicas.
              </p>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Técnico de Mantenimiento de Equipos Electrónicos</div>
                  <div className="item-subtitle">ANOVO COLOMBIA</div>
                </div>
                <div className="item-date">Sep 2014 - Jun 2015</div>
              </div>
              <p className="item-description">
                Soporte técnico especializado en reparación de dispositivos móviles y equipos de cómputo, siguiendo protocolos 
                de calidad internacionales para clientes empresariales.
              </p>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Tecnólogo en Electrónica</div>
                  <div className="item-subtitle">COEXITO S.A.</div>
                </div>
                <div className="item-date">Ene 2007 - Jul 2007</div>
              </div>
              <p className="item-description">
                Instalación y mantenimiento de sistemas electrónicos en establecimientos comerciales, incluyendo cableado 
                estructurado y configuración de equipos de punto de venta (POS).
              </p>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Técnico de Mantenimiento de Equipos Electrónicos</div>
                  <div className="item-subtitle">GENERAL MOTORS - COLMOTORES</div>
                </div>
                <div className="item-date">Oct 2004 - Abr 2005</div>
              </div>
              <p className="item-description">
                Mantenimiento preventivo y correctivo de sistemas electrónicos automotrices, diagnóstico de fallas en 
                módulos de control y apoyo en líneas de producción.
              </p>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Técnico de Mantenimiento de Equipos Electrónicos</div>
                  <div className="item-subtitle">ORGANIZACION WACKENHUT</div>
                </div>
                <div className="item-date">Oct 1998 - Abr 2000</div>
              </div>
              <p className="item-description">
                Mantenimiento de sistemas de seguridad electrónica, videovigilancia y control de acceso para instalaciones 
                corporativas y residenciales.
              </p>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div>
                  <div className="item-title">Técnico de Mantenimiento de Equipos Electrónicos</div>
                  <div className="item-subtitle">SIEMENS S.A.</div>
                </div>
                <div className="item-date">Jul 1997 - Abr 1998</div>
              </div>
              <p className="item-description">
                Diseño y reparación de tarjetas electrónicas industriales, ensamblaje de prototipos y ejecución de protocolos 
                de prueba según especificaciones técnicas de cliente.
              </p>
            </div>
          </section>

          {/* Educación y Certificaciones */}
          <section className="section">
            <h2>Formación Académica y Certificaciones</h2>
            
            <div className="education-item">
              <div className="education-content">
                <Image
                  src="/icfes-logo.jpg"
                  alt="Logo ICFES"
                  width={50}
                  height={50}
                  className="education-img"
                />
                <div className="education-details">
                  <div className="item-title">Bachillerato Académico</div>
                  <div className="item-subtitle">Instituto Colombiano para el Fomento de la Educación Superior (ICFES)</div>
                  <div className="item-date">Mar 1995</div>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-content">
                <Image
                  src="/sena-logo.jpg"
                  alt="Logo SENA"
                  width={50}
                  height={50}
                  className="education-img"
                />
                <div className="education-details">
                  <div className="item-title">Tecnólogo en Electrónica Industrial</div>
                  <div className="item-subtitle">SENA - Centro de Electricidad, Electrónica y Telecomunicaciones (Bogotá)</div>
                  <div className="item-date">Sep 2006</div>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-content">
                <Image
                  src="/sena-logo.jpg"
                  alt="Logo SENA"
                  width={50}
                  height={50}
                  className="education-img"
                />
                <div className="education-details">
                  <div className="item-title">Técnico Profesional en Mantenimiento Electrónico</div>
                  <div className="item-subtitle">SENA - Centro de Electricidad, Electrónica y Telecomunicaciones (Bogotá)</div>
                  <div className="item-date">Oct 2000</div>
                </div>
              </div>
            </div>

          <div className="education-item">
            <div className="education-content">
              <Image
                src="/sena-logo.jpg"
                alt="Logo SENA"
                width={50}
                height={50}
                className="education-img"
              />
              <div className="education-details">
                <div className="item-title">Tecnólogo en Análisis y Desarrollo de Software</div>
                <div className="item-subtitle">SENA - Centro Agroindustrial y Fortalecimiento Empresarial de Casanare</div>
                <div className="item-date">En curso (Último periodo: Jun 2025)</div>
              </div>
            </div>
          </div>

          <div className="education-item">
            <div className="education-details">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Certificaciones SENA</h3>
              <div className="skills-list">
                <span className="skill-tag" style={{ background: 'var(--background-color)', color: 'var(--text-color)' }}>
                  Diseño de Páginas Web (HTML, JS, PHP) - En curso (2026)
                </span>
                <span className="skill-tag">Adobe Flash Professional CS5.5 (40 hrs) - 2015</span>
                <span className="skill-tag">Desarrollo de Mentalidad Emprendedora (70 hrs) - 2005</span>
                <span className="skill-tag">Relaciones Interpersonales (1 bimestre) - 1988</span>
                <span className="skill-tag">Programación C++ Nivel III (40 hrs) - 2023</span>
                <span className="skill-tag">Python: Variables y Estructuras de Control (48 hrs) - 2023</span>
                <span className="skill-tag">Programación C++ Nivel II (40 hrs) - 2022</span>
                <span className="skill-tag">Java: Manejo de Archivos y Excepciones (40 hrs) - 2014</span>
                <span className="skill-tag">Java: Multithreading y Procesos (40 hrs) - 2014</span>
                <span className="skill-tag">Java: Manejo de Datos en Memoria (40 hrs) - 2014</span>
                <span className="skill-tag">Java: GUI, Eventos, Clases y Objetos (40 hrs) - 2014</span>
                <span className="skill-tag">Java: Programación Orientada a Objetos (40 hrs) - 2011</span>
                <span className="skill-tag">Soporte Técnico para Computadores (60 hrs) - 2011</span>
                <span className="skill-tag">Desarrollo Web con HTML y JavaScript (40 hrs) - 2010</span>
                <span className="skill-tag">Programación C++ Nivel I (40 hrs) - 2008</span>
                <span className="skill-tag">Programador BASIC - Sistemas Ltda. (1 año) - 1985</span>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-list">
            <span className="skill-tag" style={{ background: '#edf2f7', color: 'var(--text-color)' }}>
              Instalación y mantenimiento de UPS
            </span>
            <span className="skill-tag">Instalaciones eléctricas (baja tensión)</span>
            <span className="skill-tag">Cableado estructurado y redes</span>
            <span className="skill-tag">Soporte técnico (Help Desk)</span>
            <span className="skill-tag">Reparación y diagnóstico de tarjetas electrónicas</span>
            <span className="skill-tag">Mantenimiento de sistemas electro-mecánicos</span>
            <span className="skill-tag">Interpretación de planos eléctricos</span>
            <span className="skill-tag">Desarrollo web (HTML, JavaScript, PHP)</span>
            <span className="skill-tag">Programación: Python, C++, Java</span>
            <span className="skill-tag">Análisis y desarrollo de software</span>
            <span className="skill-tag">Pruebas de software y documentación técnica</span>
          </div>
        </section>

        {/* Información de Contacto */}
        <section className="section">
          <h2>Información de Contacto</h2>
          <div className="contact-info">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <strong>Email:</strong> <a href="mailto:crazykong5555@gmail.com">crazykong5555@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 015.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21.502l1.498-4.493a1 1 0 01.684-.949V7a2 2 0 012-2h3.28a2 2 0 012 2v11.52a2 2 0 01-1.238 1.888l-3.7.629 3.147a64.806 64.806 0 00-4.694 10.888A18.017 18.017 0 0111.044 19h-3.032a18.007 18.007 0 00-8.968-4.77l-.629-3.147a64.806 64.806 0 00-4.694-10.888A18.017 18.017 0 013 18.48v-3.48z" />
              </svg>
              <div>
                <strong>Teléfono:</strong> <a href="tel:+573184800108">+57 318 480 0108</a>
              </div>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M3 18h18" />
              </svg>
              <div>
                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/camilo-torrecillas" target="_blank" rel="noopener noreferrer">linkedin.com/in/camilo-torrecillas</a>
              </div>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 11m0-9L12 4m6 4l9-11m2 9l-9 11-2-9zm8 0h.01" />
              </svg>
              <div>
                <strong>Ubicación:</strong> Bogotá, D.C., Colombia
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
