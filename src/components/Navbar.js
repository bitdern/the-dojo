// styles & images
import "./Navbar.css";
import Temple from "../assets/temple.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/signup">Signup</Link>
        </li>
        <li className="btn">Logout</li>
      </ul>
    </div>
  );
}
