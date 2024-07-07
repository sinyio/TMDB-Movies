import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/movieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
