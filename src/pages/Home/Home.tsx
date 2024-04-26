import { useEffect, useState } from "react";
import "./Home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

interface CarouselPopularMovie {
  id: number;
  original_title: string;
  release_date: string;
  vote_average: string;
  overview: string;
  backdrop_path: string;
}

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<CarouselPopularMovie[]>(
    []
  );

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=92165677886e7ff9a89b57f489209b9b"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie.original_title}</div>
                <div className="posterImage__runtime">
                  {movie.release_date}
                  <span className="posterImage__rating">
                    {movie.vote_average}
                  </span>
                </div>
                <div className="posterImage__description">{movie.overview}</div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
