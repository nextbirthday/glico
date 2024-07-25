import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glico, pocky",
  description: "Glico, pocky",
};

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="kr">
      <body className={inter.className}>{children}</body>

      {/* Kakao Script */}
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
        />

      {/* Naver Script */}
      <Script
          src='https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js'
          strategy='beforeInteractive'
       />
    </html>
  );

}
