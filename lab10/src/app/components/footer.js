import styles from "../page.module.css";
import Image from 'next/image';
export default function Footer(){
    return (
        <footer className={styles.footer}>        
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Mykyta Tarakanov
      </footer>
    );
}