import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const TitleCards = ({title, category}) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Kayflix"}{category}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TitleCards.propTypes = {
  title: PropTypes.string, 
  category: PropTypes.string
};

export default TitleCards;
