import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <div className={styles.container}>
                <h1 className={styles.title}>Chirurgie Dentară</h1>
                <div className={styles.buttonContainer}>
                    <Link href="/study">
                        <button className={styles.button}>Study</button>
                    </Link>
                    <Link href="/Quiz">
                        <button className={styles.button}>Quiz Yourself</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
