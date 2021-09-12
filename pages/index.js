import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Card.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Numerical Analysis</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Numerical Analysis

        </h1>
        <p className={styles.description}>
          Get started by {' '}
          <code className={styles.code}>Numerical methods</code>
          <a href="/snake"> ಠ_ಠ </a>

        </p>

        <div className={styles.grid}>
          <a href="/methods" className={styles.card}>
            <h2 className={styles.h2}>Numerical methods &rarr;</h2>
          </a>

          <a href="/team" className={styles.card}>
            <h2>Team  &rarr;</h2>
          </a>

          <a
            href="/Explain"
            className={styles.card}
          >
            <h2> Explain &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
   
      </footer>
    </div>
  )
}
