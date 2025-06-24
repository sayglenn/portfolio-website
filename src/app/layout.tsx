import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Glenn's Website",
  description: "I'm Glenn, a software engineer from Singapore.",
};

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#212121] text-[#FBFAF5] ${archivo.className} h-screen flex flex-col justify-center items-center gap-8 p-8`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
