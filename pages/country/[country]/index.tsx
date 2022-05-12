import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul>
          <li><Link href="/list/foo">/list/foo</Link></li>
          <li><Link href="/lists/foo">/lists/foo</Link></li>
        </ul>
      </main>
    </div>
  )
}

export default Home
