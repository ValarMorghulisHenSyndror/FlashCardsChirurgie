"use client"
import QuizCard from '@/components/QuizCard';
import React, { useState } from 'react';
import styles from "./page.module.css";
import { data } from '@/data/database';

const Quiz = () => {
    const [questionIndex, setQuestionIndex] = useState(Math.floor(Math.random()*data.length))
    const setRandomIndex = () => {
        
    }
    return (
        <div className={styles.quizContainer}> 
            <QuizCard text={data[questionIndex].question} index={questionIndex+1}/>
        </div>
    );
};

export default Quiz;