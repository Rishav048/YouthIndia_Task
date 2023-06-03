import React from "react";
import style from "./ProductCard.module.css";
const ProductCard = ({ Poster, Title, Year }) => {
  return (
    <div className={style.card}>
      <img src={Poster} alt={Title} />
      <h5>{Title}</h5>
      <h4>Year : {Year}</h4>
    </div>
  );
};

export default ProductCard;
