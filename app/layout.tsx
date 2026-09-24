import type { Metadata } from "next";
import "./globals.css";
import NavBarWrapper from "@/components/ui/NavBarWrapper";
import BackgroundWrapper from "@/components/ui/BackgroundWrapper";

export const metadata: Metadata = {
  title: "老友友老",
  description: "樂齡友善交友平台",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen">

        {/* ⭐ 背景 */}
        <BackgroundWrapper>

          {/* ⭐ 導覽列 */}
          <NavBarWrapper />

          {/* ⭐ 全站 RWD：手機時加入內距避免貼到邊（不影響桌機） */}
          <main id="main" className="mx-auto w-full max-w-[1200px] px-3 md:px-8 pt-3">
            {children}
          </main>

        </BackgroundWrapper>
      </body>
    </html>
  );
}
