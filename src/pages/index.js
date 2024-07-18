import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThronesAPP Mobile App</title>
        <meta name="description" content="Get data from ThronesApp and display it on your mobile device with our user-friendly application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>ThronesApp Mobile App</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#download">Download</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Your Gateway to the World of Thrones</h2>
          <p>Discover characters, houses, and more from the ThronesApp with our easy-to-use mobile application.</p>
          <a href="#download" className={styles.ctaButton}>Download Now</a>
        </section>

        <h2 className={`${styles.features} ${styles.lineAfter}`}>Features</h2>

        <section id="features" className={`${styles.features} ${styles.lineAfter}`}>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <h3>Character Listings</h3>
              <p>Browse through detailed profiles of your favorite characters from the ThronesApp.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>User Profiles</h3>
              <p>Create and manage your own profile with ease.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Voice-to-Text</h3>
              <p>Interact with the app using voice commands for a seamless experience.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Analytics</h3>
              <p>Track your app usage with integrated Firebase Analytics.</p>
            </div>
          </div>
        </section>
        <h2>Screenshots</h2>
        <section id="screenshots" className={`${styles.screenshots}  ${styles.lineAfter}`}>
          
          <div className={styles.screenshotGrid}>
            <Image src="/screenshot1.jpg" alt="Screenshot 1" width={300} height={600} />
            <Image src="/screenshot2.jpg" alt="Screenshot 2" width={300} height={600} />
            <Image src="/screenshot3.jpg" alt="Screenshot 3" width={300} height={600} />
          </div>
        </section>
        <h2>Download the App</h2>
        <section id="download" className={`${styles.download}`}>
          
          <p>Available on both Android and iOS platforms. Click below to download.</p>
          <a href="https://play.google.com" className={`${styles.ctaButton} ${styles.space}`}>Download for Android</a>
          <a href="https://www.apple.com/app-store/" className={styles.ctaButton}>Download for iOS</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 ThronesApp Mobile App. All rights reserved.</p>
      </footer>
    </div>
  );
}
