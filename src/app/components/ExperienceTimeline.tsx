import Image from "next/image";
import Link from "next/link";

export default function ExperienceTimeline() {
  const experienceStyle =
    "flex flex-row justify-between items-center rounded-xl py-2 px-4 text-[#FBFAF5] w-full gap-3 border-2 border-[#B7CECE] shadow-[0_0_8px_2px_#B7CECE] hover:bg-[#B7CECE] hover:text-[#212121] transition duration-400 hover:-translate-y-[2px]";

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center gap-4">
        <div className="size-4 bg-[#B7CECE] rounded-full"></div>
        <Link href="https://www.tiktok.com/" className="w-full">
          <div className={experienceStyle}>
            <Image
              src="/tiktok.jpeg"
              alt="TikTok"
              width={40}
              height={40}
              className="rounded-3xl"
            ></Image>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <div className="text-lg font-bold">TikTok</div>
                <div className="opacity-70 text-sm">May 2025 - Present</div>
              </div>
              <div className="opacity-60 text-sm">Software Engineer Intern</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-[2px] h-12 bg-[#B7CECE] shadow-[0_0_8px_2px_#B7CECE] opacity-60 ml-2"></div>
      <div className="flex flex-row items-center gap-4">
        <div className="size-4 bg-[#B7CECE] rounded-full"></div>
        <Link
          href="https://nusmods.com/courses/CS2030S/programming-methodology-ii"
          className="w-full"
        >
          <div className={experienceStyle}>
            <Image
              src="/nus.jpeg"
              alt="NUS"
              width={40}
              height={40}
              className="rounded-3xl"
            ></Image>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <div className="text-lg font-bold">NUS</div>
                <div className="opacity-70 text-sm">Jan 2025 - May 2025</div>
              </div>
              <div className="opacity-60 text-sm">
                Undergraduate Teaching Assistant (CS2030S)
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-[2px] h-12 bg-[#B7CECE] shadow-[0_0_8px_2px_#B7CECE] opacity-60 ml-2"></div>
      <div className="flex flex-row items-center gap-4">
        <div className="size-4 bg-[#B7CECE] rounded-full"></div>
        <Link href="https://www.novelship.com/" className="w-full">
          <div className={experienceStyle}>
            <Image
              src="/novelship.jpeg"
              alt="Novelship"
              width={40}
              height={40}
              className="rounded-3xl"
            ></Image>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <div className="text-lg font-bold">Novelship</div>
                <div className="opacity-70 text-sm">May 2024 - Nov 2024</div>
              </div>
              <div className="opacity-60 text-sm">Software Engineer Intern</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
