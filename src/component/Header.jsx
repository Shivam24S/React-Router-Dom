import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/">Home</Link> */}

            {/* replacing link to NavLink givin by react-router-dom */}
            <NavLink
              to="/"
              className={({ isActive }) => {
                isActive ? classes.list : undefined;
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;
