import React from "react";
import "./CardsGrid.css";

export interface Card {
  title: string;
  desc?: string;
  image: string;
  path?: string;
  onClick?: () => void;
}

interface CardsGridProps {
  cards: Card[];
  onNavigate?: (path: string) => void;
}

const CardsGrid: React.FC<CardsGridProps> = ({ cards, onNavigate }) => {
  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="card"
          onClick={() => (card.onClick ? card.onClick() : onNavigate?.(card.path!))}
        >
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          {card.desc && <p>{card.desc}</p>}
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;
