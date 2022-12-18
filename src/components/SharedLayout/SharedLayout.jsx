import { Outlet } from "react-router-dom";
//import css from '/App/App.module.css';
import {  Link } from "react-router-dom";

export const SharedLayout = () => {
  return (
  <div >
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>

    <Outlet />
  </div>
  )
}