import Image from 'next/image';
import Link from 'next/link';
import styles from "../page.module.css";
export default function Menu() {
    return (
        <main className={styles.main}>

            <nav>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <br />
                <ul className={styles.ctas}>
                    <li><Link href="/interests">Moje zainteresowania</Link></li>
                    <li><Link href="/film">Mój ulubiony film</Link></li>
                    <li><Link href="/contact">Kontakt</Link></li>
                    <li><Link href="/about">O mnie</Link></li>
                </ul>
            </nav>



        </main>
    );
}