import styles from "./components.module.css"; 
import { useEffect, useState } from "react"; 
import {VanillaTilt} from "./tilt.js";
import { data } from "@/data/database";

const QuizCard = ( ) => { 
    const [isActive, setIsActive] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(Math.floor(Math.random()*data.length))
    
    const toogleState = () => setIsActive(!isActive);
    useEffect(() => {
        VanillaTilt();
    }, []);

    return (
        <section data-tilt>
            <div className={[styles.quizCardContainer, isActive ? styles.active : ""].join(' ')} onClick={toogleState}>
                <div className={styles.front}>
                    <span className={styles.question}>{`${questionIndex+1}. ${data[questionIndex].question}`}</span>
                </div>
                <div className={styles.back}></div>
            </div> 
            <script></script>
        </section> 
    );
};

export default QuizCard;
