interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      },
      {
        name: "HTML/CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "Automation Anywhere",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
      },
      {
        name: "Wireshark",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
      }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      {
        name: "Problem Solving",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
      },
      {
        name: "Team Leadership",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        name: "Communication",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
      }
    ]
  }
];

export default skillsData;