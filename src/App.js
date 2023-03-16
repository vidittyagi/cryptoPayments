import React from "react";
import LandingIndex from "./pages/Index/LandingIndex";
import LoginIndex from "./pages/Index/LoginIndex";
import SignUpIndex from "./pages/Index/SignUpIndex";
import DashboardIndex from "./pages/Index/DashboardIndex";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingIndex />,
    },
    {
      path: "/login",
      element: <LoginIndex />,
    },
    {
      path: "/signup",
      element: <SignUpIndex />,
    },
    {
      path: "/dashboard",
      element: <DashboardIndex />,
    },
  ]);
  return element;
}

export default App;
