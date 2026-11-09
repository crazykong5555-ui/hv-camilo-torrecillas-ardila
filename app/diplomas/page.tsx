import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diplomas y cursos | Camilo Torrecillas Ardila",
  description: "Diplomas y cursos de Camilo Torrecillas Ardila.",
};

const credentials = [
  {
    title: "DIPLOMA TECNOLOGO EN",
    programs: ["ELECTRONICA INDUSTRIAL"],
  },
  {
    title: "COMPLEMENTARIA VIRTUAL EN",
    programs: [
      "DESARROLLO DE APLICACIONES CON INTERFAZ GRAFICA, MANEJO DE EVENTOS, CLASES Y OBJETOS: JAVA",
      "ENGLISH DOT WORKS BEGINNER - INGLÉS PRINCIPIANTES",
      "DESARROLLO DE APLICACIONES CON MANEJO DE DATOS EN LA MEMORIA- JAVA",
      "DESARROLLO DE APLICACIONES CON MANEJO DE PROCESO SIMULTANEO Y USO DE MENUS: JAVA",
      "DESARROLLO DE APLICACIONES CON MANEJO DE ARCHIVOS DE TEXTO Y EL MANEJO DE EXCEPCIONES EN JAVA",
      "ADOBE FLASH PROFESSIONAL CS5.5",
      "MODULOS, ESTRUCTURA DE ALMACENAMIENTO Y POO UTILIZANDO EL LENGUAJE DE PROGRAMACION C++ (NIVEL II)",
      "VARIABLES Y ESTRUCTURAS DE CONTROL EN PYTHON.",
      "USO DE CLASES, OBJETOS, METODOS Y ARCHIVOS SECUENCIALES EN POO CON LENGUAJE DE PROGRAMACION C++ (NIVEL III)",
      "ANALISIS EXPLORATORIO DE DATOS EN PYTHON.",
      "DESARROLLO WEB CON PHP",
      "ENGLISH DOES WORK - LEVEL 1",
      "ENGLISH DOES WORK - LEVEL 2",
      "ENGLISH DOES WORK - LEVEL 3",
      "BASES DE DATOS: GENERALIDADES Y SISTEMAS DE GESTIÓN",
      "ESTRUCTURA DEL LENGUAJE DE PROGRAMACIÓN C++",
      "ARMADO Y MANTENIMIENTO DE EQUIPOS DE CÓMPUTO",
      "PRINCIPIOS DEL ANALISIS Y DISEÑO ORIENTADO A OBJETOS, UTILIZANDO EL ESTANDAR UML",
    ],
  },
];

export default function DiplomasPage() {
  return (
    <main className="container credentials-page">
      <header className="credentials-heading">
        <p className="eyebrow">Formación y aprendizaje</p>
        <h1>Diplomas y cursos</h1>
        <p>Programas de formación y títulos obtenidos.</p>
      </header>

      {credentials.map((credential) => (
        <section className="section credential-section" key={credential.title}>
          <h2>{credential.title}</h2>
          <ul className="program-list">
            {credential.programs.map((program) => (
              <li className="program-card" key={program}>
                <span className="program-mark" aria-hidden="true">✓</span>
                <span>{program}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="section portfolio-section">
        <h2>Repositorios y proyectos</h2>
        <div className="portfolio-links">
          <a
            className="portfolio-link"
            href="https://github.com/crazykong5555-ui/hv-camilo-torrecillas-ardila"
            target="_blank"
            rel="noreferrer"
          >
            <span className="portfolio-link-label">Repositorio de GitHub</span>
            <span className="portfolio-link-detail">Código fuente de esta hoja de vida</span>
            <span className="portfolio-link-action" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
