import { lazy } from "react";

// Pages
const Home = lazy(() => import("@pages/PublicPages/index"));
const ProfilePage = lazy(() => import("@pages/Dashboard/Profile"));
const Dashboard = lazy(() => import("@pages/Dashboard/index"));

const publicRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
];

const privateRoutes = [
  {
    path: "",
    title: "Dashboard",
    component: Dashboard,
  },
  {
    path: "profile",
    title: "Profile",
    component: ProfilePage,
  },
];

export { publicRoutes, privateRoutes };
