
import Dashboard from "./components/views/Dashboard";
import UserProfile from "./components/views/UserProfile";
import toApply from "./components/views/toApply.js";
// import toApply from "./components/Table/index"
import allAppliedList from "./components/views/allAppliedList.js";
import Notifications from "./components/views/Notifications.js";
import cards from "./components/views/cards";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/toApply",
    name: "To Apply",
    icon: "nc-icon nc-tap-01",
    component: toApply,
    layout: "/admin",
  },
 
  {
    path: "/allAppliedList",
    name: "All Applied",
    icon: "nc-icon nc-notes",
    component: allAppliedList,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/cards",
    name: "Cards",
    icon: "nc-icon nc-notes",
    component: cards,
    layout: "/admin",
  },
];

export default dashboardRoutes;
