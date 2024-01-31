import React from "react";
import "./components.css"; 
import Link from "next/link";

const Minicard = ({ title, index, link}: { title: string; index:number; link:string;}) => {  
    return (
        <Link href={link}>
            <div className="card-container">
                <div className="card-content">
                    <h1 className="title">{`${index}. ${title}`}</h1>
                </div>
                <div className="checkout-container">Checkout...</div>
            </div>
        </Link>
    );
};

export default Minicard;
