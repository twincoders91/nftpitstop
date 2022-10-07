import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <NavLink className="nav-logo" to="/">
        NFTPitStop
      </NavLink>
      <div className="nav-items">
        <NavLink className="navBar--links" to="/">
          Home
        </NavLink>
        <NavLink className="navBar--links" to="/about">
          About
        </NavLink>
        <NavLink className="navBar--links" to="/nft">
          NFT
        </NavLink>
        <NavLink className="navBar--links" to="/watchlistpage">
          Watch List
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
