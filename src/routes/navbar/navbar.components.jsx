import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss"
import { ReactComponent as Logo } from "../../assets/Chiraag.svg"




const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo/>
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
          <Link className="nav-link" to="/posts">
            <div>POSTS</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
