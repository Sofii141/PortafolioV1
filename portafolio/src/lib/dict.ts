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
      manifesto: {
        eyebrow: "Manifiesto",
        quote: "AI doesn't replace creativity—it amplifies it.",
        attribution: "lo que creo sobre el futuro del software",
      },
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
      toolsLabel: "herramientas",
      distribution: "Distribución",
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
        "Proyectos reales: clientes del sector público, IA en producción e investigación premiada.",
      viewCode: "Ver código",
      liveDemo: "Demo en vivo",
      featured: [
        {
          name: "Vigía Cauca",
          kind: "Full-Stack · Cliente real",
          description:
            "Plataforma de gestión georreferenciada de incidentes de seguridad para la Secretaría de Gobierno del Cauca. Lideré el equipo y desarrollé frontend y backend bajo arquitectura de microservicios.",
          tags: ["React", "Leaflet", "Spring Boot", "PostgreSQL"],
          repo: "https://github.com/Sofii141/vigia-cauca",
          demo: "https://vigia-cauca.tics.sedcauca.gov.co/",
          highlight: "Gobernación del Cauca",
        },
        {
          name: "AIMO",
          kind: "IA Generativa · Full-Stack",
          description:
            "Asistente conversacional de apoyo emocional para estudiantes. Sistema multiagente en cascada con LLMs y metodología LLM-as-a-Judge para evaluar empatía en tiempo real.",
          tags: ["Python", "Flask", "React", "LLMs", "AWS Bedrock"],
          repo: "https://github.com/Sofii141/AIMO_V2",
          demo: "https://aimo-amber.vercel.app",
          highlight: "En producción",
        },
        {
          name: "Detección de Demencia · MRI",
          kind: "Deep Learning · Investigación",
          description:
            "Clasificación de niveles de demencia en imágenes de resonancia magnética con redes neuronales convolucionales. Primer puesto en la Feria de Proyectos Académicos de la Universidad del Cauca.",
          tags: ["Python", "CNN", "Deep Learning", "Jupyter"],
          repo: "https://github.com/Sofii141/Clasificacion_Alzheimer_RedesNeuronales",
          demo: "",
          highlight: "🥇 1er Puesto",
        },
        {
          name: "DevDynamics",
          kind: "Simulación · Agentes",
          description:
            "Simulador de dinámicas de equipos de software basado en modelado por agentes. Modela la Ley de Brooks, el burnout y el efecto de la deuda técnica en la velocidad del equipo.",
          tags: ["Python", "Mesa", "React", "Flask"],
          repo: "https://github.com/Sofii141/DevDynamics",
          demo: "",
          highlight: "",
        },
        {
          name: "Sistema de Barbería",
          kind: "Backend · .NET",
          description:
            "Sistema de gestión y reservas con backend en ASP.NET Core bajo arquitectura onion y microservicios, frontend en Angular y Entity Framework para persistencia.",
          tags: ["ASP.NET Core", "Angular", "C#", "Entity Framework"],
          repo: "https://github.com/Sofii141/Software3-Peluqueria",
          demo: "",
          highlight: "",
        },
        {
          name: "Palette",
          kind: "App Móvil",
          description:
            "Museo de arte virtual: explora pinturas del mundo y las historias detrás de ellas. App móvil conectada a la API del Art Institute of Chicago con caché en el backend.",
          tags: ["React Native", "Expo", "Node.js", "TypeScript"],
          repo: "https://github.com/Sofii141/palette-ai",
          demo: "",
          highlight: "",
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
          when: "2022 — 2027",
          where: "Universidad del Cauca",
          what: "Ingeniería de Sistemas",
          detail:
            "Cursando noveno semestre. Promedio acumulado 4.5/5.0 y Matrícula de Honor en 3 ocasiones. Énfasis en desarrollo de software, arquitectura e inteligencia artificial.",
        },
      ],
      work: [
        {
          when: "2026",
          where: "Secretaría de Gobierno del Cauca",
          what: "Líder de equipo & Dev Full-Stack",
          detail:
            "Lideré el desarrollo de Vigía Cauca, plataforma de gestión georreferenciada de incidentes de seguridad, desde el levantamiento de requisitos hasta la entrega formal al cliente.",
        },
        {
          when: "2025 — Presente",
          where: "Semillero de Ciencia de Datos · Unicauca",
          what: "Investigadora",
          detail:
            "Investigación en IA aplicada. Dos ponencias y primer puesto en la Feria de Proyectos Académicos con un proyecto de deep learning para detección de demencia.",
        },
        {
          when: "2025 — Presente",
          where: "Rama Estudiantil IEEE · Unicauca",
          what: "Miembro activa",
          detail:
            "Apoyo en la organización de eventos académicos y técnicos de la rama estudiantil.",
        },
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
          when: "2025 — 2026",
          where: "NVIDIA Deep Learning Institute",
          what: "IA Generativa & Deep Learning",
          detail:
            "Rapid Application Development with LLMs · Building LLM Applications with Prompt Engineering · Generative AI Explained · Transformer-Based NLP · Getting Started with Deep Learning · Accelerating End-to-End Data Science Workflows.",
        },
        {
          when: "2025",
          where: "Cisco Networking Academy",
          what: "Redes & Ciberseguridad",
          detail:
            "CCNA: Introduction to Networks · CCNA: Switching, Routing & Wireless Essentials · Junior Cybersecurity Analyst Career Path · Introduction to Cybersecurity.",
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
      manifesto: {
        eyebrow: "Manifesto",
        quote: "AI doesn't replace creativity—it amplifies it.",
        attribution: "what I believe about the future of software",
      },
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
      toolsLabel: "tools",
      distribution: "Distribution",
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
        "Real projects: public-sector clients, AI in production and award-winning research.",
      viewCode: "View code",
      liveDemo: "Live demo",
      featured: [
        {
          name: "Vigía Cauca",
          kind: "Full-Stack · Real client",
          description:
            "Geo-referenced security-incident management platform for the Cauca Government Secretariat. I led the team and built both frontend and backend under a microservices architecture.",
          tags: ["React", "Leaflet", "Spring Boot", "PostgreSQL"],
          repo: "https://github.com/Sofii141/vigia-cauca",
          demo: "https://vigia-cauca.tics.sedcauca.gov.co/",
          highlight: "Cauca Government",
        },
        {
          name: "AIMO",
          kind: "Generative AI · Full-Stack",
          description:
            "Conversational emotional-support assistant for students. Cascading multi-agent system with LLMs and an LLM-as-a-Judge methodology to assess empathy in real time.",
          tags: ["Python", "Flask", "React", "LLMs", "AWS Bedrock"],
          repo: "https://github.com/Sofii141/AIMO_V2",
          demo: "https://aimo-amber.vercel.app",
          highlight: "In production",
        },
        {
          name: "Dementia Detection · MRI",
          kind: "Deep Learning · Research",
          description:
            "Dementia-level classification on MRI scans using convolutional neural networks. First place at Universidad del Cauca's Academic Projects Fair.",
          tags: ["Python", "CNN", "Deep Learning", "Jupyter"],
          repo: "https://github.com/Sofii141/Clasificacion_Alzheimer_RedesNeuronales",
          demo: "",
          highlight: "🥇 1st Place",
        },
        {
          name: "DevDynamics",
          kind: "Simulation · Agents",
          description:
            "Agent-based simulator of software team dynamics. Models Brooks's Law, developer burnout and how technical debt affects team velocity.",
          tags: ["Python", "Mesa", "React", "Flask"],
          repo: "https://github.com/Sofii141/DevDynamics",
          demo: "",
          highlight: "",
        },
        {
          name: "Barbershop System",
          kind: "Backend · .NET",
          description:
            "Management and booking system with an ASP.NET Core backend under onion + microservices architecture, an Angular frontend and Entity Framework for persistence.",
          tags: ["ASP.NET Core", "Angular", "C#", "Entity Framework"],
          repo: "https://github.com/Sofii141/Software3-Peluqueria",
          demo: "",
          highlight: "",
        },
        {
          name: "Palette",
          kind: "Mobile App",
          description:
            "Virtual art museum: explore paintings from around the world and the stories behind them. Mobile app wired to the Art Institute of Chicago API with backend caching.",
          tags: ["React Native", "Expo", "Node.js", "TypeScript"],
          repo: "https://github.com/Sofii141/palette-ai",
          demo: "",
          highlight: "",
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
          when: "2022 — 2027",
          where: "Universidad del Cauca",
          what: "Systems Engineering",
          detail:
            "Currently in 9th semester. GPA 4.5/5.0 and Dean's List Scholarship (Matrícula de Honor) awarded three times. Focus on software development, architecture and artificial intelligence.",
        },
      ],
      work: [
        {
          when: "2026",
          where: "Cauca Government Secretariat",
          what: "Team Lead & Full-Stack Developer",
          detail:
            "Led the development of Vigía Cauca, a geo-referenced security-incident management platform, from requirements gathering to formal client handover.",
        },
        {
          when: "2025 — Present",
          where: "Data Science Research Group · Unicauca",
          what: "Researcher",
          detail:
            "Applied AI research. Two conference talks and first place at the Academic Projects Fair with a deep-learning project for dementia detection.",
        },
        {
          when: "2025 — Present",
          where: "IEEE Student Branch · Unicauca",
          what: "Active Member",
          detail:
            "Support in organizing academic and technical events for the student branch.",
        },
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
          when: "2025 — 2026",
          where: "NVIDIA Deep Learning Institute",
          what: "Generative AI & Deep Learning",
          detail:
            "Rapid Application Development with LLMs · Building LLM Applications with Prompt Engineering · Generative AI Explained · Transformer-Based NLP · Getting Started with Deep Learning · Accelerating End-to-End Data Science Workflows.",
        },
        {
          when: "2025",
          where: "Cisco Networking Academy",
          what: "Networking & Cybersecurity",
          detail:
            "CCNA: Introduction to Networks · CCNA: Switching, Routing & Wireless Essentials · Junior Cybersecurity Analyst Career Path · Introduction to Cybersecurity.",
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
