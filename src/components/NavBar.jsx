import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Nav = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" width="88"></img>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" activeClassname="page" to={"/category/accesorios"}>
                      Accesorios
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassname="page" to={"/category/indumentaria"}>
                      Indumentaria
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassname="page" to={"/category/mochilas"}>
                      Mochilas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassname="page" to={"/category/suplementos"}>
                      Suplementos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassname="page" to={"todos"}>
                      Todos
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

  )

}

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Nav  />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;