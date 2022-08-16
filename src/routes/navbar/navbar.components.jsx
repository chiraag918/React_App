import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss"




const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          CHIRAAG'S APP
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            <div>ABOUT ME</div>
          </Link>
          <Link className="nav-link" to="/contacts">
            <div>CONTACTS</div>
          </Link>
          <Link className="nav-link" to="/todo">
            <div>TO DO</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
