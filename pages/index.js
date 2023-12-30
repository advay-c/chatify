import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/navbar.jsx';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1>
        Chatify
      </h1>
    </main>
  )
}