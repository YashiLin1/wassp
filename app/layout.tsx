import React from "react";
import { ApolloWrapper } from "../lib/apollo-provider";

import "@/app/global.css";

export const metadata = {
  title: "WASSP",
  description: "MULTIBEAM SONAR PRODUCTS & SOLUTIONS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"en"}>
      <body>
      <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
