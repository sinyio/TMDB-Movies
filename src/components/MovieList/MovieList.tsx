import { useEffect, useState, FC } from "react";
import { useParams } from "react-router-dom";
import Card, { Movie } from "../Card/Card";
import styles from "./MovieList.module.css";
import { api_key } from "../../App";

const MovieList: FC = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const { type } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${api_key}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, [type]);

  return (
    <>
      <h2 className={styles.title}>
        {(type ? type : "popular").replace("_", " ").toUpperCase()}
      </h2>
      <ul className={styles.movie_list}>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <Card movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
