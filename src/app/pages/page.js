import Image from 'next/image'
import styles from './styles/page.module.css'
import Navbar from '../components/navbar.jsx'

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
