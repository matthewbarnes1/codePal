import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="cp-header-main">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">LoginForm</Link>
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
