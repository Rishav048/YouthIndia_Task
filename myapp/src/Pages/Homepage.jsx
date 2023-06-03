import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../BackGroundImage.avif";

const ButtonStyle = {
  width: "300px",
  height: "55px",
  borderRadius: "20px",
  fontSize: "17px",
  fontWeight: "bolder",
  border: "none",
  color: "black",
  letterSpacing: "1px",
  cursor: "pointer",
  background:
    "linear-gradient(90deg, rgba(255,159,55,1) 35%, rgba(251,69,204,0.9612219887955182) 75%)",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

const Homepage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        border: "2px solid blue",
        display: "flex",

        justifyContent: "space-around",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Link to={"/product"}>
        <button style={ButtonStyle}>Products with Pagination</button>
      </Link>
      <Link to={"/lazyproduct"}>
        <button style={ButtonStyle}>Products with Lazy Loading</button>
      </Link>
    </div>
  );
};

export default Homepage;
