import React from "react";
import styles from "./page.module.css";
import { data } from "@/data/database";
import Minicard from "@/components/Minicard"; 

const study = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introContainer}>
                <h1 className={styles.title}>Study Hall</h1>
                <input type="text" className={styles.input} />
            </div>
            <section className="">
                {data.map((el, i) => (
                    <Minicard
                        title={el.question}
                        index={i + 1}
                        key={i}
                        link={`/study/${i}`}
                    />
                ))}
            </section>
        </div>
    );
};

export default study;
