import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import Detail from "./pages/detail";
function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 20</p>
      </header>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/detail" component={<Detail />} /> {/* Add this line */}
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </NavLink>
        <NavLink to="/" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}
export default App;
