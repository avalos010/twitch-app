import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={pathname == "/" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/channels"
                className={
                  pathname === "/channels" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
              >
                Channels
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
