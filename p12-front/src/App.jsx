import "./App.css";

import * as React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Employee from "./pages/Employee";
import Error from "./pages/Error";
import Home from "./pages/Home";

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
