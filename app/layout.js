import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsivNav from "@/components/Home/Navbar/ResponsivNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Roboto({
  weight:['100','300','400','500','700','900'],
  subsets: ["latin"],
  
})

export const metadata = {
  title: "NabdMasr",
  description: "A platform for blood donation in Egypt.",
  keywords: ["blood donation", "egypt", "nabdmasr", "donate blood"],

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsivNav />
        {children}
      </body>
    </html>
  );
}
