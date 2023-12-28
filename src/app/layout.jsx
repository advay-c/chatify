import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chatify',
  description: 'Chatify! A tool to communicate with family, friends, and communities online. Paired with great features like End-To-End encryption, customizability, a privacy-focused platform, and more.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
