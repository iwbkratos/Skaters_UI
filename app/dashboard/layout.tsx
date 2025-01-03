import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DashboardPage } from "../../components/dashboard/dashboardlayout";
 import '../globals.css'
import { Layout } from "../../layout/layout";


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
     
         <div className="dash"> 
          <DashboardPage/>
          {children}
        </div >
        
   
  );
}
