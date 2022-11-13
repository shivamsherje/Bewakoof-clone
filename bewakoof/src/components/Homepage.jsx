import React from "react";
import Footer from "../homepage/Footer";
import Navbar from "../homepage/Navbar";
import Poster from "../homepage/Poster";
import Allcard from "../homepage/Allcard";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Poster />
      <Allcard/>
      <Footer />
    </div>
  );
};

export default Homepage;
