import { FC, useEffect, useState } from "react";
import { api_key } from "../../App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./Home.module.css";

interface CarouselMovie {
  id: number;
  original_title: string;
  release_date: string;
  vote_average: string;
  overview: string;
  backdrop_path: string;
}

const Home: FC = () => {
  const [popularMovies, setPopularMovies] = useState<CarouselMovie[]>([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className={styles.movie}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </div>
            <div className={styles.movie_overlay}>
              <div className={styles.movie_title}>{movie.original_title}</div>
              <div className={styles.movie_release_date}>
                {movie.release_date}
                <span className={styles.movie_rating}>
                  {movie.vote_average}
                </span>
              </div>
              <div className={styles.movie_description}>{movie.overview}</div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </>
  );
};

export default Home;
