import Link from "next/link";
import styles from "./page.module.css";

export default function Home():React.ReactNode {
    return (
        <main>
            <div className={styles.container}>
                <h1 className={styles.title}>Chirurgie Oral-Maxillofacială</h1>
                <p className={styles.exam}>It may be exam day but it is your day, so good luck</p>
                <div className={styles.buttonContainer}>
                    <Link href="/study">
                        <button>Study</button>
                    </Link>
                    <Link href="/Quiz">
                        <button>Quiz Yourself</button>
                    </Link>
                </div>
            </div>
            <div className={styles.scrollContainer}>
                <div className={styles.scroll} style={{ "--t": "100s" } as React.CSSProperties}>
                    <div>
                        <span>
                            You&apos;re capable and resilient, believe in
                            yourself!
                        </span>
                        <span>Your hard work will pay off – keep pushing!</span>
                        <span>Today is your big day so shine</span>
                        <span>
                            Each exam is a chance to showcase your growth.
                        </span>
                        <span> 
                            Your efforts will shine brighter than any exam
                            stress.
                        </span>
                        <span>
                            You&apos;re not alone – we&apos;re here cheering for
                            you!
                        </span>
                        <span>
                            Stay positive; you&apos;re one step closer to your
                            goals.
                        </span>
                        <span>Your dedication is inspiring; keep it up!</span>
                        <span>
                            It&apos;s about the journey, not just the
                            destination.
                        </span>
                    </div>
                    <div>
                        <span>
                            It&apos;s about the journey, not just the
                            destination.
                        </span>
                        <span>Your dedication is inspiring; keep it up!</span>
                        <span>
                            Stay positive; you&apos;re one step closer to your
                            goals.
                        </span>
                        <span> 
                            Your efforts will shine brighter than any exam
                            stress.
                        </span>
                        <span>
                            You&apos;re not alone – we&apos;re here cheering for
                            you!
                        </span>
                        <span>
                            You&apos;re capable and resilient, believe in
                            yourself!
                        </span>
                        <span>Your hard work will pay off – keep pushing!</span>
                        <span>Today is your big day so shine</span>
                        <span>
                            Each exam is a chance to showcase your growth.
                        </span>
                    </div>
                </div>
                <div className={styles.scroll} style={{ "--t": "120s" } as React.CSSProperties}>
                    <div>
                        <span>
                            You&apos;re capable and resilient, believe in
                            yourself!
                        </span>
                        <span>Your hard work will pay off – keep pushing!</span>
                        <span>Today is your big day so shine</span>
                        <span>
                            Each exam is a chance to showcase your growth.
                        </span>
                        <span>
                            {" "}
                            Your efforts will shine brighter than any exam
                            stress.
                        </span>
                        <span>
                            You&apos;re not alone – we&apos;re here cheering for
                            you!
                        </span>
                        <span>
                            Stay positive; you&apos;re one step closer to your
                            goals.
                        </span>
                        <span>Your dedication is inspiring; keep it up!</span>
                        <span>
                            It&apos;s about the journey, not just the
                            destination.
                        </span>
                    </div>
                    <div>
                        <span>
                            You&apos;re capable and resilient, believe in
                            yourself!
                        </span>
                        <span>Your hard work will pay off – keep pushing!</span>
                        <span>Today is your big day so shine</span>
                        <span>
                            Each exam is a chance to showcase your growth.
                        </span>
                        <span>
                            {" "}
                            Your efforts will shine brighter than any exam
                            stress.
                        </span>
                        <span>
                            You&apos;re not alone – we&apos;re here cheering for
                            you!
                        </span>
                        <span>
                            Stay positive; you&apos;re one step closer to your
                            goals.
                        </span>
                        <span>Your dedication is inspiring; keep it up!</span>
                        <span>
                            It&apos;s about the journey, not just the
                            destination.
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
