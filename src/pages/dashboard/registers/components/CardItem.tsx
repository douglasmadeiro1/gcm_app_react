import React from "react";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ image, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardItem;
