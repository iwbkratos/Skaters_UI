
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";


import ReduxProvider from "./reduxProvider";
import { Layout } from "../layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skaters",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    
    <html lang="en">
     
      <body>
       <ReduxProvider>
         <Layout children={children}/>
       </ReduxProvider>
      
      </body>

    </html>
    
  );
}
