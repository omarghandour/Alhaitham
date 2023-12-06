import { Inter } from 'next/font/google'
import './globals.css'
import sss from '../public/جديد الهيثم1.svg'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'الهيثم',
  description: 'مطعم الهيثم',
  keywords: 'مطعم الهيثم',
  author: 'Omar Ghandour',
  url: 'https://alhaitham-weld.vercel.app/',
  icons: ['./جديد الهيثم2.svg'],
    twitter: {
    card: 'summary_large_image',
    title: 'الهيثم',
    description: 'مطعم الهيثم',
    image: {sss},
  },
  openGraph: {
    type: 'website',
    url: 'https://alhaitham-weld.vercel.app/',  
    title: 'الهيثم',
    description: 'مطعم الهيثم',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
