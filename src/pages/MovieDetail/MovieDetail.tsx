import { useCallback, useEffect, useState } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompanies {
  id: number;
  name: string;
  logo_path: string;
}

interface MovieDetail {
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  tagline: string;
  vote_average: string;
  vote_count: number;
  runtime: string;
  release_date: string;
  genres: Array<Genre>;
  overview: string;
  homepage: string;
  imdb_id: number;
  production_companies: Array<ProductionCompanies>;
}

const MovieDetail = () => {
  const [currentMovieDetail, setCurrentMovieDetail] = useState<MovieDetail>();
  const { id } = useParams();

  const getData = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=92165677886e7ff9a89b57f489209b9b`
    )
      .then((res) => res.json())
      .then((data) => setCurrentMovieDetail(data));
  }, [id]);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [getData]);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="movie__genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" key={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailWrapper">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {currentMovieDetail && (
          <a href={currentMovieDetail.homepage} target="_blank">
            <span className="movie__homeButton movie__Button">Homepage</span>
          </a>
        )}
        {currentMovieDetail && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
          >
            <span className="movie__imdbButton movie__Button">On IMDb</span>
          </a>
        )}
      </div>
      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default MovieDetail;
