'use client'
import Link from 'next/link';
import styles from './page.module.css'
import ImageSlideshow from './components/images/image-slideshow';
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
            <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>

          </div>
        </div>

      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works?</h2>
          <p>
            Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color
            Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum colorLorem ipsum color
          </p>
          <p>
          Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color
          </p>

        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color
            Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum colorLorem ipsum color
          </p>
          <p>
          Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color Lorem ipsum color
          </p>

        </section>
      </main>
    </>
  );
}
