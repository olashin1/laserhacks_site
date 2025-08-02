/**
 * The navbar component will contain
 * some divs that can link the user to
 * home, a sponsor us page, and about us page.
 */

import "../styles/NavBar.css";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <Link className="nav-btn" to="/">
        Home
      </Link>
      <Link className="nav-btn" to="/sponsor-us">
        Sponsor Us
      </Link>
      <Link className="nav-btn" to="/about-us">
        About Us
      </Link>
    </nav>
  );
}
