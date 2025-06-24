import Link from "next/link";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import ExperienceTimeline from "./components/ExperienceTimeline";

export default function Home() {
  const contactStyle =
    "text-2xl border-[#FBFAF5] text-[#FBFAF5] border-2 flex gap-5 justify-center items-center size-[48px] rounded-3xl hover:bg-[#B7CECE] hover:text-[#212121] transition duration-400 hover:-translate-y-[2px] hover:shadow-md shadow-[#FBFAF5]";

  const Introduction = () => (
    <div className="flex flex-col justify-center w-[90%]">
      <div className="text-xl">
        Hi, I&apos;m Glenn. Currently Year 3 Computer Science at National
        University of Singapore (NUS).
      </div>
      <div className="text-xl mt-6">
        Currently, I&apos;m interning at{" "}
        <Link
          href="https://www.tiktok.com/"
          className="hover:underline text-[#B7CECE]"
        >
          TikTok
        </Link>{" "}
        as a Software Engineer Intern. I&apos;m working in the Global E-Commerce
        team, specifically on the TikTok Shop platform.
      </div>
      <div className="text-xl mt-6">
        I&apos;m also invested in learning about modern optimisations and
        practices in C++ and I&apos;m always welcome to new opportunities and
        challenges.
      </div>
      <div className="text-xl mt-6">
        I&apos;m on the lookout for internship opportunities for Fall 2025
        onwards.
      </div>
    </div>
  );

  const ContactInfo = () => (
    <div className="flex flex-col w-full gap-5">
      <div className="font-bold text-3xl text-[#B7CECE]">Contact Me</div>
      <div className="flex flex-row gap-6">
        <Link href="https://linkedin.com/in/sayglenn">
          <div className={contactStyle}>
            <FaLinkedinIn />
          </div>
        </Link>
        <Link href="https://github.com/sayglenn">
          <div className={contactStyle}>
            <FaGithub />
          </div>
        </Link>
        <Link href="mailto:sayglenn@gmail.com">
          <div className={contactStyle}>
            <MdOutlineEmail />
          </div>
        </Link>
      </div>
    </div>
  );

  const technologies = [
    { name: "C++", image: "/cpp.svg" },
    { name: "Python", image: "/python.svg" },
    { name: "TypeScript", image: "/typescript.svg" },
    { name: "Java", image: "/java.svg" },
    { name: "React", image: "/react.svg" },
    { name: "Node.js", image: "/node.svg" },
    { name: "PostgreSQL", image: "/postgresql.svg" },
    { name: "Redis", image: "/redis.svg" },
    { name: "Next.js", image: "/next.svg" },
    { name: "Git", image: "/git.svg" },
    { name: "Supabase", image: "/supabase.svg" },
    { name: "MongoDB", image: "/mongo.svg" },
  ];

  return (
    <>
      <Introduction />

      <div className="w-[94%] h-px bg-[#B7CECE] shadow-[0_0_8px_2px_#B7CECE] opacity-60"></div>

      <div className="flex flex-row justify-between w-[90%]">
        <div className="flex flex-col w-full items-start pr-12">
          <div className="font-bold text-3xl text-[#B7CECE] mb-5">
            Experience
          </div>
          <ExperienceTimeline />
        </div>
        <div className="w-px bg-[#B7CECE] shadow-[0_0_8px_2px_#B7CECE] opacity-60 mr-12"></div>
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-col gap-5">
            <div className="font-bold text-3xl text-[#B7CECE]">
              Technologies
            </div>
            <div className="flex flex-wrap items-center h-full">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center mr-8 mb-4 w-21 h-21 text-[#FBFAF5] hover:bg-[#B7CECE] hover:shadow-md transition duration-400 rounded-lg hover:text-[#212121]"
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <div className="text-center mt-3 text-sm opacity-60">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-[#B7CECE] shadow-[0_0_8px_2px_#B7CECE] opacity-60 mt-3 mb-6"></div>

          <ContactInfo />
        </div>
      </div>
    </>
  );
}
