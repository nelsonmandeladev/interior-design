import "./globals.css"
import React from "react"


interface RootLayoutProps {
  children: React.ReactNode
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en"
      suppressHydrationWarning
    >
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}