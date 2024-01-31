import React from "react";
import styles from "./components.module.css"; 
import Link from "next/link";

const Minicard = ({ title, index, link}: { title: string; index:number; link:string;}) => {  
    return (
        <Link href={link}>
            <div className={styles["card-container"]}>
                <div className={styles["card-content"]}>
                    <h1 className={styles["title"]}>{`${index}. ${title}`}</h1>
                </div>
                <div className={styles["checkout-container"]}>Checkout...</div>
            </div>
        </Link>
    );
};

export default Minicard;
