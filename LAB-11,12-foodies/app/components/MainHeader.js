import Link from 'next/link';
import styles from './main-header.module.css';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import NavLink from './NavLink';
const MainHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logo} alt="Logo" priority />
                My Blog
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
