import React from "react";
import PropTypes from "prop-types";
import "./card.css/";

const Card = ({ title, features }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__title">{title}</div>
        <div className="card__features">
          {features?.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node.isRequired, // 使用 node，因為 title 是 JSX 元素
  features: PropTypes.arrayOf(PropTypes.string).isRequired, // 確保 features 是字串陣列
};

export default Card;
