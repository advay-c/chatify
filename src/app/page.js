import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'

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
