import React from "react";
import { CardPropsType } from "../../Models/Pages/CardsModel";
import "../../Styles/Pages/Cards.css";

const Card: React.FC<CardPropsType> = ({
  title,
  description,
  imageUrl,
  actions,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-actions">
          {actions.map((action, index) => (
            <button
              key={index}
              className="card-action"
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
