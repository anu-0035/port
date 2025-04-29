interface Experience {
  title: string;
  company: string;
  logo?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

const experienceData: Experience[] = [
  {
    title: "Automation & AI Enthusiast",
    company: "Self-Directed Projects",
    startDate: "2022",
    endDate: "Present",
    description: "Developing innovative solutions using automation and artificial intelligence technologies.",
    achievements: [
      "Created Genius Review Bot for automated code review and analysis",
      "Implemented Facial Recognition Attendance System using Python and OpenCV",
      "Developed Network Intrusion Detection System (NIDS) using machine learning"
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning", "Automation"]
  }
];

export default experienceData;