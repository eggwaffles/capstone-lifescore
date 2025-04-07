"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/styles.css";
import TopNav from "../components/TopNav";
import { FormDataProvider } from "../context/FormDataContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <TopNav />
        <FormDataProvider>
          <div className="main">
            {children}
          </div>
        </FormDataProvider>
      </body>
    </html>
  );
};

export default Layout;
