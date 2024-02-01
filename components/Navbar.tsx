import Link from "next/link";
import Image from "next/image";
import styles from "./components.module.css"

const Navbar = () => {
    return (
        <section className={styles.navbarContainer}>
            <Link href="/" className={styles.intro}>
                <Image src="/Logo.png" alt="Logo" width={50} height={50} />
                <p className={styles.introTitle}>Flashcards</p>
            </Link>
            <nav className={styles.navigation}>
                <Link href="/">Main</Link>
                <Link href="/study">Study</Link>
                <Link href="/Quiz">Quiz Yourself</Link>
            </nav>
        </section>
    );
};

export default Navbar;