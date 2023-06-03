import React from "react";
import Loader_Image from "../Loader_Image.gif";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "20%",
        height: "40%",
        top: "30%",
        left: "40%",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src={Loader_Image}
        alt="Loader...!"
      />
    </div>
  );
};

export default Loader;
