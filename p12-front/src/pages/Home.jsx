import "../assets/css/main.scss";

import Employee from "./Employee";
import Footer from "../components/Footer";
import Formular from "../components/Formular";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <h1>HRnet</h1>
        {/* <Employee /> */}
        <Link to="/employee">Click here to see employee list</Link>
        <h2>Create Employee</h2>
        <Formular />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
