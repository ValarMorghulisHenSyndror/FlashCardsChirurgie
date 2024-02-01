"use client"
import QuizCard from '@/components/QuizCard'; 
import styles from "./page.module.css"; 
import { useState, useEffect } from 'react';

const Quiz = () => { 
    const [isClient, setIsClient] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        setIsClient(true);
    }, []);

    window.addEventListener("resize", ()=>{ 
        setScreenWidth(window.innerWidth)
    })
     
    return (
        <div className={styles.quizContainer}> 
            {isClient ? <QuizCard/> : ""}
        </div>
    );
};

export default Quiz;