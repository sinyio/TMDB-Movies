import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={logo} />
      </Link>
      <Link className="header__link" to="/movies/popular">
        Popular
      </Link>
      <Link className="header__link" to="/movies/top_rated">
        Top Rated
      </Link>
      <Link className="header__link" to="/movies/upcoming">
        Upcoming
      </Link>
    </div>
  );
};

export default Header;
