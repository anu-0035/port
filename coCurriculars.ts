interface CoCurricular {
  title: string;
  type: 'hackathon' | 'coding-challenge' | 'community' | 'other';
  organization: string;
  date: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  link?: string;
}

const coCurricularsData: CoCurricular[] = [
  {
    title: "Competitive Programming",
    type: "coding-challenge",
    organization: "LeetCode & GeeksForGeeks",
    date: "2021 - Present",
    description: "Active participant in competitive programming platforms, solving complex algorithmic problems.",
    achievements: [
      "Solved 300+ problems on LeetCode",
      "5⭐ rating on GeeksForGeeks",
      "Ranked in top 10% globally"
    ],
    technologies: ["Data Structures", "Algorithms", "Problem Solving"],
    link: "https://leetcode.com/anubhavprasad"
  },
  {
    title: "Smart India Hackathon Finalist",
    type: "hackathon",
    organization: "Government of India",
    date: "2023",
    description: "Developed innovative solutions for real-world problems in the Smart India Hackathon.",
    achievements: [
      "Finalist in SIH 2023",
      "Developed AI-based solution for education",
      "Led team of 6 members"
    ],
    technologies: ["Python", "Machine Learning", "Web Development"],
    link: "https://www.sih.gov.in"
  },
  {
    title: "German Language Proficiency",
    type: "other",
    organization: "Goethe-Institut",
    date: "2023",
    description: "Achieved A2 level proficiency in German language, demonstrating commitment to global communication.",
    achievements: [
      "Completed A2 level certification",
      "Participated in German cultural exchange programs",
      "Basic conversational fluency"
    ]
  }
];

export default coCurricularsData;