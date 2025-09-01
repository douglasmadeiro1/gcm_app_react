import React from "react";
import { Card } from "../types"; // importamos a mesma interface

interface CardsGridProps {
    cards: Card[];
}

const CardsGrid: React.FC<CardsGridProps> = ({ cards }) => {
    return (
        <div className="cards-grid">
            {cards.map((card) => (
                <div key={card.id} className="card" onClick={card.onClick}>
                    <img src={card.image} alt={card.title} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsGrid;
