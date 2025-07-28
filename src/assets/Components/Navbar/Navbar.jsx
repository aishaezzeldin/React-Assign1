import { NavLink } from 'react-router-dom';
import './Navbar.css'; 


function Navbar() {
  return (
    <nav
      className="navbar nav-bg-color navbar-expand-lg p-5"
      id="navbarex"
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold text-white fs-3">
          START FRAMEWORK
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav gap-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active-link" : ""}`
                }
              >
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active-link" : ""}`
                }
              >
                PORTFOLIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active-link" : ""}`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;