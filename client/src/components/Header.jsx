import { Link } from "react-router-dom";
import "./header.css";

import Auth from "../utils/auth";

function Header() {
  return (
    <header className="cp-header-main">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* if logged in */}
            {Auth.loggedIn() ? (
              <>
                <span>
                  Hey there,
                  {Auth.getProfile().data.username}!
                </span>
                <Link to="/logout">Logout </Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
