import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import classes from "./MainLayout.module.css";
const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
