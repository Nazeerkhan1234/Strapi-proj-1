import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <ul className="nav  border border-black">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
