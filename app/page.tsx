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
            <h2>Formación Académica</h2>
            
            <div className="education-item">
              <div className="education-content">
                <Image
                  src="/logo-icfes.jpg"
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

          
        </section>

        {/* Información de Contacto */}
                <section className="section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-list">
            <span className="skill-tag">Instalación y mantenimiento de UPS</span>
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
