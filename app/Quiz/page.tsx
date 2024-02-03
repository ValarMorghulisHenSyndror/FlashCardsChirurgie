"use client"
import QuizCard from '@/components/QuizCard'; 
import styles from "./page.module.css"; 
import React, { useState, useEffect } from 'react';

const Quiz = ():React.ReactNode => { 
    const [isClient, setIsClient] = useState(false); 
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    const getNewCard = () => {

    }

    return (
        <div className={styles.quizContainer}> 
            {isClient ? <QuizCard/> : ""} 
        </div>
    );
};

export default Quiz;