interface Certification {
  title: string;
  issuer: string;
  date: string;
  expires?: string;
  description: string;
  skills?: string[];
  credentialUrl?: string;
}

const certificationsData: Certification[] = [
  {
    title: "Generative AI",
    issuer: "Google Cloud",
    date: "2023",
    description: "Comprehensive training in generative AI technologies and applications.",
    skills: ["AI/ML", "Neural Networks", "Natural Language Processing"]
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    date: "2023",
    description: "Foundation in ethical hacking principles and cybersecurity practices.",
    skills: ["Penetration Testing", "Network Security", "Vulnerability Assessment"]
  },
  {
    title: "Programming in Python",
    issuer: "NPTEL",
    date: "2022",
    description: "Advanced Python programming concepts and applications.",
    skills: ["Python", "Data Structures", "Algorithms"]
  },
  {
    title: "German Language A2 Level",
    issuer: "Goethe-Institut",
    date: "2023",
    description: "Proficiency in German language at A2 level of the CEFR framework.",
    skills: ["German Language", "Communication", "Cultural Understanding"]
  }
];

export default certificationsData;