export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  about: string;
  mission: string;
  avatar: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export const profile: Profile = {
  name: "Jai Hebel",
  title: "AI Strategist & Data Scientist",
  email: "jai.hebel@gmail.com",
  location: "San Francisco, CA (Open to Remote)",
  about: "Data scientist and AI specialist with a background in advisory, education, and building custom AI applications. Experienced in AI strategy, agents, data analytics, software, web & app development, machine learning, biomedical research, and medical imaging.",
  mission: "As an AI strategist, I am driven by a passion for creating high-impact solutions with collaborative and innovative teams to solve complex problems and make a positive difference in human health and happiness through cutting-edge AI technology.",
  avatar: "/images/headshot.jpeg",
  social: {
    github: "https://github.com/jkhebel",
    linkedin: "https://linkedin.com/in/jkhebel",
  }
};

export const experiences: Experience[] = [
  {
    id: "reena-ai",
    company: "reena.ai",
    position: "Chief AI Scientist (Technical Co-Founder)",
    location: "San Francisco, CA",
    startDate: "March 2025",
    current: true,
    description: "Leading AI strategy and system architecture for an early-stage healthtech startup, overseeing decisions on tooling, data governance, model development, privacy, scalable deployment, and AI innovation.",
    technologies: ["OpenAI Agent SDK", "Twilio", "11Labs", "AI Strategy", "Data Governance", "Model Development"],
    achievements: [
      "Developed Agentic Voice Platform for Dental Operatories with practice management integration, scheduling automation, follow-ups, patient education, and integrated hardware platform",
      "Head of AI strategy and system architecture for an early-stage healthtech startup",
      "Overseeing decisions on tooling, data governance, model development, privacy, scalable deployment, and AI innovation"
    ]
  },
  {
    id: "info-tech",
    company: "Info-Tech Research Group",
    position: "AI Instructor (Cybersecurity)",
    location: "Remote",
    startDate: "February 2024",
    current: true,
    description: "Providing AI Strategy Training and Advisory, delivering 1:1 coaching to high-profile C-Suite executives on translating complex AI concepts into actionable AI strategy deliverables for enterprise adoption.",
    technologies: ["AI Strategy", "OpenAI Agent SDK", "Responsible AI", "Data Governance", "Enterprise Training"],
    achievements: [
      "Co-developed the Agentic Rapid Prototyping Service Platform (OpenAI Agent SDK), a robust agentic platform for facilitators to help clients build custom agentic solutions for niche use cases in a rapid 4-day workshop",
      "Designed and delivered the AI Workforce Development Program, training hundreds of IT professionals (including >10,000 employees for the US Department of Labor) on AI foundations, governance, data, strategy, risk management, and responsible AI as the sole instructor",
      "Providing 1:1 coaching to high-profile C-Suite executives on translating complex AI concepts into actionable AI strategy deliverables"
    ]
  },
  {
    id: "bpk",
    company: "BPK",
    position: "Senior Software Engineer (Contract)",
    location: "Remote",
    startDate: "August 2023",
    endDate: "December 2023",
    current: false,
    description: "Spearheaded cutting-edge LLM-powered Conversational Voice Bot development, innovating patient benefit verifications by autonomously liaising with dental insurance companies over phone.",
    technologies: ["LLM", "Twilio", "HuggingFace Models", "OpenAI API", "Flask", "React", "WebSockets"],
    achievements: [
      "Spearheaded a cutting-edge LLM-powered Conversational Voice Bot (Twilio, HuggingFace Models), innovating patient benefit verifications by autonomously liaising with dental insurance companies over phone, cutting time and costs for reception protocols",
      "Prototyped the interactive conversation agent, employing real-time audio transcription over websockets with OpenAI API integration and advanced text-to-speech, producing natural LLM-powered conversation",
      "Engineered a hosted Flask server integrated with Twilio API for orchestrating conference sessions, live call streaming, and experiment monitoring, controlled by a React web console and command-line tool"
    ]
  },
  {
    id: "velmeni-ai",
    company: "Velmeni AI",
    position: "Data Scientist (Contract)",
    location: "Remote",
    startDate: "March 2023",
    endDate: "August 2023",
    current: false,
    description: "Trained Visual Transformer networks for 3D cyst and TMJ segmentation in dental CT images as a new feature in a clinical diagnostic and treatment planning platform.",
    technologies: ["Visual Transformer networks (UNETRS)", "3D Cone Beam CT", "Docker", "Computer Vision", "Deep Learning"],
    achievements: [
      "Trained Visual Transformer networks (UNETRS) for 3D cyst and TMJ segmentation in dental CT images as a new feature in a clinical diagnostic and treatment planning platform",
      "Coded data ingestion, preprocessing, and sliding-window patch orchestration of 3D Cone Beam CT data, for hosted dataset management and experiment tracking to produce custom optimized models",
      "Deployed containerized production models for GUI app, achieving 88% mean DICE accuracy"
    ]
  },
  {
    id: "chan-zuckerberg",
    company: "Chan Zuckerberg Biohub",
    position: "Data Engineer",
    location: "San Francisco, CA",
    startDate: "August 2022",
    endDate: "March 2023",
    current: false,
    description: "Designed deep learning pipelines for 3D+time microscopy images to track cells, supporting developmental biology research.",
    technologies: ["Deep Learning", "3D+time Microscopy", "Computer Vision", "Python", "Data Pipelines"],
    achievements: [
      "Designed a deep learning pipeline for 3D+time microscopy images to track cells, supporting developmental biology research",
      "Piloted a data conversion pipeline for spatial transcriptomics samples",
      "Supported new product development for an organization-wide hub for experiment tracking and data aggregation (data portals, submission forms, multi-modal data management)",
      "Upgraded a Python toolkit for 2D cellular image segmentation with a heat diffusion model for 3D and 4D images, aiding computer vision research in microscopy"
    ]
  },
  {
    id: "trutag",
    company: "TruTag Technologies",
    position: "Machine Learning Engineer",
    location: "Remote",
    startDate: "August 2020",
    endDate: "February 2022",
    current: false,
    description: "Designed custom computer vision machine learning models and software pipelines for hyperspectral imaging hardware.",
    technologies: ["Computer Vision", "Machine Learning", "Hyperspectral Imaging", "AWS", "Python", "C++"],
    achievements: [
      "Designed custom computer vision machine learning models and software pipelines for hyperspectral imaging hardware",
      "Drove sales by piloting studies to prove imaging solution success metrics",
      "Applied statistical and machine learning analysis to improve study success rates, leading to contracts with multi-billion-dollar organizations (Kraft, Driscoll's, PepsiCo)",
      "Expanded product lines by implementing deep learning solutions (AWS) to read and decode novel hyperspectral tags with a smartphone",
      "Built a Python toolkit for handling and translating analysis methods for custom hyperspectral image data (~10GB/image) to accelerate project timelines",
      "Extended product features by collaborating with a C++ application engineer to integrate regression and clustering algorithms into a GUI application"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "dental-voice-bot",
    title: "LLM-Powered Dental Voice Bot",
    description: "Developed a cutting-edge conversational voice bot for dental insurance verification, autonomously liaising with insurance companies over phone calls using real-time audio transcription and advanced text-to-speech.",
    image: "/images/bts.png",
    technologies: ["LLM", "Twilio", "OpenAI API", "Flask", "React", "WebSockets"],
    github: "https://github.com/jkhebel/dental-voice-bot",
    featured: true,
  },
  {
    id: "agentic-platform",
    title: "Agentic Rapid Prototyping Platform",
    description: "Co-developed a robust agentic platform for facilitators to help clients build custom agentic solutions for niche use cases in rapid 4-day workshops using OpenAI Agent SDK.",
    image: "/images/proprionoise.jpg",
    technologies: ["OpenAI Agent SDK", "AI Strategy", "Rapid Prototyping", "Enterprise Solutions"],
    featured: true,
  },
  {
    id: "3d-segmentation",
    title: "3D Medical Image Segmentation",
    description: "Trained Visual Transformer networks (UNETRS) for 3D cyst and TMJ segmentation in dental CT images, achieving 88% mean DICE accuracy for clinical diagnostic applications.",
    image: "/images/bts.png",
    technologies: ["Visual Transformer (UNETRS)", "3D Cone Beam CT", "Docker", "Computer Vision"],
    featured: true,
  },
  {
    id: "hyperspectral-imaging",
    title: "Hyperspectral Imaging Solutions",
    description: "Designed custom computer vision ML models for hyperspectral imaging hardware, leading to contracts with major organizations like Kraft, Driscoll's, and PepsiCo.",
    image: "/images/proprionoise.jpg",
    technologies: ["Computer Vision", "Machine Learning", "Hyperspectral Imaging", "AWS", "Python"],
    featured: true,
  },
  {
    id: "cell-tracking",
    title: "3D+Time Cell Tracking Pipeline",
    description: "Designed deep learning pipelines for 3D+time microscopy images to track cells, supporting developmental biology research with advanced computer vision techniques.",
    image: "/images/bts.png",
    technologies: ["Deep Learning", "3D+time Microscopy", "Computer Vision", "Python"],
    featured: true,
  }
];

export const skills: Skill[] = [
  {
    category: "Software Development",
    skills: ["OpenAI", "Langchain", "Llamaindex", "Keras", "TensorFlow", "PyTorch", "Numpy", "Pandas", "Scikit-Learn", "Python", "C++", "Java", "MATLAB", "R", "JavaScript", "React", "Node.js", "PHP", "MySQL", "PostgreSQL", "Neo4j", "AWS", "GCP", "Azure", "Linux", "Spark"]
  },
  {
    category: "AI and Data Science",
    skills: ["AI Strategy & Responsible AI", "Agentic Prototyping (OpenAI)", "LLMs (Explainable Systems)", "Conversation Agents (Telephony)", "Computer Vision Deep Learning", "AI Research and Development", "Biomedical AI Applications", "Narrow AI Algorithms", "Statistics", "Analytics", "Visualization"]
  },
  {
    category: "Specialized Technologies",
    skills: ["3D+Time Microscopy", "Hyperspectral Imaging", "Medical CT Imaging", "Twilio", "WebSockets", "Docker", "Flask", "Real-time Audio Processing", "Spatial Transcriptomics", "Biomedical Engineering"]
  },
  {
    category: "Enterprise & Leadership",
    skills: ["AI Strategy Consulting", "C-Suite Executive Coaching", "Enterprise AI Training", "Data Governance", "Risk Management", "Team Leadership", "Product Development", "Sales & Business Development"]
  }
];

export const education: Education[] = [
  {
    degree: "AI Fellow (Machine Learning)",
    institution: "Insight Data Science",
    year: "May 2020",
    description: "Postgraduate industry fellowship in AI and Machine Learning"
  },
  {
    degree: "M.Eng Biomedical Engineering",
    institution: "McGill University",
    year: "December 2019",
    description: "Neuroimaging & Surgical Technologies; Thesis: 'Current state-of-the-art for glioblastoma segmentation using deep convolutional networks'"
  },
  {
    degree: "BSE Biomedical Engineering & BSc Psychology",
    institution: "Arizona State University",
    year: "May 2016",
    description: "Visuomotor Learning Laboratory"
  }
];
