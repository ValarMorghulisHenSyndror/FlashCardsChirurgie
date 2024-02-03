import styles from "./components.module.css";
import { data } from "@/data/database";
import Image from "next/image";

const StudyCard = ({index}:{index:number}):React.ReactNode => {
    return (
        <article className={styles.studyCardContainer}>
            <p className={styles.studyTitle}>{data[index].question}</p>
            {typeof data[index].answer === "string" ? (
                <Image
                    src={data[index].answer as string}
                    alt="text"
                    width={1000}
                    height={1000}
                />
            ) : (
                <ul className={styles.studyAnswerText}>
                    {(data[index].answer as string[]).map(
                        (el: string, index: number) => (
                            <li key={index}>{el}</li>
                        )
                    )}
                </ul>
            )}
        </article>
    );
}

export default StudyCard;