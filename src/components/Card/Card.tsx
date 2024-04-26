import { FC } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: string;
  release_date: string;
}

interface CardProps {
  movie: Movie;
}

const Card: FC<CardProps> = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            className="cards__img"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
          <div className="cards__overlay">
            <div className="card__title">{movie.original_title}</div>
            <div className="card__runtime">
              {movie.release_date}
              <span className="card__rating">
                {movie.vote_average}
                <i className="fas fa-star" />
              </span>
            </div>
            <div className="card__description">
              {movie.overview.slice(0, 118) + "..."}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
