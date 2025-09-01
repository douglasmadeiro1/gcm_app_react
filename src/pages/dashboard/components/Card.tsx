import React from "react";

interface CardProps {
    title: string;
    desc: string;
    img: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, desc, img, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default Card;
