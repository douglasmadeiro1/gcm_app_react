import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;