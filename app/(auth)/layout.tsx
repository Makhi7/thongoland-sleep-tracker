import type { Metadata } from "next";
import "../globals.css";
import { inter } from "@/app/fonts/fonts";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Sleep tracking application",
};


export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
          <body className={`${inter.className} antialiased`}>
            <div className="wrapper">
              {children}
            </div>
          </body>
      </html> 
    )
  }