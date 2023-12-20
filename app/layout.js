'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import React, { useEffect } from "react";
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <Script
          src="matomo.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
      <Toaster />

      <Navbar />
          {children}

          
        <Footer />
      </body>
    </html>
  )
}
