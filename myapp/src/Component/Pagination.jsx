import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ handlePageChange, PageNo, TotalPage }) => {
  return (
    <div
      style={{
        width: "50%",
        height: "30px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "10vh",
        marginTop: "5vh",
        alignItems: "center",
      }}
    >
      <button
        className={style.btn}
        disabled={PageNo == 1}
        onClick={() => handlePageChange(-1)}
      >
        Prev
      </button>
      <strong style={{ color: "blue", fontSize: "22px", fontWeight: "bold" }}>
        {PageNo}
      </strong>
      <button
        className={style.btn}
        disabled={PageNo == TotalPage}
        onClick={() => handlePageChange(1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
