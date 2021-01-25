import React from "react";

const Header = ({ handleFilter }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <form className="container-fluid">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by phone number"
            aria-label="Search"
            onChange={handleFilter}
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
