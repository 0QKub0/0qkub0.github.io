import Link from 'next/link';
import styles from './main-header.module.css';
import Image from 'next/image';
import logo from '@/assets/logo.png';
const MainHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logo} alt="Logo" priority />
                My Blog
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/meals" className={styles.active}>Meals</Link></li>
                    <li><Link href="/meals/share">Share Meals</Link></li>
                    <li><Link href="/community">Community</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
