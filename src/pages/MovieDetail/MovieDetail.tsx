import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './MovieDetail.module.css'

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
    <div className={styles.movie}>
      <div className={styles.movie_intro}>
        <img
          className={styles.movie_backdrop}
          src={`https://image.tmdb.org/t/p/w1280${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className={styles.movie_detail}>
        <div className={styles.movie_detail_left}>
          <div>
            <img
              className={styles.movie_poster}
              src={`https://image.tmdb.org/t/p/w500${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className={styles.movie_detail_right}>
          <div className={styles.movie__detailRight_top}>
            <div className={styles.movie_name}>
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className={styles.movie_rating}>
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}
              <span className={styles.movie_vote_count}>
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className={styles.movie_runtime}>
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className={styles.movie_release_date}>
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className={styles.movie_genres}>
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className={styles.movie_genre} key={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className={styles.movie_detail_wrapepr}>
            <div className={styles.movie_synopsis_text}>Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className={styles.movie_links}>
        <div className={styles.movie_heading}>Useful Links</div>
        {currentMovieDetail && (
          <a href={currentMovieDetail.homepage} target="_blank">
            <span className={`${styles.home_button} ${styles.movie_button}`}>Homepage</span>
          </a>
        )}
        {currentMovieDetail && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
          >
            <span className={`${styles.imdb_button} ${styles.movie_button}`}>On IMDb</span>
          </a>
        )}
      </div>
      <div className={styles.movie_heading}>Production companies</div>
      <div className={styles.movie_production}>
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className={styles.production_company_image}>
                  <img
                    className={styles.production_comapany}
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
