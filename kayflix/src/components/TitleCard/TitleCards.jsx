import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const TitleCards = ({title, category}) => {

  const cardsRef = useRef();
  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWI3MWE2NjM4ZDBlNjNhNmMzYTE2ZDViOGVhYmZhZCIsIm5iZiI6MTU4MTg4NDk2Ni4yMDEsInN1YiI6IjVlNDlhNjI2MzU4MTFkMDAxOTQ4OWJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MA35N0jVyTHwRjWf5UevhuR9O6HR64wpd6aZvhi36lE'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.original_title} />
              <p>{card.original_title}</p>
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
