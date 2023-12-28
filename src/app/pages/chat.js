import Image from 'next/image'
import Navbar from '../components/navbar.jsx'
import './styles/chat.css'

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

console.log('hello world');