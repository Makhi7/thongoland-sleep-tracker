import type { Metadata } from "next";
import "../globals.css";
import { inter } from "@/app/fonts/fonts";
import NavHeader from "../ui/header";
import Footer from "../ui/footer";



export const metadata: Metadata = {
  title: "Thongo Land Sleep Tracker",
  description: "Sleep tracking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="wrapper">
          <NavHeader />
            {children}
          <Footer />
        </div> 
      </body>
    </html>
  );
}
