import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.icon} src={logo} />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.nav_link} to="/movies/popular">
          Popular
        </Link>
        <Link className={styles.nav_link} to="/movies/top_rated">
          Top Rated
        </Link>
        <Link className={styles.nav_link} to="/movies/upcoming">
          Upcoming
        </Link>
      </nav>
    </div>
  );
};

export default Header;
