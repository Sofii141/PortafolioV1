export type Locale = "es" | "en";

export type StackLevel = "daily" | "frequent" | "exploring";
export type StackItem = { name: string; level: StackLevel };

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
      masthead: "PORTAFOLIO · ANA SOFIA",
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
      eyebrow: "Sobre mí · Pág. 02",
      title: "Construyo software con propósito.",
      lead: "Curiosa de profesión. Ingeniera por elección.",
      body: [
        "Soy Ana Sofia, estudiante de Ingeniería de Sistemas en la Universidad del Cauca (noveno semestre). Me obsesiona el detalle: una transición que se siente bien, un error que no asusta, una API que se lee como prosa.",
        "Vivo entre el frontend bonito y el backend que aguanta. Ahora exploro la intersección con IA — agentes, modelos embebidos y arquitecturas modernas. Bilingüe (ES/EN) y abierta a remoto, híbrido o presencial.",
      ],
      signature: "— hecho con cariño en Popayán",
      values: [
        { label: "Craft", value: "El detalle es el producto." },
        { label: "Curiosity", value: "Siempre con algo nuevo entre manos." },
        { label: "Care", value: "Software que se siente humano." },
      ],
      nowInto: {
        title: "ESTOS DÍAS",
        items: [
          "Construyendo agentes con LLMs",
          "Leyendo sobre system design",
          "Estudiando edge computing",
        ],
      },
      highlights: [
        { label: "Universidad", value: "Universidad del Cauca" },
        { label: "Programa", value: "Ing. de Sistemas — 9° semestre" },
        { label: "Idiomas", value: "Español · Inglés" },
        { label: "Disponibilidad", value: "Remoto · Híbrido · Presencial" },
      ],
    },
    stack: {
      eyebrow: "Stack · Pág. 03",
      title: "Tecnologías que uso todos los días.",
      lead: "Herramientas que conozco a fondo, las que uso seguido y las que estoy explorando.",
      legend: {
        daily: "Diario",
        frequent: "Frecuente",
        exploring: "Explorando",
      },
      groups: [
        {
          name: "Frontend",
          items: [
            { name: "React", level: "daily" as StackLevel },
            { name: "Next.js", level: "daily" as StackLevel },
            { name: "TypeScript", level: "daily" as StackLevel },
            { name: "Tailwind CSS", level: "daily" as StackLevel },
            { name: "HTML5", level: "daily" as StackLevel },
            { name: "CSS3", level: "daily" as StackLevel },
            { name: "Angular", level: "frequent" as StackLevel },
          ],
        },
        {
          name: "Backend",
          items: [
            { name: "Node.js", level: "daily" as StackLevel },
            { name: "Java + Spring", level: "frequent" as StackLevel },
            { name: "Python", level: "frequent" as StackLevel },
            { name: "REST", level: "daily" as StackLevel },
            { name: ".NET", level: "frequent" as StackLevel },
            { name: "Go", level: "exploring" as StackLevel },
            { name: "GraphQL", level: "exploring" as StackLevel },
          ],
        },
        {
          name: "Bases de datos",
          items: [
            { name: "PostgreSQL", level: "daily" as StackLevel },
            { name: "MySQL", level: "frequent" as StackLevel },
            { name: "MongoDB", level: "frequent" as StackLevel },
            { name: "Oracle", level: "frequent" as StackLevel },
          ],
        },
        {
          name: "IA & Datos",
          items: [
            { name: "LLMs", level: "daily" as StackLevel },
            { name: "Agentes", level: "exploring" as StackLevel },
            { name: "TensorFlow", level: "frequent" as StackLevel },
            { name: "Scikit-learn", level: "frequent" as StackLevel },
          ],
        },
        {
          name: "DevOps & Cloud",
          items: [
            { name: "Git", level: "daily" as StackLevel },
            { name: "Docker", level: "frequent" as StackLevel },
            { name: "Linux", level: "frequent" as StackLevel },
            { name: "Postman", level: "daily" as StackLevel },
            { name: "AWS", level: "exploring" as StackLevel },
            { name: "CI/CD", level: "exploring" as StackLevel },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos · Pág. 04",
      title: "Una selección de cosas que he construido.",
      subtitle:
        "Reservados los espacios para los destacados. Pronto cada uno con repo, demo en vivo y caso de estudio.",
      viewCode: "Ver código",
      liveDemo: "Demo",
      reservedLabel: "Espacio reservado",
      comingLabel: "Issue 02 · 2026",
      placeholderProjects: [
        {
          name: "Reservado · Vol. 01",
          kind: "Full Stack Web App",
          description:
            "Aplicación full stack con autenticación, dashboard y API REST. Caso de estudio en preparación.",
          tags: ["Next.js", "Node.js", "PostgreSQL"],
        },
        {
          name: "Reservado · Vol. 02",
          kind: "AI · ML Web",
          description: "Modelo de ML integrado en producto con interfaz web. Próximamente.",
          tags: ["React", "Python", "TensorFlow"],
        },
        {
          name: "Reservado · Vol. 03",
          kind: "Microservicio",
          description: "Microservicio en Spring Boot con Docker y observabilidad.",
          tags: ["Java", "Spring", "Docker"],
        },
      ],
      seeAllOnGithub: "Ver todo en GitHub",
    },
    experience: {
      eyebrow: "Trayectoria · Pág. 05",
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
          when: "Abierta · 2026",
          where: "Buscando el equipo correcto",
          what: "Próxima parada",
          detail:
            "Prácticas, pasantías o rol junior — full stack o AI engineering. Remoto, híbrido o presencial. Si crees que encajamos, hablemos.",
        },
      ],
      certs: [
        {
          when: "En curso",
          where: "Varias plataformas",
          what: "Certificaciones en preparación",
          detail:
            "Trayectoria académica complementada con cursos especializados. El listado completo llega con la próxima edición del CV.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto · Pág. 06",
      title: "¿Trabajamos juntos?",
      subtitle:
        "Estoy abierta a oportunidades full stack, AI engineering, prácticas o proyectos freelance. La caja está siempre abierta.",
      email: "Enviar email",
      cv: "Descargar CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      copy: "Copiar email",
      copied: "¡Copiado!",
      availability: {
        title: "DISPONIBILIDAD",
        timezone: "GMT-5 · Popayán, CO",
        hours: "Lun — Vie · 8am — 6pm",
        response: "Respondo en menos de 24h",
        languages: "Español · Inglés",
      },
      signature: "— Hablemos pronto",
    },
    footer: {
      built: "Hecho con Next.js, Tailwind y Framer Motion.",
      rights: "Todos los derechos reservados.",
      location: "Popayán, Colombia",
      version: "v1.0 · Issue 01 · 2026",
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
      masthead: "PORTFOLIO · ANA SOFIA",
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
      eyebrow: "About · Pg. 02",
      title: "I build software with purpose.",
      lead: "Curious by trade. Engineer by choice.",
      body: [
        "I'm Ana Sofia, a Systems Engineering student at Universidad del Cauca (9th semester). I'm obsessed with the small stuff: a transition that feels right, an error that doesn't scare, an API that reads like prose.",
        "I live between pretty frontends and backends that hold. Right now I'm exploring the intersection with AI — agents, embedded models and modern architectures. Bilingual (ES/EN), open to remote, hybrid or onsite.",
      ],
      signature: "— made with love in Popayán",
      values: [
        { label: "Craft", value: "The detail is the product." },
        { label: "Curiosity", value: "Always something new on the workbench." },
        { label: "Care", value: "Software that feels human." },
      ],
      nowInto: {
        title: "RIGHT NOW",
        items: [
          "Building agents with LLMs",
          "Reading about system design",
          "Studying edge computing",
        ],
      },
      highlights: [
        { label: "University", value: "Universidad del Cauca" },
        { label: "Program", value: "Systems Eng. — 9th semester" },
        { label: "Languages", value: "Spanish · English" },
        { label: "Availability", value: "Remote · Hybrid · Onsite" },
      ],
    },
    stack: {
      eyebrow: "Stack · Pg. 03",
      title: "Technologies I use every day.",
      lead: "Tools I know deep, the ones I use often, and the ones I'm exploring.",
      legend: {
        daily: "Daily",
        frequent: "Frequent",
        exploring: "Exploring",
      },
      groups: [
        {
          name: "Frontend",
          items: [
            { name: "React", level: "daily" as StackLevel },
            { name: "Next.js", level: "daily" as StackLevel },
            { name: "TypeScript", level: "daily" as StackLevel },
            { name: "Tailwind CSS", level: "daily" as StackLevel },
            { name: "HTML5", level: "daily" as StackLevel },
            { name: "CSS3", level: "daily" as StackLevel },
            { name: "Angular", level: "frequent" as StackLevel },
          ],
        },
        {
          name: "Backend",
          items: [
            { name: "Node.js", level: "daily" as StackLevel },
            { name: "Java + Spring", level: "frequent" as StackLevel },
            { name: "Python", level: "frequent" as StackLevel },
            { name: "REST", level: "daily" as StackLevel },
            { name: ".NET", level: "frequent" as StackLevel },
            { name: "Go", level: "exploring" as StackLevel },
            { name: "GraphQL", level: "exploring" as StackLevel },
          ],
        },
        {
          name: "Databases",
          items: [
            { name: "PostgreSQL", level: "daily" as StackLevel },
            { name: "MySQL", level: "frequent" as StackLevel },
            { name: "MongoDB", level: "frequent" as StackLevel },
            { name: "Oracle", level: "frequent" as StackLevel },
          ],
        },
        {
          name: "AI & Data",
          items: [
            { name: "LLMs", level: "daily" as StackLevel },
            { name: "Agents", level: "exploring" as StackLevel },
            { name: "TensorFlow", level: "frequent" as StackLevel },
            { name: "Scikit-learn", level: "frequent" as StackLevel },
          ],
        },
        {
          name: "DevOps & Cloud",
          items: [
            { name: "Git", level: "daily" as StackLevel },
            { name: "Docker", level: "frequent" as StackLevel },
            { name: "Linux", level: "frequent" as StackLevel },
            { name: "Postman", level: "daily" as StackLevel },
            { name: "AWS", level: "exploring" as StackLevel },
            { name: "CI/CD", level: "exploring" as StackLevel },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects · Pg. 04",
      title: "A selection of things I've built.",
      subtitle:
        "Slots reserved for the highlights. Each one will land with repo, live demo and a small case study.",
      viewCode: "View code",
      liveDemo: "Live demo",
      reservedLabel: "Reserved slot",
      comingLabel: "Issue 02 · 2026",
      placeholderProjects: [
        {
          name: "Reserved · Vol. 01",
          kind: "Full Stack Web App",
          description:
            "Full stack app with auth, dashboard and REST API. Case study in progress.",
          tags: ["Next.js", "Node.js", "PostgreSQL"],
        },
        {
          name: "Reserved · Vol. 02",
          kind: "AI · ML Web",
          description: "ML model embedded into a product with a web UI. Coming soon.",
          tags: ["React", "Python", "TensorFlow"],
        },
        {
          name: "Reserved · Vol. 03",
          kind: "Microservice",
          description: "Spring Boot microservice with Docker and observability.",
          tags: ["Java", "Spring", "Docker"],
        },
      ],
      seeAllOnGithub: "See all on GitHub",
    },
    experience: {
      eyebrow: "Journey · Pg. 05",
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
          when: "Open · 2026",
          where: "Looking for the right team",
          what: "Next stop",
          detail:
            "Internships, residencies or junior roles — full stack or AI engineering. Remote, hybrid or onsite. If it feels like a fit, let's talk.",
        },
      ],
      certs: [
        {
          when: "In progress",
          where: "Multiple platforms",
          what: "Certifications loading",
          detail:
            "Academic path paired with specialized courses. Full list drops with the next issue of the CV.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact · Pg. 06",
      title: "Want to work together?",
      subtitle:
        "Open to full stack, AI engineering, internships or freelance projects. The inbox is always open.",
      email: "Send email",
      cv: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      copy: "Copy email",
      copied: "Copied!",
      availability: {
        title: "AVAILABILITY",
        timezone: "GMT-5 · Popayán, CO",
        hours: "Mon — Fri · 8am — 6pm",
        response: "Replies under 24h",
        languages: "Spanish · English",
      },
      signature: "— Talk soon",
    },
    footer: {
      built: "Built with Next.js, Tailwind and Framer Motion.",
      rights: "All rights reserved.",
      location: "Popayán, Colombia",
      version: "v1.0 · Issue 01 · 2026",
    },
  },
} as const;

export type Dict = typeof dict.es;
