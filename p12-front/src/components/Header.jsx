import { Link, Navigate, useNavigate } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <h1 className="sr-only">Remede Agency</h1>
      </Link>
    </nav>
  );
};

export default Header;
