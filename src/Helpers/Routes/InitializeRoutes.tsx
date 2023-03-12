import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../../Pages/index";

function InitializeRoutes() {
  return (
    <Router>
      <Routes>
        {routes.map(([route, Component]) => (
          <Route key={`${route}`} path={`${route}`} element={<Component/>} />
        ))}
      </Routes>
    </Router>
  );
}

export default InitializeRoutes;
