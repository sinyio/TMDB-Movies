import { FC } from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'

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
        <div className={styles.card}>
          <img
            className={styles.card_img}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
          <div className={styles.card_overlay}>
            <div className={styles.card_title}>{movie.original_title}</div>
            <div className={styles.card_wrapper}>
              <span className={styles.card_release_date}>{movie.release_date}</span>
              <span className={styles.card_rating}>
                {movie.vote_average}
              </span>
            </div>
            <div className={styles.card_description}>
              {movie.overview.slice(0, 118) + "..."}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
