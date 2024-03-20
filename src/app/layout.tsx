import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memo Your Password",
  description: "Created by Jian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>  
        <div className=" container w-1/2 mt-10 pb-5 bg-slate-500 rounded-2xl text-center">
          <NavBar />
          <div className="mx-full my-4">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
