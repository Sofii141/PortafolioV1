export type Locale = "es" | "en";

export const dict = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      stack: "Stack",
      projects: "Proyectos",
      experience: "Trayectoria",
      contact: "Contacto",
    },
    hero: {
      masthead: "PORTAFOLIO",
      issue: "ISSUE 01",
      year: "2026",
      surname: "Arango Yanza",
      tagline: "Full Stack Developer & AI Engineer",
      role: "Estudiante de Ingeniería de Sistemas",
      cta1: "Ver proyectos",
      cta2: "Descargar CV",
      scrollHint: "Scroll para explorar",
      stats: [
        { value: "2023", label: "Activa desde", suffix: "→ hoy" },
        { value: "39+", label: "Repositorios" },
        { value: "20+", label: "Tecnologías" },
        { value: "ES·EN", label: "Idiomas" },
      ],
      tiles: {
        stack: {
          title: "TECH STACK",
          subtitle: "20+ herramientas",
          items: [
            "React", "Next.js", "TypeScript", "Tailwind",
            "Spring", "Node.js", ".NET", "Python",
            "PostgreSQL", "MongoDB", "AWS", "Docker",
            "TensorFlow", "Git",
          ],
        },
        open: { title: "DISPONIBLE", status: "Open to work · 2026", sub: "Internships · Junior · Freelance" },
        how: {
          title: "CÓMO TRABAJO",
          items: [
            "Aprender rápido.",
            "Construir con cuidado.",
            "Escuchar a quien usa lo que hago.",
          ],
        },
        exploring: {
          title: "EXPLORANDO",
          items: ["AI Agents", "System Design", "Product Thinking"],
        },
        code: { title: "ANA.TS" },
      },
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Construyo software con propósito.",
      body: [
        "Soy Ana Sofia, estudiante de Ingeniería de Sistemas en la Universidad del Cauca (noveno semestre). Me apasiona crear aplicaciones web full stack robustas, escalables y con buen diseño.",
        "Actualmente exploro la intersección entre desarrollo full stack e inteligencia artificial — agentes, modelos de ML embebidos en producto y arquitecturas modernas. Bilingüe (español/inglés) y abierta a oportunidades remotas, híbridas o presenciales.",
      ],
      highlights: [
        { label: "Universidad", value: "Universidad del Cauca" },
        { label: "Programa", value: "Ing. de Sistemas — 9° semestre" },
        { label: "Idiomas", value: "Español · Inglés" },
        { label: "Disponibilidad", value: "Remoto · Híbrido · Presencial" },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologías que uso todos los días.",
      groups: [
        {
          name: "Frontend",
          items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
          name: "Backend",
          items: ["Node.js", "Java + Spring", ".NET", "Go", "Python", "REST", "GraphQL"],
        },
        {
          name: "Bases de datos",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
        },
        {
          name: "IA & Datos",
          items: ["TensorFlow", "Scikit-learn", "LLMs", "Agentes"],
        },
        {
          name: "DevOps & Cloud",
          items: ["Docker", "AWS", "Git", "Linux", "Postman", "CI/CD"],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Una selección de cosas que he construido.",
      subtitle:
        "Algunos están publicados, otros aún en mi GitHub. Pronto agrego aquí los destacados con demos en vivo.",
      viewCode: "Ver código",
      liveDemo: "Demo",
      placeholderProjects: [
        {
          name: "Proyecto destacado #1",
          description:
            "Pronto: aplicación full stack con autenticación, dashboard y API REST.",
          tags: ["Next.js", "Node.js", "PostgreSQL"],
        },
        {
          name: "Proyecto destacado #2",
          description: "Pronto: integración de un modelo de ML con interfaz web.",
          tags: ["React", "Python", "TensorFlow"],
        },
        {
          name: "Proyecto destacado #3",
          description: "Pronto: microservicio en Spring Boot con Docker.",
          tags: ["Java", "Spring", "Docker"],
        },
      ],
      seeAllOnGithub: "Ver todo en GitHub",
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Educación, experiencia y certificaciones.",
      tabs: {
        education: "Educación",
        work: "Experiencia",
        certs: "Certificaciones",
      },
      education: [
        {
          when: "2021 — 2026",
          where: "Universidad del Cauca",
          what: "Ingeniería de Sistemas",
          detail:
            "Cursando noveno semestre. Énfasis en desarrollo de software, arquitectura y bases de datos.",
        },
      ],
      work: [
        {
          when: "Próximamente",
          where: "Tu empresa puede ir aquí",
          what: "Buscando oportunidades",
          detail:
            "Abierta a prácticas, pasantías o roles junior full stack / AI engineer.",
        },
      ],
      certs: [
        {
          when: "Pendiente",
          where: "Plataforma",
          what: "Agrega tus certificaciones aquí",
          detail: "Edita src/lib/dict.ts para listar las que ya tienes.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Trabajamos juntos?",
      subtitle:
        "Estoy abierta a oportunidades full stack, AI engineering, prácticas o proyectos freelance. Escríbeme.",
      email: "Enviar email",
      cv: "Descargar CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      copy: "Copiar email",
      copied: "¡Copiado!",
    },
    footer: {
      built: "Hecho con Next.js, Tailwind y Framer Motion.",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Journey",
      contact: "Contact",
    },
    hero: {
      masthead: "PORTFOLIO",
      issue: "ISSUE 01",
      year: "2026",
      surname: "Arango Yanza",
      tagline: "Full Stack Developer & AI Engineer",
      role: "Systems Engineering student",
      cta1: "See projects",
      cta2: "Download CV",
      scrollHint: "Scroll to explore",
      stats: [
        { value: "2023", label: "Active since", suffix: "→ now" },
        { value: "39+", label: "Repositories" },
        { value: "20+", label: "Technologies" },
        { value: "ES·EN", label: "Languages" },
      ],
      tiles: {
        stack: {
          title: "TECH STACK",
          subtitle: "20+ tools",
          items: [
            "React", "Next.js", "TypeScript", "Tailwind",
            "Spring", "Node.js", ".NET", "Python",
            "PostgreSQL", "MongoDB", "AWS", "Docker",
            "TensorFlow", "Git",
          ],
        },
        open: { title: "AVAILABLE", status: "Open to work · 2026", sub: "Internships · Junior · Freelance" },
        how: {
          title: "HOW I WORK",
          items: [
            "Learn fast.",
            "Build with care.",
            "Listen to who uses what I make.",
          ],
        },
        exploring: {
          title: "EXPLORING",
          items: ["AI Agents", "System Design", "Product Thinking"],
        },
        code: { title: "ANA.TS" },
      },
    },
    about: {
      eyebrow: "About",
      title: "I build software with purpose.",
      body: [
        "I'm Ana Sofia, a Systems Engineering student at Universidad del Cauca (9th semester). I love building robust, scalable, well-designed full stack web apps.",
        "Right now I'm exploring the intersection between full stack development and AI — agents, embedded ML models and modern architectures. Bilingual (Spanish/English) and open to remote, hybrid or onsite opportunities.",
      ],
      highlights: [
        { label: "University", value: "Universidad del Cauca" },
        { label: "Program", value: "Systems Eng. — 9th semester" },
        { label: "Languages", value: "Spanish · English" },
        { label: "Availability", value: "Remote · Hybrid · Onsite" },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies I use every day.",
      groups: [
        {
          name: "Frontend",
          items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
          name: "Backend",
          items: ["Node.js", "Java + Spring", ".NET", "Go", "Python", "REST", "GraphQL"],
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
        },
        {
          name: "AI & Data",
          items: ["TensorFlow", "Scikit-learn", "LLMs", "Agents"],
        },
        {
          name: "DevOps & Cloud",
          items: ["Docker", "AWS", "Git", "Linux", "Postman", "CI/CD"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "A selection of things I've built.",
      subtitle:
        "Some are live, others sit on my GitHub. Featured ones with live demos coming soon.",
      viewCode: "View code",
      liveDemo: "Live demo",
      placeholderProjects: [
        {
          name: "Featured project #1",
          description:
            "Coming soon: full stack app with auth, dashboard and REST API.",
          tags: ["Next.js", "Node.js", "PostgreSQL"],
        },
        {
          name: "Featured project #2",
          description: "Coming soon: ML model integration with a web UI.",
          tags: ["React", "Python", "TensorFlow"],
        },
        {
          name: "Featured project #3",
          description: "Coming soon: Spring Boot microservice with Docker.",
          tags: ["Java", "Spring", "Docker"],
        },
      ],
      seeAllOnGithub: "See all on GitHub",
    },
    experience: {
      eyebrow: "Journey",
      title: "Education, experience & certifications.",
      tabs: {
        education: "Education",
        work: "Experience",
        certs: "Certifications",
      },
      education: [
        {
          when: "2021 — 2026",
          where: "Universidad del Cauca",
          what: "Systems Engineering",
          detail:
            "Currently in 9th semester. Focus on software development, architecture and databases.",
        },
      ],
      work: [
        {
          when: "Coming up",
          where: "Your company could be here",
          what: "Looking for opportunities",
          detail:
            "Open to internships or junior full stack / AI engineer roles.",
        },
      ],
      certs: [
        {
          when: "Pending",
          where: "Platform",
          what: "Add your certifications here",
          detail: "Edit src/lib/dict.ts to list the ones you already have.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Want to work together?",
      subtitle:
        "Open to full stack, AI engineering, internships or freelance projects. Reach out.",
      email: "Send email",
      cv: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      copy: "Copy email",
      copied: "Copied!",
    },
    footer: {
      built: "Built with Next.js, Tailwind and Framer Motion.",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Dict = typeof dict.es;
