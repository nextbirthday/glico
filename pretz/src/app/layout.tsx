import Provider from "@/provider/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import StyledComponentsRegistry from "@/library/antd/styledComponentsRegistry";

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
      <body>
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

      {/* Kakao Map Script */}
      <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />

      <StyledComponentsRegistry>
          <Provider>{children}</Provider>
      </StyledComponentsRegistry>

      </body>
    </html>
  );

}
