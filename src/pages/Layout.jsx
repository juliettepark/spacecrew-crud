import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <ul className="nav-container">
          <li key="home-button">
            <Link className="button" to="/">
              Home
            </Link>
          </li>

          <li key="create">
            <Link className="button" to="/create">
              Create
            </Link>
          </li>

          <li key="gallery">
            <Link className="button" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;