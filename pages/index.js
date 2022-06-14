import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Dev newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <h1>Welcome to next</h1>
    </div>
  )
}
