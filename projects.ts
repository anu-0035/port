interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
  features?: string[];
  challenges?: string;
}

const projects: Project[] = [
  {
    id: "genius-review-bot",
    title: "Genius Review Bot",
    description: "An automated code review system that analyzes code quality, identifies potential bugs, and suggests improvements using AI.",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Machine Learning", "Natural Language Processing", "Git API"],
    github: "https://github.com/anubhavprasad/genius-review-bot",
    category: "AI/ML",
    features: [
      "Automated code quality analysis",
      "Bug detection and suggestions",
      "Integration with Git platforms",
      "Custom rule configuration"
    ],
    challenges: "Implementing accurate code analysis algorithms and handling various programming languages effectively."
  },
  {
    id: "facial-recognition-attendance",
    title: "Facial Recognition Attendance System",
    description: "A smart attendance system using facial recognition technology to automate student attendance tracking.",
    image: "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "OpenCV", "Deep Learning", "SQLite"],
    github: "https://github.com/anubhavprasad/facial-recognition-attendance",
    category: "Computer Vision",
    features: [
      "Real-time face detection",
      "Automated attendance marking",
      "Database integration",
      "Report generation"
    ],
    challenges: "Ensuring accurate face detection in various lighting conditions and handling multiple faces simultaneously."
  },
  {
    id: "network-ids",
    title: "Network Intrusion Detection System",
    description: "An intelligent system for detecting and preventing network intrusions using machine learning algorithms.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Machine Learning", "Wireshark", "Network Security"],
    github: "https://github.com/anubhavprasad/network-ids",
    category: "Cybersecurity",
    features: [
      "Real-time traffic analysis",
      "ML-based threat detection",
      "Alert system",
      "Traffic logging"
    ],
    challenges: "Developing accurate threat detection models and handling high-volume network traffic in real-time."
  }
];

export default projects;