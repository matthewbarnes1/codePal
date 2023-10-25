import { Link } from "react-router-dom";
import "./header.css";

import Auth from "../utils/auth";

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="cp-header-main">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!Auth.loggedIn() ? (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          ) : (
            <li></li>
          )}
          <li>
            {/* if logged in */}
            {Auth.loggedIn() ? (
              <>
                <span>
                  Hey there,
                  {Auth.getProfile().data.username}!
                </span>
                <div onClick={logout}>Logout </div>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
