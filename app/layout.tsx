import React from "react";

import "@/app/global.css";

export const metadata = {
  title: "WASSP",
  description: "MULTIBEAM SONAR PRODUCTS & SOLUTIONS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"en"}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
