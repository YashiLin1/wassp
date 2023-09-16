import React from 'react';
import Navbar from "@/app/components/Navbar";
import "./global.css";

export const metadata = {
  title: 'WASSP',
  description: 'MULTIBEAM SONAR PRODUCTS & SOLUTIONS.',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'en'}>
      <body>
      
          {/* <Navbar /> */}
          <main>{children}</main>
 
      </body>
    </html>
  );
}

