import Menu from './components/Menu';
import Footer from './components/footer';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Menu />
      <Footer />
    </div>

  );
}
