import type { Metadata } from 'next'
import { Space_Grotesk } from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Shopify AI',
  description: 'Automate your customer support with a phone number synced to your Shopify store.',
}

const spaceGrotesk = Space_Grotesk({subsets: ["latin"], weight: ["300", "400", "500", "600",  "700"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={spaceGrotesk.className} >{children}</body>
    </html>
  )
}
