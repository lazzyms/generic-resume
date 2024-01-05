import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Backdrop from "@/components/Backdrop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maulik Sompura | Resume",
  description:
    "Dedicated and self-driven Software Engineer with over 6 years of experience specializing in web development. Expert in constructing highly scalable backend systems using Node.js (Express, GraphQL, Nest.js), creating pixel-perfect frontend with React (Next.js, Vite, CRA), integrating high-performance databases such as MongoDB, DynamoDB, MySQL, and Redis, and deploying on AWS for maximum scalability. Eager to tackle challenging projects and committed to leveraging technical skills to develop cutting-edge software solutions.",
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
