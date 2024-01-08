import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Backdrop from "@/components/Backdrop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maulik Sompura | Resume",
  description:
    "Experienced Software Engineer with expertise in web development. Specializes in scalable backend systems using Node.js, frontend development with React, and database integration. Proficient in deploying on AWS. Passionate about tackling challenging projects and developing innovative software solutions.",
  keywords: [
    "Full-stack",
    "Developer",
    "Computer Engineer",
    "Node",
    "javascript",
    "typescript",
    "aws",
    "next",
    "nest",
    "express",
    "graphQL",
    "vite",
    "redis",
    "database",
    "microservices",
    "events",
    "mysql",
    "dynamodb",
    "mongo",
    "react",
    "vue",
    "angular",
    "google",
    "mern",
    "job",
    "career",
    "opportunity",
    "salary",
    "resume",
    "cv",
    "automation",
    "AI",
    "Coding",
    "Programming",
    "Development",
  ],
  authors: [{ name: "Maulik Sompura", url: "https://mauliksompura.in" }],
  creator: "Maulik Sompura",
  openGraph: {
    images: "/banner.png",
    description:
      "A Full-stack Javascript Developer. Always looking forward to great opportunities.",
    url: "https://resume.mauliksompura.in",
    title: "Maulik Sompura | Resume",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
