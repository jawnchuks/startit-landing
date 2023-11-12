import Navbar from "@/components/Layout/Navbar/Navbar";
import "./globals.css";
import { Providers } from "@/lib/utils/providers";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Startit: ",
  description: "",
  favicon: "./favicon.ico",
  image:'../public/icons/cribbase-logo-sm.svg',
  url: 'https://startit.africa',
  type: 'website',
  keywords: ["Startup", "Funding", "Investments", "Social"],
  twitterUsername: '',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className=" max-w-screen mx-auto bg-primaryWhite">
        <Providers>
          <div className="max-w-[1560px] mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
