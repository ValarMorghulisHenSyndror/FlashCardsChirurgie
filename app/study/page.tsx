"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import { data } from "@/data/database";
import Minicard from "@/components/Minicard"; 

const Study = ():React.ReactNode => {

    const [inputText, setInputText] = useState("")
    
    return (
        <div className={styles.container}>
            <div className={styles.introContainer}>
                <h1 className={styles.title}>Study Hall </h1>
                <input type="text" className={styles.input} placeholder="Search..." onChange={(e)=>setInputText(e.target.value.toLowerCase())}/>
            </div>
            <section className={styles.cardContainer
            }>
                {data.filter((el, index)=>el.question.toLowerCase().includes(inputText) || String(index+1).includes(inputText)).map((el, i) => (
                    <Minicard
                        title={el.question}
                        index={el.index}   
                        key={el.index}
                        link={`/study/${el.index-1}`}
                    />
                ))}
            </section>
        </div>
    );
};

export default Study;
