import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const updateSearchText = keyword => {
    navigate(`/search/${keyword}`);
  };

  useEffect(() => {
    if (pathname.includes("/search/")) {
      const keyword = decodeURIComponent(pathname.split("/search/")[1]);
      setSearchText(keyword);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button // onClick={updateSearchText}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="goSomeWherenavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Coming soon</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={e => {
                setSearchText(e.target.value);
                updateSearchText(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => updateSearchText(searchText)}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
