"use client";

import { EducationItemRenderer } from "@/components/EducationRenderer";
import { ExperienceItemRenderer } from "@/components/ExperienceRenderer";
import { ProjectItemRenderer } from "@/components/ProjectRenderer";
import { EducationItem } from "@/dto/EducationItem.dto";
import { ExperienceItem } from "@/dto/ExperienceItem.dto";
import { ProjectItem } from "@/dto/ProjectItem.dto";
import { SoftSkillItem } from "@/dto/SoftSkillItem.dto";
import Image from "next/image";
import { useState, useEffect } from "react";

const projectData: ProjectItem[] = [
  {
    name: "IPTX",
    description:
      "An Android application that allows you to use your Xtream Codes IPTV subscription on your phone.",
    technologies: [
      "React Native",
      "PostgreSQL",
      "SQLite",
      "Bun",
      "Go",
      "Tailwind",
      "Github Actions",
      "Xtream Codes API",
    ],
    link: "https://iptx.us",
  },
  {
    name: "Aviate",
    description:
      "A flight companion application that allows you to track your flights and get real-time information (and more).",
    technologies: [
      "React Native",
      "NextJS",
      "PostgreSQL",
      "SQLite",
      "Rust",
      "Go",
      "Bun",
      "Tailwind",
      "XCode",
      "Python",
      "AWS",
      "Web scraping",
    ],
    link: "https://aviate.to",
  },
];

const softSkillsData: SoftSkillItem[] = [
  { name: "Autonomous" },
  { name: "Organized" },
  { name: "Fast Learner" },
  { name: "Problem Solver" },
  { name: "Communication" },
  { name: "Teamwork" },
  { name: "Attention to Detail" },
];

const experienceData: ExperienceItem[] = [
  {
    company: "SkNetwork",
    period: "2018 - Present",
    title: "Founder & Lead Developer",
    description:
      "Founded and developed a Minecraft Network from the ground up. Managed a small team of developers and staff members.",
    achievements: [
      "Developed custom plugins and mods for the Minecraft server in Java",
      "Managed a Dedicated Server with multiple game servers and services",
      "Developed a custom website and forum for the community",
    ],
  },
  {
    company: "Devolab",
    period: "2024",
    title: "Software Engineer (Intern)",
    description:
      "Assisted in the development of OnTrace and DALAviation's website.",
    achievements: [
      "Developed a website using VueJS and TailwindCSS for DALAviation",
      "Created a cross-platform mobile application using React Native for OnTrace",
      "Created a custom browser with privacy in mind and easy access to OnTrace and Vinted's services",
    ],
  },
  {
    company: "Simorep & Cie.",
    period: "2022",
    title: "Intern",
    description:
      "Assisted in the development of quality indicators",
    achievements: [
      "Developed an application for their Qualibus",
      "Digitalized the Quality Awareness Training for their employees",
      "Created multiple quality indicators using MicroStrategy",
    ],
  },
];

const educationData: EducationItem[] = [
  {
    institution: "Southern Illinois University Edwardsville",
    period: "2024 - 2026 (Expected)",
    degree: "Master's in Computer Science",
    description:
      "Transferred from Epitech to SIUE to get a Master's degree in Computer Science.",
  },
  {
    institution: "Epitech Bordeaux",
    period: "2021 - 2025",
    degree: "Bachelor in Information Technology",
    description:
      "Intensive coding and project-based curriculum. Specialized in software development.",
  },
];

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-8 bg-white shadow-lg md:sticky md:top-0 md:h-screen md:overflow-auto">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-100 shadow-md">
            <Image
              src="/pfp.jpg"
              alt="Highest"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Highest</h1>
          <p className="text-blue-600 font-medium mt-1 mb-6">
            Software Developer
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <img
                src="https://go-skill-icons.vercel.app/api/icons?i=typescript,docker,java,go,git,dotnet,javascript,python,maven,c,cpp,cs,gradle,next,nest,vue,reactnative,aws,githubactions,github,mongodb,postgresql,tailwind,rust,androidstudio,bun,react,nuxt&perline=7"
                alt="Skills"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              {softSkillsData.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
              Contact
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+33782655799" className="hover:text-blue-600">
                  +33 7 82 65 57 99
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+16189159119" className="hover:text-blue-600">
                  +1 618 915 9119
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                <a
                  href="https://github.com/highesttt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  github.com/highesttt
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a
                  href="mailto:klelong@siue.edu"
                  className="hover:text-blue-600"
                >
                  klelong@siue.edu
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-4 mt-4 border-t border-gray-200">
            <button
              onClick={() => window.print()}

            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 bg-white md:bg-gray-50 overflow-y-auto">
        {/* About Me Section */}
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Frenchman looking to make a difference in the world through
            technology and live in the US. I'm personally more of a backend
            developer, and work with technologies like Go, Java, C++ and Python,
            however, I've done my fair share of frontend work with NextJS (web)
            and React Native (mobile). I'm currently working on multiple
            projects, including IPTX and Aviate which you can find below.
          </p>
        </section>

        {/* Experience Section */}
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Professional Experience
          </h2>
          {experienceData.map((experience, index) => (
            <ExperienceItemRenderer
              key={index}
              item={experience}
              index={index}
              show={show}
            />
          ))}
        </section>

        {/* Education Section */}
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Education
          </h2>
          {educationData.map((education, index) => (
            <EducationItemRenderer
              key={index}
              item={education}
              index={index}
              show={show}
            />
          ))}
        </section>

        {/* Projects Section */}
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project, index) => (
              <ProjectItemRenderer
                key={index}
                item={project}
                index={index}
                show={show}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
