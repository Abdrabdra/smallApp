import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ bool }) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My App
          </Link>

          {bool && (
            <Link className="btn btn-outline-light" to="/home/adduser">
              Add Student
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
