import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
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
