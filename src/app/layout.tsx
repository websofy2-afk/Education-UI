import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
const dmsans = DM_Sans({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <Aoscompo>
          <Header />
          <NextTopLoader />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  );
}
