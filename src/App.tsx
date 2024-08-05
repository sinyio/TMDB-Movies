import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Home from "./pages/Home/Home";
import { FC } from "react";
import Layout from "./components/Layout/Layout";

export const api_key = import.meta.env.VITE_REACT_APP_API_KEY;

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
