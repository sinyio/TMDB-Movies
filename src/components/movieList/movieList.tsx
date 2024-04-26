import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Card, { Movie } from "../Card/Card";
import "./movieList.scss";

const MovieList = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const { type } = useParams();

  const getData = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=92165677886e7ff9a89b57f489209b9b`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, [type]);

  useEffect(() => {
    getData();
  }, [getData, type]);

  return (
    <>
      <h2 className="list__title">
        {(type ? type : "POPULAR").replace("_", " ").toUpperCase()}
      </h2>
      <ul className="movie__list">
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
