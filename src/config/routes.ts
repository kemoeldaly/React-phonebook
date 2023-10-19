import home from "../pages/home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

interface RouteType {
  path: string;
  component: () => JSX.Element;
  name: string;
}

const routes: RouteType[] = [
  {
    path: "",
    component: home,
    name: "Home Screen",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
];

export default routes;
