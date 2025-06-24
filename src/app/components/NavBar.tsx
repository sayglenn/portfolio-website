import Link from "next/link";
import { FaCode } from "react-icons/fa";

export default function NavBar() {
  const linkStyle =
    "cursor-pointer hover:bg-[#B7CECE] hover:text-[#212121] px-3 py-2 rounded-3xl transition duration-400 hover:-translate-y-[2px] hover:shadow-lg shadow-white";
  return (
    <div className="flex flex-row rounded-4xl border-[#B7CECE] border-4 py-4 px-6 w-[70%] justify-between items-center shadow-[0_0_10px_5px_rgba(183,206,206,0.5)] mb-12">
      <div className="text-4xl font-bold hover:text-shadow-md text-shadow-[#B7CECE]">
        <Link href="/">Say Glenn</Link>
      </div>
      <FaCode className="text-3xl" />
      <div className="flex flex-row gap-4 items-center justify-center ml-4 text-xl">
        <Link href="/blog">
          <div className={linkStyle}>Blog</div>
        </Link>
        <Link href="/projects">
          <div className={linkStyle}>Projects</div>
        </Link>
      </div>
    </div>
  );
}
