import styles from "./components.module.css";
import { ReactNode, useEffect, useState, useMemo } from "react";
import { VanillaTilt } from "./tilt.js";
import { data } from "@/data/database";
import Image from "next/image";
 
const QuizCard = (): ReactNode => {
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [newCard, setNewCard] = useState(false);
    const [seeNewCard, setSeeNewCard] = useState(false);
    const [index, setIndex] = useState(0);
    const [answerState, setAnswerState] = useState(false);

    const shuffledArray = useMemo(
        () => generateRandomArray(data.length),
        [data.length]
    );

    useEffect(() => {
        VanillaTilt();
    }, []);

    const toggleState = () => {
        if (!isActive) {
            setIsActive(true);
            setTimeout(() => {
                setIsVisible((prev) => !prev);
                setIsActive(false);
            }, 420);
        }
    };

    const getNewCard = () => {
        setSeeNewCard(true);
        setIsActive(false);
        setAnswerState(false);
        setTimeout(() => {
            setNewCard(true);
        }, 1);

        setTimeout(() => {
            if (index === data.length - 1) {
                setIndex(0);
            } else {
                setIndex((prev) => prev + 1);
            }
            setIsVisible(false);
            setNewCard(false);
            setSeeNewCard(false);
        }, 1500);
    };

    return (
        <section className={styles.quizCardOuterContainer}>
            <section className={styles.section} data-tilt>
                <div
                    className={`${styles.quizCardContainer} ${
                        isActive ? styles.active : ""
                    }`}
                    onClick={toggleState}
                >
                    <div className={styles.front}>
                        <span className={styles.question}>{`${
                            shuffledArray[index] + 1
                        }. ${data[shuffledArray[index]].question}`}</span>
                    </div>
                    <div
                        className={`${styles.back} ${
                            isVisible ? styles.visible : ""
                        }`}
                    ></div>
                    <div
                        className={`${styles.newCard} ${
                            newCard ? styles.active : ""
                        } ${seeNewCard ? styles.visibleNewCard : ""}`}
                    ></div>
                </div>
            </section>
            <button onClick={getNewCard}>Draw a card</button>
            <article
                className={`${styles.answerContainer} ${
                    answerState ? styles.opened : ""
                }`}
            >
                <button
                    className={styles.answerButton}
                    onClick={() => {
                        setAnswerState(true);
                        
                    }}
                >
                    Check answer
                </button>
                <div className={styles.answerTextContainer}>
                    <div>
                        <p>{data[shuffledArray[index]].question}</p>
                        {typeof data[shuffledArray[index]].answer === "string" ? (
                            <Image src={data[shuffledArray[index]].answer as string} alt="text" width={1000} height={1000}/>
                        ) : (
                            <ul className={styles.answerText}>
                                {(data[shuffledArray[index]].answer as string[]).map(
                                    (el: string, index: number) => (
                                        <li key={index}>{el}</li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </article>
        </section>
    );
};

function generateRandomArray(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index).sort(
        () => Math.random() - 0.5
    );
}

export default QuizCard;
