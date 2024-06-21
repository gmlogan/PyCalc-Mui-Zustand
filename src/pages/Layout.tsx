import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

function Layout() {
  return (
    <>
      <NavBar pageTitle={"nn"} />
      <Outlet />
    </>
  );
}

export default Layout;
