'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import { init } from "@socialgouv/matomo-next";
import React, { useEffect } from "react";


const MATOMO_URL = "http://db98-203-18-51-141.ngrok-free.app/matomo.php/matomo.js"
const MATOMO_SITE_ID = 2;

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster />

      <Navbar />
          {children}

          
        <Footer />
      </body>
    </html>
  )
}
