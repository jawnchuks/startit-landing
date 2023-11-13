import Navbar from "@/components/Layout/Navbar/Navbar";
import "./globals.css";
import { Providers } from "@/lib/utils/providers";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Startit: Igniting Innovation and Entrepreneurship for a Better Tomorrow",
  description: "Join StartIt and be at the forefront of innovation and entrepreneurship. Explore investment opportunities, collaborative projects, and groundbreaking ventures. Start your journey with StartIt for a future of endless possibilities.",
  favicon: "./favicon.ico",
  image:'../public/images/startit-nav-logo.png',
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
