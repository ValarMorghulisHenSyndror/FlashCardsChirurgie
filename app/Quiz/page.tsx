"use client"
import QuizCard from '@/components/QuizCard'; 
import styles from "./page.module.css"; 
import { useState, useEffect } from 'react';

const Quiz = () => { 
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
     
    return (
        <div className={styles.quizContainer}> 
            {isClient ? <QuizCard/> : ""}
        </div>
    );
};

export default Quiz;