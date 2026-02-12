export const profile = {
  name: "Kaveeshvar S",
  headline:
    "Python-Focused AI Engineer & Data Analyst — Agent-Driven Systems, LLM Evaluation, System Design",
  summary:
    "Python-focused AI Engineer and Data Analyst with experience building production-grade, agent-driven systems and enterprise AI solutions. Hands-on expertise in LLM evaluation, memory-aware agent design, API-driven architectures, and end-to-end deployment workflows. Proven ability to design, benchmark, and refine AI systems in cross-functional environments with a strong foundation in system design and scalable engineering practices.",
  contact: {
    phone: "+91 63825-97744",
    email: "kaveeshvar6@gmail.com",
    linkedin: "https://www.linkedin.com/in/Kaveeshvar-S/",
    github: "https://github.com/Kaveeshvar",
  },
  education: [
    {
      title:
        "B.E - Computer Science Engineering | Bannari Amman Institute Of Technology, Sathyamangalam",
      meta: "CGPA: 7.8",
    },
    {
      title: "XII (CBSE) | Bannari Amman Public School, Sathyamangalam.",
      meta: "Percentage: 81%",
    },
  ],
  experience: [
    {
      role: "Delivery Data Analyst & Pod Lead",
      company: "Turing Inc.",
      period: "July '24 - Feb '26",
      bullets: [
        "Evaluated and analyzed LLM behavior across diverse tasks, focusing on reasoning quality, failure modes, and safety constraints.",
        "Worked closely with AI systems to assess agent responses under varying prompt and context conditions.",
        "Collaborated cross-functionally with AI and backend teams to refine evaluation criteria and feedback loops for model improvement.",
        "Led a pod of analysts while maintaining hands-on involvement in model evaluation and quality benchmarking.",
      ],
    },
    {
      role: "Freelance Technical Support & Data Analyst",
      company: "Prep-Ally Educational Services",
      period: "July '25 - Nov '25",
      bullets: [
        "Delivered automation and reporting solutions for academic operations using Python, Google Apps Script, and Google Sheets.",
        "Built dashboards and validation workflows to improve reporting accuracy and operational visibility.",
        "Worked closely with management to understand requirements and translate them into scalable technical solutions.",
      ],
    },
  ],
  internship: [
    {
      role: "Front-End Developer Intern",
      company: "Ashok Leyland R&D Pvt Ltd",
      period: "Apr '23 - Apr '24",
      bullets: [
        "Built and deployed a full-stack interface for an internal AI-powered chatbot used in R&D workflows.",
        "Integrated frontend components with backend APIs and AI model outputs for real-time interaction.",
        "Worked on locally hosted LLM setup to support data privacy requirements.",
      ],
    },
  ],
  projects: [
    {
      title: "Memory-Aware Chat Assistant",
      period: "2025",
      description:
        "Designed and built a memory-aware conversational agent that stores, retrieves, and updates long-term conversation state using structured JSON memory. Implemented agent memory architecture enabling contextual recall across sessions (stateful interactions).",
      tech: ["JavaScript", "Node.js", "Web APIs", "JSON", "GitHub API", "Vercel"],
      role: "Full-Stack Engineer",
      highlight: "Production-Grade AI with Persistent Memory",
      video: null,
    },
    {
      title: "Turf-Finder",
      period: "2025",
      description:
        "Built a CLI-based agent that interacts with real-world environments via Google Maps & Places APIs. Designed a tool-calling workflow where the agent accepts user intent, queries external APIs, parses structured responses, and returns ranked, actionable results.",
      tech: ["Node.js", "JavaScript", "Google Maps API", "REST APIs"],
      role: "Backend Engineer",
      highlight: "Agent-Based CLI Tool Using External APIs",
      video: null,
    },
    {
      title: "Retail Car Price Prediction with Damage Detection",
      period: "2022",
      description:
        "Built a web interface for a machine learning application that predicts retail car prices based on user inputs and uploaded images. As a team, developed an ML model using Flask API that processes car details and images to predict retail price.",
      tech: ["Python", "HTML", "CSS", "JavaScript", "PHP"],
      role: "Frontend Engineer (ML-integrated application)",
      highlight: "Retail car price prediction",
      video: "/videos/retail-car-price.mp4",
    },
  ],
  skills: {
    "Languages & Runtime": ["JavaScript (ES6+)", "Python", "TypeScript (working knowledge)", "C", "C++", "PHP"],
    "Frontend": ["React", "HTML5", "CSS3"],
    "Backend & APIs": ["Node.js", "REST APIs", "JSON-based systems", "Agent architectures"],
    "AI / Data": ["LLM Evaluation", "Agent Memory Design", "Tool-Calling Agents", "Prompt Engineering"],
    "Tools": ["Git", "GitHub", "Vercel", "Firebase", "Google APIs", "Docker (foundational understanding)"],
  },
  achievements: [
    {
      title: "Winner — Visai International Hackathon",
      detail:
        "Secured 1st place with ₹8000 cash prize for the project Virtual Librarian (Vel Tech University).",
    },
  ],
  languages: ["English (R/W/S)", "Tamil (R/W/S)", "Kannada (S)"],
};
