import SpotifyWhite from "../assets/Spotify_White.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white mx-16 h-[15vh] items-center dark:bg-black flex flex-row justify-between dark:text-white">
      <NavLink to="/">
        <div className="flex flex-row items-center">
          <img src={SpotifyWhite} alt="" className="h-10 mr-2" />
          <span className="text-2xl font-bold">Spotify</span>
        </div>
      </NavLink>

      <div className="flex flex-row items-center">
        <a className="mx-4 font-semibold">Premium</a>
        <a className="mx-4 font-semibold">Support</a>
        <a className="mx-4 font-semibold">Download</a>
        <a className="mx-4 font-semibold">|</a>
        <NavLink
          className="mx-4 font-semibold border rounded-2xl px-3 py-1"
          to="/signup"
        >
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
